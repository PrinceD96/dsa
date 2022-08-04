import { AdjacencyList, NodeValue } from 'types';

class Vertex {
	name: NodeValue;
	constructor(name: NodeValue) {
		this.name = name;
	}
}

class Graph {
	adjacencyList: AdjacencyList;
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

	removeVertex(vertexName: NodeValue): void | undefined {
		if (!this.containsVertex(vertexName)) return;

		while (this.adjacencyList[vertexName].length) {
			const adjacentVertex = this.adjacencyList[vertexName].pop();
			adjacentVertex && this.removeEdge(vertexName, adjacentVertex);
		}

		delete this.adjacencyList[vertexName];
	}

	addEdge(vertexOneName: string, vertexTwoName: string): void {
		if (!this.containsVertex(vertexOneName)) {
			this.addVertex(vertexOneName);
		}
		if (!this.containsVertex(vertexTwoName)) {
			this.addVertex(vertexTwoName);
		}
		this.adjacencyList[vertexOneName].push(vertexTwoName);
		this.adjacencyList[vertexTwoName].push(vertexOneName);
	}

	removeEdge(vertex1: NodeValue, vertex2: NodeValue): void | undefined {
		if (!this.containsVertex(vertex1) || !this.containsVertex(vertex2)) {
			return;
		}

		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			(connection: string) => connection !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			(connection: string) => connection !== vertex1
		);
	}

	recursiveDepthFirstTraversal(startingVertexName: string): string[] {
		const visited: {
			[name: string]: boolean;
		} = {};
		const results: string[] = [];

		const traverseVertex = (vertexName: string): void | undefined => {
			if (!vertexName) return;

			if (!visited[vertexName]) {
				visited[vertexName] = true;
				results.push(vertexName);
			}

			this.adjacencyList[vertexName].forEach((connection) => {
				if (!(connection in visited)) {
					traverseVertex(connection);
				}
			});
		};

		traverseVertex(startingVertexName);

		return results;
	}

	iterativeDepthFirstTraversal(startingVertexName: string): string[] {
		const visited: {
			[name: string]: boolean;
		} = {};
		const results: string[] = [];
		const stack: string[] = [];
		stack.push(startingVertexName);

		while (stack.length) {
			const vertexName = stack.pop();
			if (vertexName) {
				if (!visited[vertexName]) {
					visited[vertexName] = true;
					results.push(vertexName);
				}

				this.adjacencyList[vertexName!].forEach((connection) => {
					if (!(connection in visited)) {
						stack.push(connection);
					}
				});
			}
		}

		return results;
	}

	iterativeBreadthFirstTraversal(startingVertexName: string): string[] {
		const visited: {
			[name: string]: boolean;
		} = {};
		const results: string[] = [];
		const queue: string[] = [];
		queue.push(startingVertexName);

		while (queue.length) {
			const vertexName = queue.shift();
			if (vertexName) {
				if (!visited[vertexName]) {
					visited[vertexName] = true;
					results.push(vertexName);
				}

				this.adjacencyList[vertexName!].forEach((connection) => {
					if (!(connection in visited)) {
						queue.push(connection);
					}
				});
			}
		}

		return results;
	}
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph;

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
graph;

graph.recursiveDepthFirstTraversal('A');
graph.iterativeDepthFirstTraversal('A');
graph.iterativeBreadthFirstTraversal('A');

export {};
