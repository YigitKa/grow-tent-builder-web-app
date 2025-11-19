import { BuilderProvider, useBuilder } from './context/BuilderContext';
import Layout from './components/Layout';
import TentSelection from './features/TentSelection';
import LightingSelection from './features/LightingSelection';

import VentilationSelection from './features/VentilationSelection';

import EnvironmentSelection from './features/EnvironmentSelection';

import NutrientSelection from './features/NutrientSelection';

import MonitoringSelection from './features/MonitoringSelection';

import SummaryView from './features/SummaryView';

function BuilderContent() {
  const { state } = useBuilder();

  const renderStep = () => {
    switch (state.currentStep) {
      case 1: return <TentSelection />;
      case 2: return <LightingSelection />;
      case 3: return <VentilationSelection />;
      case 4: return <EnvironmentSelection />;
      case 5: return <NutrientSelection />;
      case 6: return <MonitoringSelection />;
      case 7: return <SummaryView />;
      default: return <div>Unknown Step</div>;
    }
  };

  return renderStep();
}

import { SettingsProvider } from './context/SettingsContext';
import SettingsBar from './components/SettingsBar';

function App() {
  return (
    <SettingsProvider>
      <BuilderProvider>
        <SettingsBar />
        <Layout>
          <BuilderContent />
        </Layout>
      </BuilderProvider>
    </SettingsProvider>
  );
}

export default App;
