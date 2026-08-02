"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { CrosswordCellData } from "@/types";
import {
  createInitialGrid,
  validateGrid,
  GridValidationResult,
} from "@/utils/crosswordHelper";
import { SoundEngine } from "@/utils/soundEffects";

interface LearningContextType {
  // Navigation
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page: number) => void;
  resetAllProgress: () => void;

  // Audio state
  audioEnabled: boolean;
  toggleAudio: () => void;
  playSound: (
    type: "click" | "success" | "error" | "pop" | "fanfare"
  ) => void;

  // Apersepsi (Page 4)
  apersepsiAnswer: string | null;
  setApersepsiAnswer: (ans: string) => void;

  // Latihan Singkat (Page 9)
  latihanAnswers: Record<string, number>;
  setLatihanAnswer: (questionId: string, optionIndex: number) => void;

  // Matching Mini Game (Page 19)
  matchingMatched: string[];
  setMatchingMatched: (ids: string[]) => void;
  resetMatchingGame: () => void;

  // Crossword (Pages 22-26)
  crosswordGrid: CrosswordCellData[][];
  activeClue: { number: number; orientation: "across" | "down" } | null;
  setActiveClue: (
    clue: { number: number; orientation: "across" | "down" } | null
  ) => void;
  updateCellChar: (row: number, col: number, char: string) => void;
  resetCrossword: () => void;
  validateCrossword: () => GridValidationResult;
  validationResult: GridValidationResult | null;

  // Reflection (Page 27)
  reflectionChecked: Record<string, boolean>;
  toggleReflectionChecked: (id: string) => void;
  reflectionFavoriteText: string;
  setReflectionFavoriteText: (text: string) => void;

  // Final Quiz (Page 29)
  finalQuizAnswers: Record<string, number>;
  setFinalQuizAnswer: (questionId: string, optionIndex: number) => void;
}

