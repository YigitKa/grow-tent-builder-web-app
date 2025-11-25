import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { translations } from '../utils/translations';

const SettingsContext = createContext();

export const CURRENCIES = {
    USD: { symbol: '$', rate: 1 },
    EUR: { symbol: '€', rate: 0.92 },
    TRY: { symbol: '₺', rate: 32.50 }
};

export const UNITS = {
    IMPERIAL: { label: 'ft', factor: 1, area: 'sq ft', vol: 'cu ft' },
    METRIC: { label: 'cm', factor: 30.48, area: 'm²', vol: 'm³' }
};

// Detect browser language
const detectBrowserLanguage = () => {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.toLowerCase().startsWith('tr')) {
        return 'tr';
    }
    return 'en';
};

// Load from localStorage or use defaults
const getInitialLanguage = () => {
    const saved = localStorage.getItem('language');
    return saved || detectBrowserLanguage();
};

const getInitialCurrency = () => {
    const saved = localStorage.getItem('currency');
    if (saved) return saved;
    const lang = getInitialLanguage();
    return lang === 'tr' ? 'TRY' : 'USD';
};

const getInitialUnitSystem = () => {
    const saved = localStorage.getItem('unitSystem');
    if (saved) return saved;
    const lang = getInitialLanguage();
    return lang === 'tr' ? 'METRIC' : 'IMPERIAL';
};

export function SettingsProvider({ children }) {
    const [language, setLanguageState] = useState(getInitialLanguage);
    const [currency, setCurrencyState] = useState(getInitialCurrency);
    const [unitSystem, setUnitSystemState] = useState(getInitialUnitSystem);

    const setLanguage = useCallback((lang) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);

        if (lang === 'tr') {
            setCurrencyState('TRY');
            localStorage.setItem('currency', 'TRY');
            setUnitSystemState('METRIC');
            localStorage.setItem('unitSystem', 'METRIC');
        } else if (lang === 'en') {
            setCurrencyState('USD');
            localStorage.setItem('currency', 'USD');
            setUnitSystemState('IMPERIAL');
            localStorage.setItem('unitSystem', 'IMPERIAL');
        }
    }, []);

    const setCurrency = useCallback((curr) => {
        setCurrencyState(curr);
        localStorage.setItem('currency', curr);

        if (curr === 'EUR' || curr === 'TRY') {
            setUnitSystemState('METRIC');
            localStorage.setItem('unitSystem', 'METRIC');
        } else if (curr === 'USD') {
            setUnitSystemState('IMPERIAL');
            localStorage.setItem('unitSystem', 'IMPERIAL');
        }
    }, []);

    const setUnitSystem = useCallback((units) => {
        setUnitSystemState(units);
        localStorage.setItem('unitSystem', units);
    }, []);

    // Memoize translation function based on language
    const t = useCallback((key, params = {}) => {
        // Try current language, fallback to English, then to key
        let text = translations[language]?.[key] || translations['en']?.[key] || key;
        const paramKeys = Object.keys(params);
        if (paramKeys.length > 0) {
            paramKeys.forEach(param => {
                text = text.replace(`{${param}}`, params[param]);
            });
        }
        return text;
    }, [language]);

    const formatPrice = useCallback((priceUSD) => {
        const { symbol, rate } = CURRENCIES[currency];
        return `${symbol}${(priceUSD * rate).toFixed(2)}`;
    }, [currency]);

    const formatUnit = useCallback((value, type = 'length') => {
        if (unitSystem === 'IMPERIAL') return value;
        if (type === 'length') return (value * 30.48).toFixed(0);
        if (type === 'area') return (value * 0.0929).toFixed(2);
        if (type === 'volume') return (value * 0.0283).toFixed(2);
        return value;
    }, [unitSystem]);

    const getUnitLabel = useCallback((type = 'length') => {
        if (unitSystem === 'IMPERIAL') {
            if (type === 'length') return 'ft';
            if (type === 'area') return 'sq ft';
            if (type === 'volume') return 'cu ft';
        } else {
            if (type === 'length') return 'cm';
            if (type === 'area') return 'm²';
            if (type === 'volume') return 'm³';
        }
    }, [unitSystem]);

    const getBuilderUrl = useCallback(() => {
        return language === 'tr' ? '/buyume-cadiri-kurulum-olusturucu' : '/grow-tent-setup-builder';
    }, [language]);

    // Memoize the context value to prevent unnecessary re-renders
    const contextValue = useMemo(() => ({
        language, setLanguage,
        currency, setCurrency,
        unitSystem, setUnitSystem,
        t,
        formatPrice,
        formatUnit,
        getUnitLabel,
        getBuilderUrl
    }), [language, setLanguage, currency, setCurrency, unitSystem, setUnitSystem, t, formatPrice, formatUnit, getUnitLabel, getBuilderUrl]);

    return (
        <SettingsContext.Provider value={contextValue}>
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    return useContext(SettingsContext);
}
