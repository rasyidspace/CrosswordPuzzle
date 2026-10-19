import {
  CROSSWORD_CLUES,
  CROSSWORD_GRID_DIMENSIONS,
} from '@/data/storyboardData';
import { CrosswordCellData, CrosswordClue } from '@/types';

export interface GridValidationResult {
  isComplete: boolean;
  isAllCorrect: boolean;
  totalFilled: number;
  totalCells: number;
  correctCells: number;
  incorrectCells: number;
  score: number;
  starCount: number;
  ratingBadge: string;
}

function getDefaultHintIndices(length: number): number[] {
  if (length <= 4) {
    return [1];
  } else if (length <= 6) {
    return [0, Math.floor(length / 2)];
  } else {
    return [0, Math.floor(length / 2), length - 1];
  }
}

export function createInitialGrid(): CrosswordCellData[][] {
  const { rows, cols } = CROSSWORD_GRID_DIMENSIONS;
  const grid: CrosswordCellData[][] = [];

  for (let r = 0; r < rows; r++) {
    const rowCells: CrosswordCellData[] = [];
    for (let c = 0; c < cols; c++) {
      rowCells.push({
        row: r,
        col: c,
        char: '',
        userChar: '',
        isBlocked: true,
        isHint: false,
        status: 'empty',
      });
    }
    grid.push(rowCells);
  }

  // Populate active cells from clues
  CROSSWORD_CLUES.forEach((clue) => {
    const { startX, startY, orientation, answer, number, hintIndices } = clue;
    const effectiveHints =
      hintIndices && hintIndices.length > 0
        ? hintIndices
        : getDefaultHintIndices(answer.length);

    for (let i = 0; i < answer.length; i++) {
      const r = orientation === 'down' ? startY + i : startY;
      const c = orientation === 'across' ? startX + i : startX;

      if (r < rows && c < cols) {
        const cell = grid[r][c];
        cell.isBlocked = false;
        cell.char = answer[i].toUpperCase();

        if (effectiveHints.includes(i)) {
          cell.isHint = true;
        }

        if (i === 0) {
          if (orientation === 'across') {
            cell.acrossNum = number;
          } else {
            cell.downNum = number;
          }
        }
      }
    }
  });

  return grid;
}

export function validateGrid(grid: CrosswordCellData[][]): {
  validatedGrid: CrosswordCellData[][];
  result: GridValidationResult;
} {
  let totalCells = 0;
  let totalFilled = 0;
  let correctCells = 0;
  let incorrectCells = 0;

  const newGrid = grid.map((row) =>
    row.map((cell) => {
      if (cell.isBlocked) return { ...cell };

      totalCells++;
      const user = cell.userChar.trim().toUpperCase();
      const isHintCell = Boolean(cell.isHint);

      if (isHintCell) {
        totalFilled++;
        correctCells++;
        return {
          ...cell,
          status: 'correct' as const,
        };
      }

      if (user.length > 0) {
        totalFilled++;
      }

      const isCorrect = user === cell.char.toUpperCase();
      if (isCorrect) {
        correctCells++;
        return {
          ...cell,
          status: 'correct' as const,
        };
      } else {
        if (user.length > 0) {
          incorrectCells++;
        }
        return {
          ...cell,
          status: 'incorrect' as const,
        };
      }
    })
  );

  const score = totalCells > 0 ? Math.round((correctCells / totalCells) * 100) : 0;
  let starCount = 2;
  let ratingBadge = 'Jangan menyerah.';

  if (score >= 90) {
    starCount = 5;
    ratingBadge = 'Hebat!';
  } else if (score >= 75) {
    starCount = 4;
    ratingBadge = 'Bagus!';
  } else if (score >= 60) {
    starCount = 3;
    ratingBadge = 'Terus belajar!';
  }

  return {
    validatedGrid: newGrid,
    result: {
      isComplete: totalFilled === totalCells,
      isAllCorrect: correctCells === totalCells,
      totalFilled,
      totalCells,
      correctCells,
      incorrectCells,
      score,
      starCount,
      ratingBadge,
    },
  };
}

export function getClueByNumber(
  num: number,
  orientation?: 'across' | 'down'
): CrosswordClue | undefined {
  return CROSSWORD_CLUES.find((c) => {
    if (orientation) {
      return c.number === num && c.orientation === orientation;
    }
    return c.number === num;
  });
}
