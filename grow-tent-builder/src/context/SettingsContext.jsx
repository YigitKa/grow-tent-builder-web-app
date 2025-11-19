import { createContext, useContext, useState } from 'react';
import { translations } from '../utils/translations';

const SettingsContext = createContext();

export const CURRENCIES = {
    USD: { symbol: '$', rate: 1 },
    EUR: { symbol: '€', rate: 0.92 },
    TRY: { symbol: '₺', rate: 32.50 } // Mock rate
};

export const UNITS = {
    IMPERIAL: { label: 'ft', factor: 1, area: 'sq ft', vol: 'cu ft' },
    METRIC: { label: 'cm', factor: 30.48, area: 'm²', vol: 'm³' }
};

export function SettingsProvider({ children }) {
    const [language, setLanguageState] = useState('en');
    const [currency, setCurrencyState] = useState('USD');
    const [unitSystem, setUnitSystem] = useState('IMPERIAL');

    // Smart Setters
    const setLanguage = (lang) => {
        setLanguageState(lang);
        if (lang === 'tr') {
            setCurrencyState('TRY');
            setUnitSystem('METRIC');
        } else if (lang === 'en') {
            setCurrencyState('USD');
            setUnitSystem('IMPERIAL');
        }
    };

    const setCurrency = (curr) => {
        setCurrencyState(curr);
        if (curr === 'EUR' || curr === 'TRY') {
            setUnitSystem('METRIC');
        } else if (curr === 'USD') {
            setUnitSystem('IMPERIAL');
        }
    };

    const t = (key, params = {}) => {
        let text = translations[language][key] || key;
        Object.keys(params).forEach(param => {
            text = text.replace(`{${param}}`, params[param]);
        });
        return text;
    };

    const formatPrice = (priceUSD) => {
        const { symbol, rate } = CURRENCIES[currency];
        return `${symbol}${(priceUSD * rate).toFixed(2)}`;
    };

    const formatUnit = (value, type = 'length') => {
        if (unitSystem === 'IMPERIAL') return value;
        // Simple conversion for display
        if (type === 'length') return (value * 30.48).toFixed(0);
        if (type === 'area') return (value * 0.0929).toFixed(2);
        if (type === 'volume') return (value * 0.0283).toFixed(2);
        return value;
    };

    const getUnitLabel = (type = 'length') => {
        if (unitSystem === 'IMPERIAL') {
            if (type === 'length') return 'ft';
            if (type === 'area') return 'sq ft';
            if (type === 'volume') return 'cu ft';
        } else {
            if (type === 'length') return 'cm';
            if (type === 'area') return 'm²';
            if (type === 'volume') return 'm³';
        }
    };

    return (
        <SettingsContext.Provider value={{
            language, setLanguage,
            currency, setCurrency,
            unitSystem, setUnitSystem,
            t,
            formatPrice,
            formatUnit,
            getUnitLabel
        }}>
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    return useContext(SettingsContext);
}
