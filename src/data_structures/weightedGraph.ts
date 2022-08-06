import { NodeValue, WeightedAdjacencyList } from 'types';
import { Vertex } from 'data_structures/graph';

class PriorityQueue {
	nodes: Array<{ value: NodeValue; priority: number }>;
	constructor() {
		this.nodes = [];
	}

	enqueue(value: NodeValue, priority: number) {
		this.nodes.push({ value, priority });
		this.sort();
	}

	dequeue() {
		return this.nodes.shift();
	}

	sort() {
		this.nodes.sort((a, b) => a.priority - b.priority);
	}
}

class WeightedGraph {
	adjacencyList: WeightedAdjacencyList;
	constructor() {
		this.adjacencyList = {};
	}

	containsVertex(vertexName: NodeValue): boolean {
		return !!this.adjacencyList[vertexName];
	}

	addVertex(name: NodeValue): void {
		const newVertex = new Vertex(name);
		// don't allow overwrites
		if (!this.containsVertex(newVertex.name)) {
			this.adjacencyList[newVertex.name] = [];
		}
	}

	addEdge(vertexOneName: string, vertexTwoName: string, weight: number): void {
		if (!this.containsVertex(vertexOneName)) {
			this.addVertex(vertexOneName);
		}
		if (!this.containsVertex(vertexTwoName)) {
			this.addVertex(vertexTwoName);
		}
		this.adjacencyList[vertexOneName].push({ vertex: vertexTwoName, weight });
		this.adjacencyList[vertexTwoName].push({ vertex: vertexOneName, weight });
	}

	findShortestPath(startingVertex: string, endingVertex: string) {
		const distanceFromStartingVertex: {
			[vertex: string]: number;
		} = {};
		const visited = new PriorityQueue();
		const previous: {
			[vertex: string]: NodeValue | null;
		} = {};
		const shortestPath: NodeValue[] = [];
		let currentVertex;

		for (const vertex in this.adjacencyList) {
			if (vertex === startingVertex) {
				distanceFromStartingVertex[vertex] = 0;
				visited.enqueue(vertex, 0);
			} else {
				distanceFromStartingVertex[vertex] = Infinity;
				visited.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}

		while (visited.nodes.length) {
			currentVertex = visited.dequeue()?.value;
			if (currentVertex === endingVertex) {
				// We have found our shortest path
				while (previous[currentVertex!]) {
					shortestPath.push(currentVertex!);
					currentVertex = previous[currentVertex!];
				}
				break;
			}

			if (
				currentVertex &&
				distanceFromStartingVertex[currentVertex] !== Infinity
			) {
				for (const connectionIdx in this.adjacencyList[currentVertex]) {
					const { vertex, weight } =
						this.adjacencyList[currentVertex][connectionIdx];
					const candidateSum =
						distanceFromStartingVertex[currentVertex] + weight;
					if (candidateSum < distanceFromStartingVertex[vertex]) {
						distanceFromStartingVertex[vertex] = candidateSum;
						previous[vertex] = currentVertex;
						visited.enqueue(vertex, candidateSum);
					}
				}
			}
		}
		return shortestPath.concat(startingVertex).reverse();
	}
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

graph.findShortestPath('A', 'E');
