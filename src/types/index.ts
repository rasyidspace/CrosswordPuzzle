export type PageType =
  | 'opening'
  | 'info'
  | 'instructions'
  | 'apersepsi'
  | 'material'
  | 'quiz'
  | 'transition'
  | 'gallery'
  | 'facts'
  | 'matching'
  | 'crossword_intro'
  | 'crossword_puzzle'
  | 'crossword_across'
  | 'crossword_down'
  | 'crossword_check'
  | 'result'
  | 'reflection'
  | 'character_message'
  | 'final_quiz'
  | 'closing';

export interface ObjectiveItem {
  id: string;
  text: string;
  icon?: string;
}

export interface InstructionStep {
  step: number;
  text: string;
  icon?: string;
}

export interface ApersepsiOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface MaterialSubSection {
  title: string;
  items?: string[];
  description?: string;
  examples?: string[];
  image?: string;
}

export interface MaterialContent {
  id: string;
  pageNumber: number;
  badge: string;
  title: string;
  icon: string;
  overview?: string;
  points?: string[];
  subsections?: MaterialSubSection[];
  didYouKnow?: string;
  activity?: {
    title: string;
    prompt: string;
  };
  conclusion?: string;
  quote?: string;
}

export interface QuizQuestion {
  id: string;
  questionNumber: number;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface GalleryItem {
  id: string;
  name: string;
  icon: string;
  image?: string;
  lokasi: string;
  fungsi: string;
  keunikan: string;
  deskripsi: string;
  kategori: 'bangunan' | 'benda' | 'naskah';
}

export interface MatchingItem {
  id: string;
  icon: string;
  name: string;
  image?: string;
}

export interface CrosswordClue {
  id: string;
  number: number;
  orientation: 'across' | 'down';
  answer: string;
  clue: string;
  startX: number; // 0-indexed column
  startY: number; // 0-indexed row
  length: number;
}

export interface CrosswordCellData {
  row: number;
  col: number;
  char: string;
  userChar: string;
  acrossNum?: number;
  downNum?: number;
  isBlocked: boolean;
  status: 'empty' | 'filled' | 'correct' | 'incorrect';
}

export interface ReflectionOption {
  id: string;
  label: string;
}

export interface CharacterMessagePledge {
  id: string;
  text: string;
}
