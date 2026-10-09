import java.util.*;

/**
 * Project 1: Snake Game Engine in Java
 * DSA Concepts Used:
 * 1. ArrayDeque<int[]>: Stores snake body segments. Moving the snake takes O(1) time
 *    by adding a new head at the front (offerFirst) and removing the tail (pollLast).
 * 2. HashSet<String>: Stores occupied coordinates for O(1) self-collision detection.
 * 3. 2D Array: Stores food positions sequentially.
 */
public class SnakeGameEngine {
    private final int width;
    private final int height;
    private final int[][] food;
    private int foodIndex;
    private int score;
    private final Deque<int[]> snakeBody;
    private final Set<String> occupiedSet;

    public SnakeGameEngine(int width, int height, int[][] food) {
        this.width = width;
        this.height = height;
        this.food = food;
        this.foodIndex = 0;
        this.score = 0;
        this.snakeBody = new ArrayDeque<>();
        this.occupiedSet = new HashSet<>();

        // Snake starts at top-left [0, 0]
        snakeBody.offerFirst(new int[]{0, 0});
        occupiedSet.add("0,0");
    }

    public int move(String direction) {
        int[] currentHead = snakeBody.peekFirst();
        int newRow = currentHead[0];
        int newCol = currentHead[1];

        switch (direction) {
            case "U": newRow--; break;
            case "D": newRow++; break;
            case "L": newCol--; break;
            case "R": newCol++; break;
            default: throw new IllegalArgumentException("Invalid direction: " + direction);
        }

        // 1. Check boundary wall collision
        if (newRow < 0 || newRow >= height || newCol < 0 || newCol >= width) {
            return -1; // Game Over
        }

        // 2. Check if snake eats food at new position
        boolean ateFood = (foodIndex < food.length &&
                           food[foodIndex][0] == newRow &&
                           food[foodIndex][1] == newCol);

        // If not eating food, tail moves forward first (freeing up its cell)
        if (!ateFood) {
            int[] tail = snakeBody.pollLast();
            occupiedSet.remove(tail[0] + "," + tail[1]);
        } else {
            score++;
            foodIndex++;
        }

        // 3. Check self-collision in O(1) time using HashSet
        String newKey = newRow + "," + newCol;
        if (occupiedSet.contains(newKey)) {
            return -1; // Hit own body -> Game Over
        }

        // 4. Advance head in O(1) time
        snakeBody.offerFirst(new int[]{newRow, newCol});
        occupiedSet.add(newKey);

        return score;
    }

    public static void main(String[] args) {
        int[][] foodPositions = {{1, 2}, {0, 1}};
        SnakeGameEngine game = new SnakeGameEngine(3, 2, foodPositions);

        System.out.println("=== Snake Game DSA Simulation ===");
        System.out.println("Move R -> Score: " + game.move("R")); // [0,1]
        System.out.println("Move D -> Score: " + game.move("D")); // [1,1]
        System.out.println("Move R -> Score: " + game.move("R")); // [1,2] eats food #1 -> Score 1
        System.out.println("Move U -> Score: " + game.move("U")); // [0,2]
        System.out.println("Move L -> Score: " + game.move("L")); // [0,1] eats food #2 -> Score 2
        System.out.println("Move U -> Wall Collision: " + game.move("U")); // -1 (Game Over)
    }
}
