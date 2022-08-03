import { NodeValue } from 'types';

class Node {
	value: NodeValue;
	priority: number;

	constructor(value: NodeValue, priority: number) {
		this.value = value;
		this.priority = priority;
	}
}
/**
 * Min Binary Heap
 */
class PriorityQueue {
	nodes: Node[];

	constructor() {
		this.nodes = [];
	}

	getNodes(): Node[] {
		return this.nodes;
	}

	getValues(): NodeValue[] {
		return this.nodes.map((node) => node.value);
	}

	enqueue(value: NodeValue, priority: number): Node[] {
		const nodeToInsert = new Node(value, priority);
		this.nodes.push(nodeToInsert);
		let numIndex = this.nodes.length - 1;

		while (numIndex > 0) {
			const parentIndex = Math.floor((numIndex - 1) / 2);
			let parent = this.nodes[parentIndex];
			let currentNum = this.nodes[numIndex];

			if (currentNum.priority >= parent.priority) break;
			const temp = { ...parent };
			this.nodes[parentIndex] = currentNum;
			this.nodes[numIndex] = temp;
			numIndex = parentIndex;
		}

		return this.nodes;
	}

	dequeue(): Node | null {
		const rootNode = this.nodes[0] ? { ...this.nodes[0] } : null;
		const endNode = this.nodes.pop() ?? null;

		if (this.nodes.length && endNode) {
			this.nodes[0] = endNode;

			for (let i = 0; i < this.nodes.length; i++) {
				const element = this.nodes[i];

				const leftChildIdx = 2 * i + 1;
				const rightChildIdx = 2 * i + 2;
				// make sure to stay within bounds
				const leftChild = this.nodes[leftChildIdx]?.priority ?? null;
				const rightChild = this.nodes[rightChildIdx]?.priority ?? null;
				const lowestPriorityChildIdx =
					leftChild < rightChild ? leftChildIdx : rightChildIdx;
				const lowestPriorityChild = Math.min(leftChild, rightChild);

				if (element?.priority < lowestPriorityChild) {
					this.nodes[i] = this.nodes[lowestPriorityChildIdx];
					this.nodes[lowestPriorityChildIdx] = element;
				}
			}
		}

		return rootNode;
	}
}
export {};

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('High Fever', 2);
priorityQueue.enqueue('Heart attack', 0);
priorityQueue.enqueue('Concussion', 1);
priorityQueue;
priorityQueue.dequeue();
priorityQueue;
priorityQueue.dequeue();
priorityQueue;
priorityQueue.dequeue();
priorityQueue;
priorityQueue.dequeue();
