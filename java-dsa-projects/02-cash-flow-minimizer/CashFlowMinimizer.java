import java.util.*;

/**
 * Project 2: Cash Flow Minimizer (Splitwise Algorithm) in Java
 * DSA Concepts Used:
 * 1. Directed Graph (Adjacency Matrix): Represents who owes whom how much money.
 * 2. Net Balance Array: Simplifies graph edges into a single net balance per person
 *    (Total Received - Total Paid).
 * 3. Two PriorityQueues (Heaps):
 *    - Max-Heap of Creditors (people who should receive money)
 *    - Max-Heap of Debtors (people who owe money)
 *    Greedily matches the biggest debtor with the biggest creditor in O(N log N) time.
 */
public class CashFlowMinimizer {

    static class PersonBalance {
        String name;
        int amount;

        PersonBalance(String name, int amount) {
            this.name = name;
            this.amount = amount;
        }
    }

    public static List<String> minimizeCashFlow(String[] names, int[][] graph) {
        int n = names.length;
        int[] netBalance = new int[n];

        // Step 1: Compute net balance for each person from directed graph
        for (int p = 0; p < n; p++) {
            for (int i = 0; i < n; i++) {
                // netBalance[p] += (incoming from i) - (outgoing to i)
                netBalance[p] += (graph[i][p] - graph[p][i]);
            }
        }

        // Step 2: Separate into Creditors (net > 0) and Debtors (net < 0) using Max-Heaps
        PriorityQueue<PersonBalance> creditors = new PriorityQueue<>((a, b) -> b.amount - a.amount);
        PriorityQueue<PersonBalance> debtors = new PriorityQueue<>((a, b) -> b.amount - a.amount);

        for (int i = 0; i < n; i++) {
            if (netBalance[i] > 0) {
                creditors.offer(new PersonBalance(names[i], netBalance[i]));
            } else if (netBalance[i] < 0) {
                debtors.offer(new PersonBalance(names[i], -netBalance[i]));
            }
        }

        // Step 3: Greedily settle largest debt with largest credit
        List<String> transactions = new ArrayList<>();
        while (!creditors.isEmpty() && !debtors.isEmpty()) {
            PersonBalance maxCreditor = creditors.poll();
            PersonBalance maxDebtor = debtors.poll();

            int settledAmount = Math.min(maxCreditor.amount, maxDebtor.amount);
            transactions.add(maxDebtor.name + " pays Rs." + settledAmount + " to " + maxCreditor.name);

            int remainingCredit = maxCreditor.amount - settledAmount;
            int remainingDebt = maxDebtor.amount - settledAmount;

            if (remainingCredit > 0) {
                creditors.offer(new PersonBalance(maxCreditor.name, remainingCredit));
            }
            if (remainingDebt > 0) {
                debtors.offer(new PersonBalance(maxDebtor.name, remainingDebt));
            }
        }

        return transactions;
    }

    public static void main(String[] args) {
        String[] friends = {"Alice", "Bob", "Charlie", "David"};
        // graph[i][j] means person i owes person j
        int[][] debtGraph = {
            {0, 1000, 2000, 0},
            {0, 0, 5000, 1000},
            {0, 0, 0, 4000},
            {0, 0, 0, 0}
        };

        System.out.println("=== Cash Flow Minimizer (Graphs & Heaps) ===");
        List<String> optimalSettlements = minimizeCashFlow(friends, debtGraph);
        for (String tx : optimalSettlements) {
            System.out.println(" -> " + tx);
        }
    }
}
