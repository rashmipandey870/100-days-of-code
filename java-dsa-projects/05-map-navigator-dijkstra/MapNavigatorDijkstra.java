import java.util.*;

/**
 * Project 5: Map Navigator using Dijkstra's Shortest Path Algorithm in Java
 * DSA Concepts Used:
 * 1. Adjacency List (Map<String, List<Edge>>): Models cities and road distances in kilometers.
 * 2. PriorityQueue (Min-Heap): Always expands the city with the smallest known cumulative distance.
 * 3. Parent Pointer Map: Reconstructs the exact turn-by-turn route from source to destination.
 */
public class MapNavigatorDijkstra {

    static class RoadEdge {
        String targetCity;
        int distanceKm;

        RoadEdge(String targetCity, int distanceKm) {
            this.targetCity = targetCity;
            this.distanceKm = distanceKm;
        }
    }

    static class RouteNode implements Comparable<RouteNode> {
        String city;
        int totalDistance;

        RouteNode(String city, int totalDistance) {
            this.city = city;
            this.totalDistance = totalDistance;
        }

        @Override
        public int compareTo(RouteNode other) {
            return Integer.compare(this.totalDistance, other.totalDistance);
        }
    }

    private final Map<String, List<RoadEdge>> roadNetwork = new HashMap<>();

    public void addHighway(String cityA, String cityB, int distanceKm) {
        roadNetwork.computeIfAbsent(cityA, k -> new ArrayList<>()).add(new RoadEdge(cityB, distanceKm));
        roadNetwork.computeIfAbsent(cityB, k -> new ArrayList<>()).add(new RoadEdge(cityA, distanceKm));
    }

    public void navigate(String startCity, String endCity) {
        Map<String, Integer> minDistance = new HashMap<>();
        Map<String, String> previousCity = new HashMap<>();
        PriorityQueue<RouteNode> pq = new PriorityQueue<>();

        for (String city : roadNetwork.keySet()) {
            minDistance.put(city, Integer.MAX_VALUE);
        }
        minDistance.put(startCity, 0);
        pq.offer(new RouteNode(startCity, 0));

        while (!pq.isEmpty()) {
            RouteNode current = pq.poll();
            if (current.city.equals(endCity)) break;
            if (current.totalDistance > minDistance.get(current.city)) continue;

            for (RoadEdge edge : roadNetwork.getOrDefault(current.city, Collections.emptyList())) {
                int newDist = current.totalDistance + edge.distanceKm;
                if (newDist < minDistance.getOrDefault(edge.targetCity, Integer.MAX_VALUE)) {
                    minDistance.put(edge.targetCity, newDist);
                    previousCity.put(edge.targetCity, current.city);
                    pq.offer(new RouteNode(edge.targetCity, newDist));
                }
            }
        }

        List<String> path = new ArrayList<>();
        for (String at = endCity; at != null; at = previousCity.get(at)) {
            path.add(at);
        }
        Collections.reverse(path);

        System.out.println("=== Map Navigator (Dijkstra's Shortest Path) ===");
        System.out.println("Origin      : " + startCity);
        System.out.println("Destination : " + endCity);
        System.out.println("Optimal Path: " + String.join(" -> ", path));
        System.out.println("Total Dist  : " + minDistance.get(endCity) + " km");
    }

    public static void main(String[] args) {
        MapNavigatorDijkstra navigator = new MapNavigatorDijkstra();
        navigator.addHighway("Ranchi", "Dhanbad", 150);
        navigator.addHighway("Ranchi", "Jamshedpur", 130);
        navigator.addHighway("Dhanbad", "Kolkata", 270);
        navigator.addHighway("Jamshedpur", "Kharagpur", 155);
        navigator.addHighway("Kharagpur", "Kolkata", 120);

        navigator.navigate("Ranchi", "Kolkata");
    }
}
