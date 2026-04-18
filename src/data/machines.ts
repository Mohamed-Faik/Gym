import type { GymMachine } from "../types/machine";

export const GYM_MACHINES: GymMachine[] = [
  {
    id: "bench-press",
    name: "Bench Press",
    category: "Chest",
    emoji: "🏋️",
    muscles: {
      primary: ["Pectoralis Major"],
      secondary: ["Anterior Deltoid", "Triceps Brachii"],
    },
    difficulty: "Intermediate",
    keywords: ["bench", "press", "chest", "barbell", "flat bench"],
    steps: [
      {
        title: "Set Up the Bench",
        description:
          "Lie flat on the bench with your eyes directly under the bar. Plant your feet firmly on the floor, shoulder-width apart.",
      },
      {
        title: "Grip the Bar",
        description:
          "Grip the bar slightly wider than shoulder-width with an overhand grip. Wrap your thumbs fully around the bar for safety.",
      },
      {
        title: "Unrack the Bar",
        description:
          "Lift the bar off the rack by straightening your arms. Move it directly over your chest, keeping your arms locked out.",
      },
      {
        title: "Lower the Bar",
        description:
          "Slowly lower the bar to your mid-chest while keeping your elbows at about 45–75° from your torso. Inhale as you lower.",
      },
      {
        title: "Press the Bar Up",
        description:
          "Push the bar back up in a slight arc toward the rack, exhaling as you press. Fully extend your arms at the top.",
      },
      {
        title: "Re-rack the Bar",
        description:
          "After completing your reps, carefully guide the bar back onto the rack hooks. Do not drop it.",
      },
    ],
    tips: [
      "Keep your shoulder blades squeezed together throughout the movement",
      "Maintain a slight natural arch in your lower back",
      "Always use a spotter when lifting heavy weights",
      "Control the weight on the way down — don't let it drop",
    ],
    warnings: [
      "Never bench press alone without a spotter or safety bars",
      "Do not bounce the bar off your chest",
      "Avoid flaring your elbows out 90° — it strains the shoulder joint",
    ],
  },
  {
    id: "lat-pulldown",
    name: "Lat Pulldown",
    category: "Back",
    emoji: "🔽",
    muscles: {
      primary: ["Latissimus Dorsi"],
      secondary: ["Biceps Brachii", "Rear Deltoid", "Rhomboids"],
    },
    difficulty: "Beginner",
    keywords: ["lat", "pulldown", "pull down", "back", "cable", "wide grip"],
    steps: [
      {
        title: "Adjust the Knee Pad",
        description:
          "Set the knee pad so it sits snugly on your thighs when seated, preventing your body from lifting off the seat.",
      },
      {
        title: "Grip the Bar",
        description:
          "Stand on the foot pegs and grip the bar wider than shoulder-width with an overhand grip. Sit down and slide your knees under the pad.",
      },
      {
        title: "Lean Back Slightly",
        description:
          "Sit tall with a slight backward lean (about 15–20°). Stick your chest out and engage your core.",
      },
      {
        title: "Pull the Bar Down",
        description:
          "Initiate the pull with your elbows, driving them down and back toward your hips. Bring the bar to your upper chest. Exhale as you pull.",
      },
      {
        title: "Squeeze at the Bottom",
        description:
          "At the bottom position, squeeze your lats and hold for a moment to maximize muscle contraction.",
      },
      {
        title: "Slowly Return to Start",
        description:
          "Allow the bar to rise in a controlled manner back to the starting position, feeling a full stretch in your lats. Inhale as you return.",
      },
    ],
    tips: [
      "Focus on pulling with your elbows, not your hands",
      "Avoid using momentum — keep the movement smooth and controlled",
      "Keep your chest up throughout the entire movement",
      "Pull the bar to your collarbone, not behind your neck",
    ],
    warnings: [
      "Do not pull the bar behind your neck — it puts excessive stress on your cervical spine",
      "Avoid swinging your torso backward to move the weight",
    ],
  },
  {
    id: "leg-press",
    name: "Leg Press",
    category: "Legs",
    emoji: "🦵",
    muscles: {
      primary: ["Quadriceps"],
      secondary: ["Glutes", "Hamstrings", "Calves"],
    },
    difficulty: "Beginner",
    keywords: ["leg press", "legs", "quad", "quadriceps", "press machine"],
    steps: [
      {
        title: "Set Up the Machine",
        description:
          "Sit in the leg press machine with your back flat against the pad. Place your feet shoulder-width apart on the platform.",
      },
      {
        title: "Release the Safety Handles",
        description:
          "Push the platform forward slightly, then rotate the safety handles outward to release them.",
      },
      {
        title: "Lower the Platform",
        description:
          "Bend your knees slowly, lowering the platform toward your chest. Lower until your knees are at about 90°. Inhale as you lower.",
      },
      {
        title: "Press the Platform Up",
        description:
          "Push through your heels to press the platform back up. Exhale as you press. Do not lock out your knees at the top.",
      },
      {
        title: "Re-engage Safety Handles",
        description:
          "After completing your set, rotate the safety handles back in to lock the platform in place before standing.",
      },
    ],
    tips: [
      "Keep your lower back flat against the seat pad at all times",
      "Place feet higher on the platform to emphasize glutes/hamstrings",
      "Place feet lower to emphasize quadriceps",
      "Keep your knees tracking in line with your toes",
    ],
    warnings: [
      "Never lock out your knees at full extension",
      "Do not let your lower back round away from the pad",
      "Always engage the safety handles before exiting the machine",
    ],
  },
  {
    id: "cable-crossover",
    name: "Cable Crossover",
    category: "Chest",
    emoji: "✂️",
    muscles: {
      primary: ["Pectoralis Major (inner)"],
      secondary: ["Anterior Deltoid", "Biceps Brachii"],
    },
    difficulty: "Intermediate",
    keywords: ["cable", "crossover", "fly", "chest", "pec deck"],
    steps: [
      {
        title: "Set the Cables",
        description:
          "Set both cable pulleys to the high position. Attach D-ring handles to both sides.",
      },
      {
        title: "Stand in the Center",
        description:
          "Step forward so you are centered between both stacks. Hold one handle in each hand.",
      },
      {
        title: "Starting Position",
        description:
          "Step one foot forward, lean forward slightly, and extend your arms out to the sides with a slight bend in your elbows.",
      },
      {
        title: "Bring Hands Together",
        description:
          "With a controlled arc motion, bring both hands together in front of you at about chest height. Exhale as you bring them together.",
      },
      {
        title: "Squeeze and Hold",
        description:
          "When your hands meet, squeeze your pecs for one second. Your hands can cross slightly for extra contraction.",
      },
      {
        title: "Slowly Return",
        description:
          "Open your arms back to the starting position in a controlled manner, feeling the stretch across your chest. Inhale as you return.",
      },
    ],
    tips: [
      "Maintain a slight bend in the elbows throughout — never straighten fully",
      "Think about hugging a large barrel — use that range of motion",
      "Keep your torso still; don't rotate or sway",
    ],
    warnings: [
      "Do not use too heavy a weight that forces you to use momentum",
      "Avoid fully straightening your elbows under load",
    ],
  },
  {
    id: "seated-row",
    name: "Seated Cable Row",
    category: "Back",
    emoji: "🚣",
    muscles: {
      primary: ["Latissimus Dorsi", "Rhomboids", "Middle Trapezius"],
      secondary: ["Biceps Brachii", "Rear Deltoid"],
    },
    difficulty: "Beginner",
    keywords: ["seated row", "cable row", "row", "back", "rowing machine"],
    steps: [
      {
        title: "Sit Down and Grab the Handle",
        description:
          "Sit on the bench with your feet on the foot platform, knees slightly bent. Grab the cable handle with both hands.",
      },
      {
        title: "Start with Arms Extended",
        description:
          "Lean forward slightly to feel a stretch in your lats, keeping your back flat. This is your starting position.",
      },
      {
        title: "Pull the Handle to Your Abdomen",
        description:
          "Drive your elbows back and pull the handle toward your lower abdomen. Keep your elbows close to your torso. Exhale as you pull.",
      },
      {
        title: "Squeeze Your Back",
        description:
          "At the end of the movement, squeeze your shoulder blades together and hold for one second.",
      },
      {
        title: "Slowly Return",
        description:
          "Control the weight back to the starting position, extending your arms and leaning forward slightly. Inhale as you return.",
      },
    ],
    tips: [
      "Keep your chest tall — do not round your back",
      "Initiate the pull with your elbows, not your hands",
      "A slight forward lean at the start increases range of motion",
    ],
    warnings: [
      "Do not jerk or swing your torso to move the weight",
      "Keep your lower back protected — do not hyperextend",
    ],
  },
  {
    id: "shoulder-press",
    name: "Shoulder Press Machine",
    category: "Shoulders",
    emoji: "💪",
    muscles: {
      primary: ["Anterior Deltoid", "Lateral Deltoid"],
      secondary: ["Triceps Brachii", "Upper Trapezius"],
    },
    difficulty: "Beginner",
    keywords: [
      "shoulder press",
      "overhead press",
      "shoulder machine",
      "OHP",
      "deltoid",
    ],
    steps: [
      {
        title: "Adjust the Seat Height",
        description:
          "Set the seat so the handles are at about shoulder level when seated. Your grip should be at ear height.",
      },
      {
        title: "Sit and Grip",
        description:
          "Sit upright with your back flat against the pad. Grip the handles with both hands, palms facing forward.",
      },
      {
        title: "Press Upward",
        description:
          "Push the handles straight up overhead in a smooth, controlled motion. Exhale as you press up.",
      },
      {
        title: "Fully Extend (But Don't Lock)",
        description:
          "Press until your arms are nearly fully extended. Avoid locking out your elbows at the top.",
      },
      {
        title: "Lower with Control",
        description:
          "Slowly lower the handles back to the starting position (shoulder level). Inhale as you lower.",
      },
    ],
    tips: [
      "Keep your core braced throughout the movement",
      "Do not arch your lower back excessively",
      "Keep your head neutral — do not push forward",
    ],
    warnings: [
      "Do not lock out your elbows at the top of each rep",
      "Avoid pressing with a forward head posture",
      "Start with lighter weight to learn the movement pattern",
    ],
  },
  {
    id: "leg-curl",
    name: "Leg Curl Machine",
    category: "Legs",
    emoji: "🦿",
    muscles: {
      primary: ["Hamstrings"],
      secondary: ["Calves (Gastrocnemius)"],
    },
    difficulty: "Beginner",
    keywords: ["leg curl", "hamstring", "hamstrings", "lying curl"],
    steps: [
      {
        title: "Adjust the Machine",
        description:
          "Set the leg pad so it rests just above your heels (on your lower calves). The pivot point of the machine should align with your knees.",
      },
      {
        title: "Lie Face Down",
        description:
          "Lie face down on the bench with your thighs flat on the pad. Grip the handles under the bench for stability.",
      },
      {
        title: "Curl Your Legs Up",
        description:
          "Bend your knees and bring your heels toward your glutes in a smooth curl. Exhale as you curl up.",
      },
      {
        title: "Squeeze at the Top",
        description:
          "At the top of the movement, squeeze your hamstrings for one second.",
      },
      {
        title: "Lower with Control",
        description:
          "Slowly lower your legs back to the starting position, fully extending without letting the weight plates touch. Inhale as you lower.",
      },
    ],
    tips: [
      "Keep your hips flat on the bench — do not lift them",
      "Focus on a full range of motion",
      "Perform the movement slowly and controlled",
    ],
    warnings: [
      "Do not let the weight drop — always control the descent",
      "Avoid hyperextending at the bottom of the movement",
    ],
  },
  {
    id: "treadmill",
    name: "Treadmill",
    category: "Cardio",
    emoji: "🏃",
    muscles: {
      primary: ["Quadriceps", "Hamstrings", "Calves"],
      secondary: ["Glutes", "Core"],
    },
    difficulty: "Beginner",
    keywords: ["treadmill", "running", "walking", "cardio", "run"],
    steps: [
      {
        title: "Mount the Treadmill",
        description:
          "Step onto the side rails (not the belt) and clip the safety key to your clothing. This will stop the machine if you fall.",
      },
      {
        title: "Start at a Low Speed",
        description:
          "Press the 'Start' button. The belt will start slowly. Step onto the moving belt and start walking.",
      },
      {
        title: "Adjust Speed Gradually",
        description:
          "Use the speed controls to gradually increase your pace. For beginners, start with a brisk walk (3–4 mph). Runners typically work at 5–8 mph.",
      },
      {
        title: "Adjust Incline (Optional)",
        description:
          "Use the incline controls to add a grade for a harder workout. A 1–2% incline mimics outdoor running.",
      },
      {
        title: "Maintain Good Form",
        description:
          "Walk/run upright with a natural arm swing. Look forward, not down. Keep your shoulders relaxed.",
      },
      {
        title: "Cool Down",
        description:
          "Before stopping, reduce speed gradually over 2–5 minutes to cool down. Do not jump off a moving belt.",
      },
    ],
    tips: [
      "Always attach the safety clip (emergency stop) to your shirt",
      "Land mid-foot, not on your heel, for a more natural stride",
      "Stay hydrated — bring a water bottle",
      "Use a 1% incline to better simulate outdoor terrain",
    ],
    warnings: [
      "Never step onto the treadmill while the belt is moving at high speed",
      "Do not hold the handrails while running — it reduces workout intensity and affects form",
      "Always slow down gradually before stopping",
    ],
  },
  {
    id: "rowing-machine",
    name: "Rowing Machine (Ergometer)",
    category: "Cardio",
    emoji: "🚣",
    muscles: {
      primary: ["Back", "Hamstrings", "Glutes"],
      secondary: ["Core", "Biceps", "Shoulders"],
    },
    difficulty: "Intermediate",
    keywords: ["rowing", "rower", "ergometer", "erg", "concept2"],
    steps: [
      {
        title: "Set Up the Foot Straps",
        description:
          "Sit on the seat and place your feet in the foot stretchers. Secure the straps so your feet are snug but comfortable.",
      },
      {
        title: "The Catch Position",
        description:
          "Slide forward on the seat. Lean your upper body forward with arms extended, shins vertical, and core engaged. This is the 'catch' position.",
      },
      {
        title: "The Drive — Legs First",
        description:
          "Push through your heels to drive your legs down. Keep your arms straight and body leaned forward during this phase.",
      },
      {
        title: "The Drive — Body Swing",
        description:
          "Once your legs are nearly extended, swing your upper body back to about 11 o'clock position.",
      },
      {
        title: "The Drive — Arms Pull",
        description:
          "Pull the handle into your lower ribs/abdomen with your elbows going back and out. Exhale through this phase.",
      },
      {
        title: "The Recovery",
        description:
          "Extend your arms first, then lean your body forward, then slide your seat forward. Inhale during recovery. This completes one stroke.",
      },
    ],
    tips: [
      "The sequence is: Legs → Body → Arms (Drive) and Arms → Body → Legs (Recovery)",
      "Keep a strong posture — do not slouch or round your back",
      "Pull the handle to your lower ribs, not your chest",
      "Aim for 20–30 strokes per minute for a steady workout",
    ],
    warnings: [
      "Do not round your lower back — especially during the catch",
      "Avoid pulling with your arms before your legs are fully extended",
    ],
  },
  {
    id: "cable-bicep-curl",
    name: "Cable Bicep Curl",
    category: "Arms",
    emoji: "💪",
    muscles: {
      primary: ["Biceps Brachii"],
      secondary: ["Brachialis", "Forearm Flexors"],
    },
    difficulty: "Beginner",
    keywords: ["bicep curl", "cable curl", "bicep", "arms", "curl machine"],
    steps: [
      {
        title: "Set the Cable to Low Position",
        description:
          "Attach a straight bar or EZ-curl bar to the low pulley of the cable machine.",
      },
      {
        title: "Stand and Grip",
        description:
          "Stand facing the machine with your feet shoulder-width apart. Grip the bar with an underhand grip (palms facing up), hands shoulder-width apart.",
      },
      {
        title: "Starting Position",
        description:
          "Let your arms hang straight down with a slight bend at the elbow. Stand upright with your core engaged.",
      },
      {
        title: "Curl the Bar Up",
        description:
          "Bend your elbows and curl the bar upward toward your shoulders. Keep your upper arms stationary. Exhale as you curl.",
      },
      {
        title: "Squeeze at the Top",
        description:
          "At the top, when the bar is at shoulder height, squeeze your biceps hard for one second.",
      },
      {
        title: "Lower Slowly",
        description:
          "Lower the bar back to the starting position slowly and with control. Inhale as you lower.",
      },
    ],
    tips: [
      "Keep your elbows pinned to your sides throughout the movement",
      "Do not swing your torso — keep it upright",
      "The cable provides constant tension throughout the range of motion",
    ],
    warnings: [
      "Do not use momentum to swing the weight up",
      "Avoid hyperextending your elbows at the bottom",
    ],
  },
  {
    id: "tricep-pushdown",
    name: "Tricep Pushdown",
    category: "Arms",
    emoji: "⬇️",
    muscles: {
      primary: ["Triceps Brachii"],
      secondary: ["Forearm Extensors"],
    },
    difficulty: "Beginner",
    keywords: [
      "tricep pushdown",
      "tricep",
      "push down",
      "cable pushdown",
      "arms",
    ],
    steps: [
      {
        title: "Attach the Handle",
        description:
          "Attach a straight bar, rope, or V-bar to the high pulley of the cable machine.",
      },
      {
        title: "Stand Facing the Machine",
        description:
          "Stand with your feet shoulder-width apart, facing the cable machine. Grip the attachment with both hands.",
      },
      {
        title: "Tuck Your Elbows",
        description:
          "Bring your elbows in close to your torso and keep them there throughout the movement. Lean forward very slightly.",
      },
      {
        title: "Push Down",
        description:
          "Push the attachment downward by extending your elbows until your arms are nearly straight. Exhale as you push down.",
      },
      {
        title: "Squeeze at the Bottom",
        description:
          "At full extension, squeeze your triceps hard for one second.",
      },
      {
        title: "Return to Start",
        description:
          "Slowly allow the weight to pull your forearms back up to the starting position (forearms about parallel to the floor). Inhale as you return.",
      },
    ],
    tips: [
      "Keep your upper arms stationary throughout the movement",
      "A rope attachment allows you to rotate your wrists at the bottom for extra contraction",
      "Keep your core engaged for stability",
    ],
    warnings: [
      "Do not let your elbows drift away from your body",
      "Avoid using excessive weight that causes you to lean over the machine",
    ],
  },
  {
    id: "hack-squat",
    name: "Hack Squat Machine",
    category: "Legs",
    emoji: "🏋️",
    muscles: {
      primary: ["Quadriceps"],
      secondary: ["Glutes", "Hamstrings"],
    },
    difficulty: "Intermediate",
    keywords: ["hack squat", "squat machine", "legs", "quad"],
    steps: [
      {
        title: "Load the Machine",
        description:
          "Load appropriate weight on both sides of the hack squat machine equally.",
      },
      {
        title: "Step In and Position",
        description:
          "Step onto the platform and position your feet shoulder-width apart. Your back should be flat against the angled back pad.",
      },
      {
        title: "Release the Safeties",
        description:
          "Place your shoulders under the shoulder pads. Grip the handles and push up slightly, then release the safety handles.",
      },
      {
        title: "Lower Down",
        description:
          "Bend your knees and hips to lower yourself in a squat motion. Lower until your thighs are parallel to the platform or slightly below. Inhale as you lower.",
      },
      {
        title: "Drive Back Up",
        description:
          "Push through your heels to drive yourself back up. Exhale as you push. Keep your knees tracking over your toes.",
      },
      {
        title: "Re-engage Safeties",
        description:
          "After your last rep, rotate the safety handles back in to lock the machine in place before stepping out.",
      },
    ],
    tips: [
      "Place your feet slightly forward on the platform to reduce knee strain",
      "Keep your lower back flat against the pad",
      "Go to full depth for maximum muscle activation",
    ],
    warnings: [
      "Never release the safeties with heavy weight before you are properly positioned",
      "Do not let your knees cave inward",
    ],
  },
  {
    id: "chest-fly-machine",
    name: "Chest Fly / Pec Deck Machine",
    category: "Chest",
    emoji: "🦅",
    muscles: {
      primary: ["Pectoralis Major"],
      secondary: ["Anterior Deltoid"],
    },
    difficulty: "Beginner",
    keywords: ["pec deck", "chest fly", "fly machine", "butterfly", "chest"],
    steps: [
      {
        title: "Adjust Seat Height",
        description:
          "Set the seat height so that the handles are at chest level when seated.",
      },
      {
        title: "Adjust Arm Range",
        description:
          "Set the arm width so you feel a comfortable stretch in your chest without straining your shoulders.",
      },
      {
        title: "Sit and Grip",
        description:
          "Sit upright with your back flat against the pad. Grip both handles with your palms facing inward or forward.",
      },
      {
        title: "Bring Handles Together",
        description:
          "Using your chest, bring both handles together in front of you in a wide arc. Exhale as you bring them together.",
      },
      {
        title: "Squeeze and Hold",
        description:
          "When the handles are nearly touching, squeeze your pecs for one second.",
      },
      {
        title: "Slowly Return",
        description:
          "Open your arms back in a controlled manner to the starting position. Inhale as you open. Feel the stretch in your chest.",
      },
    ],
    tips: [
      "Maintain a proud chest (chest out) throughout the movement",
      "Keep your back flat — do not round forward",
      "The movement should be smooth and arc-like",
    ],
    warnings: [
      "Do not set the starting position too wide — it can injure your shoulder joint",
      "Avoid using excessive weight that forces you to use momentum",
    ],
  },
  {
    id: "smith-machine",
    name: "Smith Machine",
    category: "Full Body",
    emoji: "🔩",
    muscles: {
      primary: ["Varies by exercise"],
      secondary: ["Varies by exercise"],
    },
    difficulty: "Intermediate",
    keywords: ["smith machine", "smith", "guided bar", "squat rack"],
    steps: [
      {
        title: "Set the Bar Height",
        description:
          "Adjust the safety hooks to an appropriate height for your exercise (e.g., shoulder height for squats, chest height for bench press).",
      },
      {
        title: "Load the Bar",
        description:
          "Add weight plates to both sides of the bar equally. Ensure collars are in place.",
      },
      {
        title: "Get Under the Bar",
        description:
          "Position yourself under or in front of the bar depending on the exercise. Grip the bar firmly.",
      },
      {
        title: "Rotate to Unlock",
        description:
          "Lift the bar slightly and rotate it forward/upward to disengage from the safety hooks. The bar moves in a fixed vertical track.",
      },
      {
        title: "Perform Your Exercise",
        description:
          "Perform your chosen exercise (squat, bench press, shoulder press, etc.) following the proper technique for that movement.",
      },
      {
        title: "Re-Rack the Bar",
        description:
          "When done, guide the bar back to the hook position and rotate it back to lock it in place.",
      },
    ],
    tips: [
      "The fixed bar path makes form easier to maintain for beginners",
      "Use safety hooks to set a 'floor' for the bar so it cannot drop too low",
      "It is safer than free weights for training alone",
    ],
    warnings: [
      "The fixed vertical bar path can feel unnatural — always warm up first",
      "Always confirm the bar is securely locked in the hooks before releasing your grip",
    ],
  },
  {
    id: "ab-crunch-machine",
    name: "Ab Crunch Machine",
    category: "Core",
    emoji: "🤸",
    muscles: {
      primary: ["Rectus Abdominis"],
      secondary: ["Obliques"],
    },
    difficulty: "Beginner",
    keywords: ["ab machine", "crunch machine", "abs", "core", "abdominal"],
    steps: [
      {
        title: "Adjust the Seat and Pad",
        description:
          "Sit in the machine and adjust the seat height so the chest pad sits at chest level. Adjust the knee/foot pad for comfort.",
      },
      {
        title: "Grip the Handles",
        description:
          "Hold the handles or place your arms behind the arm pads depending on the machine design.",
      },
      {
        title: "Sit Upright",
        description:
          "Sit tall with your back against the back pad. Engage your core before starting.",
      },
      {
        title: "Crunch Forward",
        description:
          "Using your abdominals, crunch your torso forward and downward. Focus on curling your spine, not just bending at the hips. Exhale as you crunch.",
      },
      {
        title: "Hold at the Bottom",
        description:
          "Pause and squeeze your abs at the bottom of the movement for one second.",
      },
      {
        title: "Slowly Return to Start",
        description:
          "Slowly return to the upright position. Inhale as you return. Do not let the weight slam back.",
      },
    ],
    tips: [
      "Focus on contracting your abs, not pushing with your arms",
      "Slow and controlled reps are more effective than fast reps",
      "Exhale fully at the bottom of the crunch",
    ],
    warnings: [
      "Do not use excessive weight that causes you to use hip flexors instead of abs",
      "Avoid jerking the movement — always control the weight",
    ],
  },
  {
    id: "stationary-bike",
    name: "Stationary Bike",
    category: "Cardio",
    emoji: "🚴",
    muscles: {
      primary: ["Quadriceps", "Calves"],
      secondary: ["Hamstrings", "Glutes", "Core"],
    },
    difficulty: "Beginner",
    keywords: [
      "stationary bike",
      "bike",
      "cycling",
      "spin bike",
      "cardio bike",
    ],
    steps: [
      {
        title: "Adjust Seat Height",
        description:
          "Adjust the seat so that when your foot is at the bottom of the pedal stroke, your leg has a slight bend (not fully straight, not bent >90°).",
      },
      {
        title: "Adjust Handlebar Height",
        description:
          "Set handlebars to a comfortable height — usually level with the seat or slightly higher for beginners.",
      },
      {
        title: "Clip In or Strap Your Feet",
        description:
          "If the bike has clip pedals, clip in your cycling shoes. Otherwise, place your feet in the straps.",
      },
      {
        title: "Set Resistance",
        description:
          "Start with low resistance. Use the resistance knob or buttons to increase challenge as you warm up.",
      },
      {
        title: "Begin Pedaling",
        description:
          "Pedal in smooth, controlled circles. Keep an upright posture. Aim for 60–100 RPM (revolutions per minute).",
      },
      {
        title: "Cool Down",
        description:
          "In the last 3–5 minutes, reduce resistance and pedal slowly to cool down.",
      },
    ],
    tips: [
      "Keep your core engaged — do not slouch",
      "Breathe deeply and regularly",
      "For fat burning, aim for moderate intensity (60–70% max heart rate)",
      "For cardio fitness, try interval training — alternate high and low intensity",
    ],
    warnings: [
      "Ensure the seat height is correct — too low causes knee pain",
      "Do not bounce in the seat — if you're bouncing, add more resistance",
    ],
  },
];

export const MACHINE_CATEGORIES = [
  "All",
  "Chest",
  "Back",
  "Legs",
  "Shoulders",
  "Arms",
  "Core",
  "Cardio",
  "Full Body",
] as const;
