import { useState, useCallback } from "react";
import { Search, Dumbbell, Camera, BookOpen, X } from "lucide-react";
import { ImageUploader } from "./components/ImageUploader";
import { MachineCard } from "./components/MachineCard";
import { MachineGuide } from "./components/MachineGuide";
import { identifyMachine, type MatchResult } from "./hooks/useMachineIdentifier";
import { GYM_MACHINES, MACHINE_CATEGORIES } from "./data/machines";
import type { GymMachine } from "./types/machine";

type View = "home" | "browse" | "guide";
type HomeStep = "upload" | "analyzing" | "results";

export default function App() {
  const [view, setView] = useState<View>("home");
  const [selectedMachine, setSelectedMachine] = useState<GymMachine | null>(null);

  // Browse state
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Home upload state
  const [homeStep, setHomeStep] = useState<HomeStep>("upload");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [matchResults, setMatchResults] = useState<MatchResult[]>([]);
  const [guideFrom, setGuideFrom] = useState<"home" | "browse">("home");

  const handleImageSelected = useCallback(
    async (file: File, dataUrl: string) => {
      setUploadedImage(dataUrl);
      setHomeStep("analyzing");
      const results = await identifyMachine(file);
      setMatchResults(results);
      setHomeStep("results");
    },
    []
  );

  const resetHome = () => {
    setHomeStep("upload");
    setUploadedImage(null);
    setMatchResults([]);
  };

  const openGuide = (machine: GymMachine, from: "home" | "browse") => {
    setSelectedMachine(machine);
    setGuideFrom(from);
    setView("guide");
  };

  const handleGuideBack = () => {
    setView(guideFrom);
  };

  // Filter machines for browse view
  const filteredMachines = GYM_MACHINES.filter((m) => {
    const matchesSearch =
      searchQuery === "" ||
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.muscles.primary.some((muscle) =>
        muscle.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      m.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || m.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryCount = (cat: string) => {
    if (cat === "All") return GYM_MACHINES.length;
    return GYM_MACHINES.filter((m) => m.category === cat).length;
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <a
            className="logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setView("home");
              resetHome();
            }}
          >
            <span className="logo-icon">🏋️</span>
            GymGuide
          </a>
          <nav className="nav">
            <button
              className={`nav-btn ${view === "home" ? "active" : ""}`}
              onClick={() => {
                setView("home");
                resetHome();
              }}
            >
              <Camera size={16} />
              <span>Identify</span>
            </button>
            <button
              className={`nav-btn ${view === "browse" || (view === "guide" && guideFrom === "browse") ? "active" : ""}`}
              onClick={() => setView("browse")}
            >
              <BookOpen size={16} />
              <span>Browse</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="main">
        {view === "guide" && selectedMachine ? (
          <MachineGuide machine={selectedMachine} onBack={handleGuideBack} />
        ) : view === "browse" ? (
          <BrowseView
            machines={filteredMachines}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categoryCount={categoryCount}
            onSelectMachine={(m) => openGuide(m, "browse")}
          />
        ) : (
          <HomeView
            step={homeStep}
            uploadedImage={uploadedImage}
            matchResults={matchResults}
            onImageSelected={handleImageSelected}
            onReset={resetHome}
            onSelectMachine={(m) => openGuide(m, "home")}
            onBrowseAll={() => setView("browse")}
          />
        )}
      </main>
    </div>
  );
}

/* ── Home View ─────────────────────────────────────────── */
interface HomeViewProps {
  step: HomeStep;
  uploadedImage: string | null;
  matchResults: MatchResult[];
  onImageSelected: (file: File, dataUrl: string) => void;
  onReset: () => void;
  onSelectMachine: (m: GymMachine) => void;
  onBrowseAll: () => void;
}

function HomeView({
  step,
  uploadedImage,
  matchResults,
  onImageSelected,
  onReset,
  onSelectMachine,
  onBrowseAll,
}: HomeViewProps) {
  return (
    <>
      {step === "upload" && (
        <>
          <div className="hero">
            <div className="hero-badge">
              <Dumbbell size={13} />
              AI Gym Machine Guide
            </div>
            <h1 className="hero-title">
              Point. Snap. <span>Learn.</span>
            </h1>
            <p className="hero-subtitle">
              Take a photo of any gym machine and instantly get step-by-step
              instructions on how to use it safely and effectively.
            </p>
          </div>

          <ImageUploader onImageSelected={onImageSelected} />

          <hr className="section-divider" />

          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-number">{GYM_MACHINES.length}+</div>
              <div className="stat-label">Machines</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">8</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free</div>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.875rem",
                marginBottom: "0.875rem",
              }}
            >
              Or browse all machines manually
            </p>
            <button className="btn btn-secondary" onClick={onBrowseAll}>
              <BookOpen size={16} />
              Browse All Machines
            </button>
          </div>
        </>
      )}

      {(step === "analyzing" || step === "results") && uploadedImage && (
        <>
          <div className="image-preview-container">
            <img
              src={uploadedImage}
              alt="Uploaded gym machine"
              className="image-preview"
            />
            {step === "analyzing" && (
              <div className="analyzing-overlay">
                <div className="analyzing-spinner" />
                <p className="analyzing-text">Analyzing your machine…</p>
                <p className="analyzing-subtext">
                  Identifying machine type and loading instructions
                </p>
              </div>
            )}
            <div className="image-preview-actions">
              <button className="btn btn-danger btn-sm" onClick={onReset}>
                <X size={14} />
                New Photo
              </button>
            </div>
          </div>

          {step === "results" && (
            <MatchResults
              results={matchResults}
              onSelectMachine={onSelectMachine}
              onReset={onReset}
            />
          )}
        </>
      )}
    </>
  );
}

