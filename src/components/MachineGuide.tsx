import type { GymMachine } from "../types/machine";
import { ArrowLeft, Dumbbell, Zap, Shield, CheckCircle, AlertTriangle } from "lucide-react";

interface MachineGuideProps {
  machine: GymMachine;
  onBack: () => void;
}

export function MachineGuide({ machine, onBack }: MachineGuideProps) {
  return (
    <div className="guide-container">
      <button className="guide-back-btn" onClick={onBack}>
        <ArrowLeft size={16} />
        Back
      </button>

      {/* Hero */}
      <div className="guide-hero">
        <div className="guide-hero-top">
          <span className="guide-emoji">{machine.emoji}</span>
          <div className="guide-title-area">
            <h1 className="guide-title">{machine.name}</h1>
            <div className="guide-meta">
              <span className="machine-category-badge">{machine.category}</span>
              <span className={`difficulty-badge ${machine.difficulty}`}>
                {machine.difficulty === "Beginner" && <Shield size={12} />}
                {machine.difficulty === "Intermediate" && <Dumbbell size={12} />}
                {machine.difficulty === "Advanced" && <Zap size={12} />}
                {machine.difficulty}
              </span>
            </div>
          </div>
        </div>

        <div className="guide-muscles-section">
          <div className="muscle-group">
            <p className="muscle-group-label">Primary Muscles</p>
            <ul className="muscle-group-list">
              {machine.muscles.primary.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="muscle-group">
            <p className="muscle-group-label">Secondary Muscles</p>
            <ul className="muscle-group-list">
              {machine.muscles.secondary.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div>
        <h2 className="section-title">
          <span>📋</span> How to Use
        </h2>
        <div className="steps-list">
          {machine.steps.map((step, i) => (
            <div className="step-card" key={i}>
              <div className="step-number">{i + 1}</div>
              <div className="step-content">
                <p className="step-title">{step.title}</p>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips & Warnings */}
      <div className="tips-warnings-grid">
        <div className="tips-card">
          <h3 className="section-title">
            <CheckCircle size={16} />
            Pro Tips
          </h3>
          <ul className="tips-list">
            {machine.tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
        <div className="warnings-card">
          <h3 className="section-title">
            <AlertTriangle size={16} />
            Safety Warnings
          </h3>
          <ul className="warnings-list">
            {machine.warnings.map((warning, i) => (
              <li key={i}>{warning}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
