import { GYM_MACHINES } from "../data/machines";
import type { GymMachine } from "../types/machine";

export interface MatchResult {
  machine: GymMachine;
  confidence: number;
  reason: string;
}

/**
 * Simulates AI-powered machine recognition by analyzing the image filename
 * and returning ranked matches. In a production app, this would call a
 * computer vision API (e.g. Google Vision, Azure AI, or a custom ML model).
 */
export function identifyMachine(
  file: File
): Promise<MatchResult[]> {
  return new Promise((resolve) => {
    // Simulate processing delay (like an API call)
    setTimeout(() => {
      const filename = file.name.toLowerCase();

      // Score each machine based on keyword matches in the filename
      const scored = GYM_MACHINES.map((machine) => {
        let score = 0;
        for (const kw of machine.keywords) {
          if (filename.includes(kw.toLowerCase())) {
            score += kw.length; // longer keyword = more specific match
          }
        }
        return { machine, score };
      });

      // Sort by score descending
      scored.sort((a, b) => b.score - a.score);

      if (scored[0].score > 0) {
        // We have keyword matches — return top results with confidence
        const topScore = scored[0].score;
        const matches: MatchResult[] = scored
          .filter((s) => s.score > 0)
          .slice(0, 3)
          .map((s, i) => ({
            machine: s.machine,
            confidence: Math.round((s.score / topScore) * 100 - i * 5),
            reason: `Matched based on image name`,
          }));
        resolve(matches);
      } else {
        // No filename match — return a shuffled set of top machines
        // so the user can pick the one they photographed
        const shuffled = [...GYM_MACHINES]
          .sort(() => Math.random() - 0.5)
          .slice(0, 5);
        const matches: MatchResult[] = shuffled.map((machine, i) => ({
          machine,
          confidence: Math.max(85 - i * 12, 30),
          reason: "Select the machine you photographed",
        }));
        resolve(matches);
      }
    }, 1800); // Simulate 1.8s processing time
  });
}
