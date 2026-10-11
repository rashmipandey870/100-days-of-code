import java.util.*;

/**
 * Project 3: Sudoku Solver Engine in Java
 * DSA Concepts Used:
 * 1. Recursion & Backtracking: Explores valid digit placements (1-9) in empty cells.
 *    If a placement leads to a dead end, it backtracks (resets cell to '.') and tries the next digit.
 * 2. 3x3 Sub-grid Coordinate Mapping: Uses (row / 3) * 3 + (i / 3) to validate 3x3 box constraints in O(1).
 */
public class SudokuSolverEngine {

    public static boolean solveSudoku(char[][] board) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == '.') {
                    for (char digit = '1'; digit <= '9'; digit++) {
                        if (isValidPlacement(board, row, col, digit)) {
                            board[row][col] = digit; // Choose

                            if (solveSudoku(board)) { // Explore
                                return true;
                            }

                            board[row][col] = '.'; // Unchoose (Backtrack)
                        }
                    }
                    return false; // Trigger backtracking if no digit 1-9 works
                }
            }
        }
        return true; // All cells filled!
    }

    private static boolean isValidPlacement(char[][] board, int row, int col, char digit) {
        for (int i = 0; i < 9; i++) {
            // Check row
            if (board[row][i] == digit) return false;
            // Check column
            if (board[i][col] == digit) return false;
            // Check 3x3 sub-box
            int boxRow = 3 * (row / 3) + i / 3;
            int boxCol = 3 * (col / 3) + i % 3;
            if (board[boxRow][boxCol] == digit) return false;
        }
        return true;
    }

    public static void printBoard(char[][] board) {
        for (int r = 0; r < 9; r++) {
            if (r % 3 == 0 && r != 0) System.out.println("------+-------+------");
            for (int c = 0; c < 9; c++) {
                if (c % 3 == 0 && c != 0) System.out.print("| ");
                System.out.print(board[r][c] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        char[][] board = {
            {'5','3','.','.','7','.','.','.','.'},
            {'6','.','.','1','9','5','.','.','.'},
            {'.','9','8','.','.','.','.','6','.'},
            {'8','.','.','.','6','.','.','.','3'},
            {'4','.','.','8','.','3','.','.','1'},
            {'7','.','.','.','2','.','.','.','6'},
            {'.','6','.','.','.','.','2','8','.'},
            {'.','.','.','4','1','9','.','.','5'},
            {'.','.','.','.','8','.','.','7','9'}
        };

        System.out.println("=== Sudoku Solver (Backtracking & Recursion) ===");
        if (solveSudoku(board)) {
            printBoard(board);
        }
    }
}