const LearningContext = createContext<LearningContextType | undefined>(
  undefined
);

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const totalPages = 30;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);

  // Apersepsi
  const [apersepsiAnswer, setApersepsiAnswerState] = useState<string | null>(
    null
  );

  // Latihan Singkat
  const [latihanAnswers, setLatihanAnswers] = useState<
    Record<string, number>
  >({});

  // Matching Game
  const [matchingMatched, setMatchingMatchedState] = useState<string[]>([]);

  // Crossword State
  const [crosswordGrid, setCrosswordGrid] = useState<CrosswordCellData[][]>(() =>
    createInitialGrid()
  );
  const [activeClue, setActiveClue] = useState<{
    number: number;
    orientation: "across" | "down";
  } | null>({ number: 1, orientation: "across" });
  const [validationResult, setValidationResult] =
    useState<GridValidationResult | null>(null);

  // Reflection
  const [reflectionChecked, setReflectionChecked] = useState<
    Record<string, boolean>
  >({
    "ref-1": true,
    "ref-2": true,
    "ref-3": true,
    "ref-4": true,
  });
  const [reflectionFavoriteText, setReflectionFavoriteText] =
    useState<string>("");

  // Final Quiz
  const [finalQuizAnswers, setFinalQuizAnswers] = useState<
    Record<string, number>
  >({});

  // Audio helper
  const playSound = useCallback(
    (type: "click" | "success" | "error" | "pop" | "fanfare") => {
      switch (type) {
        case "click":
          SoundEngine.playClick(audioEnabled);
          break;
        case "success":
          SoundEngine.playSuccess(audioEnabled);
          break;
        case "error":
          SoundEngine.playError(audioEnabled);
          break;
        case "pop":
          SoundEngine.playPop(audioEnabled);
          break;
        case "fanfare":
          SoundEngine.playFanfare(audioEnabled);
          break;
      }
    },
    [audioEnabled]
  );

  const toggleAudio = useCallback(() => {
    setAudioEnabled((prev) => {
      const next = !prev;
      if (next) {
        SoundEngine.playSuccess(true);
      }
      return next;
    });
  }, []);

  // Navigation handlers
  const nextPage = useCallback(() => {
    playSound("click");
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  }, [playSound, totalPages]);

  const prevPage = useCallback(() => {
    playSound("click");
    setCurrentPage((prev) => Math.max(1, prev - 1));
  }, [playSound]);

  const goToPage = useCallback(
    (page: number) => {
      playSound("click");
      setCurrentPage(Math.max(1, Math.min(totalPages, page)));
    },
    [playSound, totalPages]
  );

  const resetAllProgress = useCallback(() => {
    playSound("pop");
    setCurrentPage(1);
    setApersepsiAnswerState(null);
    setLatihanAnswers({});
    setMatchingMatchedState([]);
    setCrosswordGrid(createInitialGrid());
    setActiveClue({ number: 1, orientation: "across" });
    setValidationResult(null);
    setReflectionChecked({
      "ref-1": true,
      "ref-2": true,
      "ref-3": true,
      "ref-4": true,
    });
    setReflectionFavoriteText("");
    setFinalQuizAnswers({});
  }, [playSound]);

  // Apersepsi handler
  const setApersepsiAnswer = useCallback(
    (ans: string) => {
      setApersepsiAnswerState(ans);
      if (ans === "opt-1") {
        playSound("success");
      } else {
        playSound("error");
      }
    },
    [playSound]
  );

  // Latihan Singkat handler
  const setLatihanAnswer = useCallback(
    (questionId: string, optionIndex: number) => {
      setLatihanAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
      playSound("pop");
    },
    [playSound]
  );

  // Matching game handler
  const setMatchingMatched = useCallback((ids: string[]) => {
    setMatchingMatchedState(ids);
  }, []);

  const resetMatchingGame = useCallback(() => {
    playSound("pop");
    setMatchingMatchedState([]);
  }, [playSound]);

  // Crossword handlers
  const updateCellChar = useCallback(
    (row: number, col: number, char: string) => {
      setCrosswordGrid((prev) => {
        const next = prev.map((r, rIdx) =>
          r.map((c, cIdx) => {
            if (rIdx === row && cIdx === col) {
              return {
                ...c,
                userChar: char.toUpperCase(),
                status:
                  char.trim().length > 0
                    ? ("filled" as const)
                    : ("empty" as const),
              };
            }
            return c;
          })
        );
        return next;
      });
      if (char.trim().length > 0) {
        playSound("pop");
      }
    },
    [playSound]
  );

  const resetCrossword = useCallback(() => {
    playSound("pop");
    setCrosswordGrid(createInitialGrid());
    setValidationResult(null);
    setActiveClue({ number: 1, orientation: "across" });
  }, [playSound]);

  const validateCrossword = useCallback(() => {
    const { validatedGrid, result } = validateGrid(crosswordGrid);
    setCrosswordGrid(validatedGrid);
    setValidationResult(result);
    if (result.isAllCorrect || result.score >= 75) {
      playSound("fanfare");
    } else {
      playSound("error");
    }
    return result;
  }, [crosswordGrid, playSound]);

  // Reflection handler
  const toggleReflectionChecked = useCallback(
    (id: string) => {
      playSound("pop");
      setReflectionChecked((prev) => ({ ...prev, [id]: !prev[id] }));
    },
    [playSound]
  );

  // Final quiz handler
  const setFinalQuizAnswer = useCallback(
    (questionId: string, optionIndex: number) => {
      setFinalQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
      playSound("pop");
    },
    [playSound]
  );

  return (
    <LearningContext.Provider
      value={{
        currentPage,
        totalPages,
        nextPage,
        prevPage,
        goToPage,
        resetAllProgress,
        audioEnabled,
        toggleAudio,
        playSound,
        apersepsiAnswer,
        setApersepsiAnswer,
        latihanAnswers,
        setLatihanAnswer,
        matchingMatched,
        setMatchingMatched,
        resetMatchingGame,
        crosswordGrid,
        activeClue,
        setActiveClue,
        updateCellChar,
        resetCrossword,
        validateCrossword,
        validationResult,
        reflectionChecked,
        toggleReflectionChecked,
        reflectionFavoriteText,
        setReflectionFavoriteText,
        finalQuizAnswers,
        setFinalQuizAnswer,
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = (): LearningContextType => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error("useLearning must be used within a LearningProvider");
  }
  return context;
};
