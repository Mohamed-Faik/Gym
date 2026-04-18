export interface MachineStep {
  title: string;
  description: string;
}

export interface MuscleGroup {
  primary: string[];
  secondary: string[];
}

export interface GymMachine {
  id: string;
  name: string;
  category: MachineCategory;
  emoji: string;
  muscles: MuscleGroup;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  steps: MachineStep[];
  tips: string[];
  warnings: string[];
  keywords: string[];
}

export type MachineCategory =
  | "Chest"
  | "Back"
  | "Legs"
  | "Shoulders"
  | "Arms"
  | "Core"
  | "Cardio"
  | "Full Body";
