import { useEffect, useState } from 'react';
import estimateMonthlyCost from '../utils/electricCostEstimator';
import { useSettings } from '../context/SettingsContext';
import { useBuilder } from '../context/BuilderContext';
import styles from './ElectricCostEstimator.module.css';

const STORAGE_KEY = 'electricEstimator.v1';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    // ignore
  }
}

export default function ElectricCostEstimator({ onClose } = {}) {
  const { currency } = useSettings();
  const saved = loadState();
  const { state: builderState } = useBuilder();

  // Helper to convert builder items (which may use `watts`) to estimator device shape ({name, watt, quantity, hoursPerDay?})
  const fromBuilderItems = (items = []) => items.map(i => ({
    name: i.name || i.title || 'unknown',
    watt: Number(i.watts || i.watt || 0),
    quantity: i.quantity || 1,
    hoursPerDay: i.hoursPerDay
  }));

  // Initialize lists: prefer builder-selected items when present, otherwise saved, otherwise sensible defaults
  const initialLights = (builderState?.selectedItems?.lighting?.length > 0)
    ? fromBuilderItems(builderState.selectedItems.lighting)
    : (saved?.lights || [{ name: 'LED 300W', watt: 300, quantity: 1 }]);

  const initialFans = (builderState?.selectedItems?.ventilation?.length > 0)
    ? fromBuilderItems(builderState.selectedItems.ventilation)
    : (saved?.fans || [{ name: 'Inline Fan 100W', watt: 100, quantity: 1 }]);

  const [lights, setLights] = useState(initialLights);
  const [fans, setFans] = useState(initialFans);
  const [pricePerKwh, setPricePerKwh] = useState(saved?.pricePerKwh ?? 1.2);
  const [daysPerMonth, setDaysPerMonth] = useState(saved?.daysPerMonth ?? 30);
  const [report, setReport] = useState(null);
  const [userTouched, setUserTouched] = useState(false);

  useEffect(() => {
    const r = estimateMonthlyCost({ lights, fans, pricePerKwh: Number(pricePerKwh), daysPerMonth: Number(daysPerMonth) });
    setReport(r);
    saveState({ lights, fans, pricePerKwh, daysPerMonth });
  }, [lights, fans, pricePerKwh, daysPerMonth]);

  // If the builder's selected items change and the user hasn't manually edited the estimator,
  // update the estimator lists to reflect the current selections.
  useEffect(() => {
    if (userTouched) return;
    try {
      const bLights = builderState?.selectedItems?.lighting || [];
      const bFans = builderState?.selectedItems?.ventilation || [];
      if (bLights.length > 0) setLights(fromBuilderItems(bLights));
      if (bFans.length > 0) setFans(fromBuilderItems(bFans));
    } catch (e) {
      // ignore
    }
  }, [builderState?.selectedItems?.lighting, builderState?.selectedItems?.ventilation, userTouched]);

  // Helpers for device lists
  const updateDevice = (list, setList, idx, patch) => {
    const copy = list.map((it, i) => i === idx ? { ...it, ...patch } : it);
    setList(copy);
    setUserTouched(true);
  };

  const addDevice = (list, setList, template) => setList([...list, template]);
  const removeDevice = (list, setList, idx) => setList(list.filter((_, i) => i !== idx));

  return (
    <div className={styles.estimatorContainer}>
      <div className={styles.estimatorHeader}>
        <strong>Elektrik Maliyet Tahmincisi</strong>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className={`${styles.btn} ${styles.btnSmall}`} onClick={() => { saveState({ lights, fans, pricePerKwh, daysPerMonth }); if (onClose) onClose(); }}>Kapat</button>
        </div>
      </div>

      <div className={styles.estimatorInputsGrid}>
        <div>
          <label style={{ fontSize: 12 }}>Elektrik fiyatı (kWh)</label>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input type="number" step="0.01" min="0" value={pricePerKwh} onChange={(e) => setPricePerKwh(e.target.value)} className={styles.input} />
            <span style={{ fontSize: 14 }}>{currency}</span>
          </div>
        </div>
        <div>
          <label style={{ fontSize: 12 }}>Gün/ay</label>
          <input type="number" min="1" max="31" value={daysPerMonth} onChange={(e) => setDaysPerMonth(e.target.value)} className={styles.input} />
        </div>
      </div>

      <hr style={{ margin: '12px 0', borderColor: 'var(--border-color)' }} />

      <div className={styles.estimatorDevicesFlex}>
        <div className={styles.deviceSection}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong>Işıklar</strong>
            <button className={`${styles.btn} ${styles.btnSmall}`} onClick={() => addDevice(lights, setLights, { name: 'Yeni ışık', watt: 100, quantity: 1 })}>Ekle</button>
          </div>
          <div style={{ marginTop: 8 }}>
            {lights.map((d, i) => (
              <div key={i} className={styles.deviceRow}>
                <input value={d.name} onChange={(e) => updateDevice(lights, setLights, i, { name: e.target.value })} className={`${styles.input} ${styles.inputDeviceName}`} />
                <input type="number" value={d.watt} onChange={(e) => updateDevice(lights, setLights, i, { watt: Number(e.target.value) })} className={`${styles.input} ${styles.inputTiny}`} />
                <input type="number" value={d.quantity} min={1} onChange={(e) => updateDevice(lights, setLights, i, { quantity: Number(e.target.value) })} className={`${styles.input} ${styles.inputTiny}`} />
                <button className={`${styles.btn} ${styles.btnDanger}`} onClick={() => removeDevice(lights, setLights, i)}>Sil</button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.deviceSection}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong>Fanlar</strong>
            <button className={`${styles.btn} ${styles.btnSmall}`} onClick={() => addDevice(fans, setFans, { name: 'Yeni fan', watt: 50, quantity: 1 })}>Ekle</button>
          </div>
          <div style={{ marginTop: 8 }}>
            {fans.map((d, i) => (
              <div key={i} className={styles.deviceRow}>
                <input value={d.name} onChange={(e) => updateDevice(fans, setFans, i, { name: e.target.value })} className={`${styles.input} ${styles.inputDeviceName}`} />
                <input type="number" value={d.watt} onChange={(e) => updateDevice(fans, setFans, i, { watt: Number(e.target.value) })} className={`${styles.input} ${styles.inputTiny}`} />
                <input type="number" value={d.quantity} min={1} onChange={(e) => updateDevice(fans, setFans, i, { quantity: Number(e.target.value) })} className={`${styles.input} ${styles.inputTiny}`} />
                <button className={`${styles.btn} ${styles.btnDanger}`} onClick={() => removeDevice(fans, setFans, i)}>Sil</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr style={{ margin: '12px 0', borderColor: 'var(--border-color)' }} />

      {report && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>Büyüme (18/6)</strong>
            <span>{report.veg.totalKwh} kWh — {(report.veg.totalCost).toFixed(2)} {currency}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <strong>Çiçeklenme (12/12)</strong>
            <span>{report.flower.totalKwh} kWh — {(report.flower.totalCost).toFixed(2)} {currency}</span>
          </div>

          <details style={{ marginTop: 10 }}>
            <summary style={{ cursor: 'pointer' }}>Detaylı döküm</summary>
            <div style={{ marginTop: 8 }}>
              <strong>Işıklar ve Fanlar (aylık kWh / adet)</strong>
              <ul className={styles.estList}>
                {report.veg.items.map((it, idx) => (
                  <li key={idx}>{it.name}: {it.monthlyKwh} kWh</li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      )}
    </div>
  );
}
