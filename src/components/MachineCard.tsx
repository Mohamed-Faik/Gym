import type { GymMachine } from "../types/machine";
import { Dumbbell, Zap, Shield } from "lucide-react";

interface MachineCardProps {
  machine: GymMachine;
  onClick: (machine: GymMachine) => void;
}

export function MachineCard({ machine, onClick }: MachineCardProps) {
  return (
    <div className="machine-card" onClick={() => onClick(machine)}>
      <div className="machine-card-header">
        <span className="machine-emoji">{machine.emoji}</span>
        <div className="machine-card-info">
          <h3 className="machine-name">{machine.name}</h3>
          <span className="machine-category-badge">{machine.category}</span>
        </div>
      </div>
      <p className="machine-muscles">
        💪 {machine.muscles.primary.join(", ")}
      </p>
      <div
        className={`difficulty-badge ${machine.difficulty}`}
        title="Difficulty level"
      >
        {machine.difficulty === "Beginner" && <Shield size={12} />}
        {machine.difficulty === "Intermediate" && <Dumbbell size={12} />}
        {machine.difficulty === "Advanced" && <Zap size={12} />}
        {machine.difficulty}
      </div>
    </div>
  );
}
