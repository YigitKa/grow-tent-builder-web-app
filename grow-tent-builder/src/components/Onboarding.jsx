import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../context/OnboardingContext';
import { useSettings } from '../context/SettingsContext';

export default function Onboarding() {
    const [currentStep, setCurrentStep] = useState(1);
    const [showTooltip, setShowTooltip] = useState(false);
    const { onboardingData, updateOnboarding, completeOnboarding } = useOnboarding();
    const { getBuilderUrl, t } = useSettings();
    const navigate = useNavigate();

    const steps = [
        {
            questionKey: "onboardingQ1",
            field: "plantType",
            options: [
                { value: "herbs", labelKey: "onboardingQ1Opt1Label", detailKey: "onboardingQ1Opt1Detail", icon: "🌿" },
                { value: "vegetables", labelKey: "onboardingQ1Opt2Label", detailKey: "onboardingQ1Opt2Detail", icon: "🥬" },
                { value: "flowers", labelKey: "onboardingQ1Opt3Label", detailKey: "onboardingQ1Opt3Detail", icon: "🌺" }
            ],
            tooltips: {
                herbs: "onboardingQ1Tip1",
                vegetables: "onboardingQ1Tip2",
                flowers: "onboardingQ1Tip3"
            }
        },
        {
            questionKey: "onboardingQ2",
            field: "experienceLevel",
            options: [
                { value: "beginner", labelKey: "onboardingQ2Opt1Label", icon: "🌱" },
                { value: "intermediate", labelKey: "onboardingQ2Opt2Label", icon: "🌿" },
                { value: "expert", labelKey: "onboardingQ2Opt3Label", icon: "🏆" }
            ],
            tooltips: {
                beginner: "onboardingQ2Tip1",
                intermediate: "onboardingQ2Tip2",
                expert: "onboardingQ2Tip3"
            }
        },
        {
            questionKey: "onboardingQ3",
            field: "tentSize",
            options: [
                { value: "60x60", labelKey: "onboardingQ3Opt1Label", detailKey: "onboardingQ3Opt1Detail", icon: "📦" },
                { value: "100x100", labelKey: "onboardingQ3Opt2Label", detailKey: "onboardingQ3Opt2Detail", icon: "📦" },
                { value: "120x120", labelKey: "onboardingQ3Opt3Label", detailKey: "onboardingQ3Opt3Detail", icon: "📦" }
            ],
            tooltips: {
                "60x60": "onboardingQ3Tip1",
                "100x100": "onboardingQ3Tip2",
                "120x120": "onboardingQ3Tip3"
            }
        },
        {
            questionKey: "onboardingQ4",
            field: "lightPreference",
            options: [
                { value: "led", labelKey: "onboardingQ4Opt1Label", detailKey: "onboardingQ4Opt1Detail", icon: "💡" },
                { value: "hps", labelKey: "onboardingQ4Opt2Label", detailKey: "onboardingQ4Opt2Detail", icon: "🔥" },
                { value: "unsure", labelKey: "onboardingQ4Opt3Label", detailKey: "onboardingQ4Opt3Detail", icon: "❓" }
            ],
            tooltips: {
                led: "onboardingQ4Tip1",
                hps: "onboardingQ4Tip2",
                unsure: "onboardingQ4Tip3"
            }
        },
        {
            questionKey: "onboardingQ5",
            field: "automationLevel",
            options: [
                { value: "manual", labelKey: "onboardingQ5Opt1Label", detailKey: "onboardingQ5Opt1Detail", icon: "✋" },
                { value: "semi", labelKey: "onboardingQ5Opt2Label", detailKey: "onboardingQ5Opt2Detail", icon: "⚙️" },
                { value: "full", labelKey: "onboardingQ5Opt3Label", detailKey: "onboardingQ5Opt3Detail", icon: "🤖" }
            ],
            tooltips: {
                manual: "onboardingQ5Tip1",
                semi: "onboardingQ5Tip2",
                full: "onboardingQ5Tip3"
            }
        }
    ];

    const currentStepData = steps[currentStep - 1];
    const progress = (currentStep / steps.length) * 100;

    const [selectedTooltip, setSelectedTooltip] = useState('');

    const handleSelect = (value) => {
        updateOnboarding(currentStepData.field, value);
        setSelectedTooltip(t(currentStepData.tooltips[value]));
        setShowTooltip(true);
    };

    const handleContinue = () => {
        setShowTooltip(false);
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        } else {
            completeOnboarding();
            navigate(getBuilderUrl());
        }
    };

    // Auto-advance after 10 seconds
    React.useEffect(() => {
        if (showTooltip) {
            const timer = setTimeout(() => {
                handleContinue();
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [showTooltip]);

    const handleSkip = () => {
        completeOnboarding();
        navigate(getBuilderUrl());
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            setShowTooltip(false);
        }
    };

    return (
        <div className="onboarding-container">
            {/* Background */}
            <div className="onboarding-bg">
                <div className="glow-orb orb-green" />
                <div className="grid-overlay" />
            </div>

            {/* Content */}
            <div className="onboarding-content">
                {/* Progress Bar */}
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }} />
                    <span className="progress-text">{t('onboardingStep')} {currentStep} / {steps.length}</span>
                </div>

                {/* Question */}
                <div className="question-container fade-in">
                    <h2 className="question-title">{t(currentStepData.questionKey)}</h2>

                    {/* Options */}
                    <div className="options-grid">
                        {currentStepData.options.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleSelect(option.value)}
                                className={`option-card ${onboardingData[currentStepData.field] === option.value ? 'selected' : ''
                                    }`}
                            >
                                <span className="option-icon">{option.icon}</span>
                                <div className="option-text">
                                    <span className="option-label">{t(option.labelKey)}</span>
                                    {option.detailKey && <span className="option-detail">{t(option.detailKey)}</span>}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Tooltip */}
                    {showTooltip && (
                        <div className="tooltip-box fade-in">
                            <p>{selectedTooltip}</p>
                            <button onClick={handleContinue} className="btn-continue">
                                {t('onboardingContinue')}
                            </button>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <div className="nav-buttons">
                    {currentStep > 1 && (
                        <button onClick={handleBack} className="btn-secondary">
                            {t('onboardingBack')}
                        </button>
                    )}
                    <button onClick={handleSkip} className="btn-skip">
                        {t('onboardingSkip')}
                    </button>
                </div>
            </div>

            <style>{`
                .onboarding-container {
                    min-height: 100vh;
                    background: #0a0a0a;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    position: relative;
                    overflow: hidden;
                }

                .onboarding-bg {
                    position: fixed;
                    inset: 0;
                    z-index: 0;
                    pointer-events: none;
                }

                .glow-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(100px);
                    opacity: 0.3;
                }

                .orb-green {
                    width: 500px;
                    height: 500px;
                    background: #10b981;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
                    background-size: 50px 50px;
                }

                .onboarding-content {
                    max-width: 800px;
                    width: 100%;
                    position: relative;
                    z-index: 1;
                }

                .progress-container {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 999px;
                    height: 8px;
                    margin-bottom: 3rem;
                    position: relative;
                    overflow: hidden;
                }

                .progress-bar {
                    height: 100%;
                    background: linear-gradient(90deg, #10b981, #3b82f6);
                    border-radius: 999px;
                    transition: width 0.5s ease;
                }

                .progress-text {
                    position: absolute;
                    top: -30px;
                    right: 0;
                    font-size: 0.875rem;
                    color: #94a3b8;
                }

                .question-container {
                    text-align: center;
                }

                .question-title {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 3rem;
                    line-height: 1.3;
                }

                .options-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .option-card {
                    background: rgba(255, 255, 255, 0.05);
                    border: 2px solid rgba(255, 255, 255, 0.15);
                    border-radius: 1rem;
                    padding: 2rem 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    color: #fff;
                }

                .option-card:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(16, 185, 129, 0.6);
                    transform: translateY(-5px);
                }

                .option-card.selected {
                    background: rgba(16, 185, 129, 0.2);
                    border-color: #10b981;
                }

                .option-icon {
                    font-size: 3rem;
                }

                .option-text {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    align-items: center;
                }

                .option-label {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #ffffff;
                }

                .option-detail {
                    font-size: 0.875rem;
                    color: #94a3b8;
                    font-weight: 400;
                }

                .tooltip-box {
                    background: rgba(16, 185, 129, 0.15);
                    border: 1px solid rgba(16, 185, 129, 0.4);
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    margin-top: 2rem;
                    text-align: center;
                    color: #ffffff;
                }

                .tooltip-box p {
                    line-height: 1.6;
                    margin-bottom: 1rem;
                    font-size: 1rem;
                }

                .btn-continue {
                    background: #10b981;
                    color: white;
                    border: none;
                    padding: 0.75rem 2rem;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                    transition: all 0.2s ease;
                    margin-top: 0.5rem;
                }

                .btn-continue:hover {
                    background: #059669;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
                }

                .nav-buttons {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 3rem;
                }

                .btn-secondary, .btn-skip {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-size: 1rem;
                }

                .btn-secondary:hover, .btn-skip:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(255, 255, 255, 0.2);
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }

                /* Mobile */
                @media (max-width: 768px) {
                    .question-title {
                        font-size: 1.5rem;
                    }

                    .options-grid {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }

                    .option-card {
                        flex-direction: row;
                        padding: 1rem;
                    }

                    .option-icon {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </div >
    );
}