/* ── Match Results ─────────────────────────────────────── */
interface MatchResultsProps {
  results: MatchResult[];
  onSelectMachine: (m: GymMachine) => void;
  onReset: () => void;
}

function MatchResults({ results, onSelectMachine, onReset }: MatchResultsProps) {
  const hasStrongMatch = results.length > 0 && results[0].confidence >= 80;

  return (
    <div className="matches-section">
      <h2 className="matches-title">
        {hasStrongMatch
          ? "🎯 Machine Identified — Select to view guide"
          : "🔍 Possible Matches — Select the machine you photographed"}
      </h2>

      {results.map((result, i) => (
        <div
          className="match-item"
          key={result.machine.id}
          onClick={() => onSelectMachine(result.machine)}
        >
          <div className={`match-rank rank-${i + 1}`}>{i + 1}</div>
          <span style={{ fontSize: "1.5rem" }}>{result.machine.emoji}</span>
          <div className="match-info">
            <p className="match-name">{result.machine.name}</p>
            <p className="match-description">
              {result.machine.muscles.primary.join(", ")} •{" "}
              {result.machine.category}
            </p>
          </div>
          <span className="match-confidence">{result.confidence}%</span>
        </div>
      ))}

      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.825rem",
            marginBottom: "0.75rem",
          }}
        >
          Don't see your machine?
        </p>
        <button className="btn btn-ghost btn-sm" onClick={onReset}>
          Try a different photo
        </button>
      </div>
    </div>
  );
}

/* ── Browse View ───────────────────────────────────────── */
interface BrowseViewProps {
  machines: GymMachine[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: string;
  setActiveCategory: (c: string) => void;
  categoryCount: (c: string) => number;
  onSelectMachine: (m: GymMachine) => void;
}

function BrowseView({
  machines,
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  categoryCount,
  onSelectMachine,
}: BrowseViewProps) {
  return (
    <>
      <h1
        style={{
          fontSize: "1.5rem",
          fontWeight: 800,
          marginBottom: "1.5rem",
        }}
      >
        Browse Machines
      </h1>

      <div className="search-container">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          className="search-input"
          placeholder="Search by machine name, muscle, or category…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="category-filter">
        {MACHINE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
            {cat !== "All" && (
              <span
                style={{
                  marginLeft: "0.3rem",
                  opacity: 0.65,
                  fontSize: "0.75em",
                }}
              >
                ({categoryCount(cat)})
              </span>
            )}
          </button>
        ))}
      </div>

      {machines.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🔍</div>
          <p className="empty-state-title">No machines found</p>
          <p style={{ fontSize: "0.875rem" }}>
            Try a different search term or category
          </p>
        </div>
      ) : (
        <div className="machines-grid">
          {machines.map((machine) => (
            <MachineCard
              key={machine.id}
              machine={machine}
              onClick={onSelectMachine}
            />
          ))}
        </div>
      )}
    </>
  );
}
