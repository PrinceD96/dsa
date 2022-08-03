class Node {
	value: number;

	constructor(value: number) {
		this.value = value;
	}
}

class MaxBinaryHeap {
	nodes: Node[];

	constructor() {
		this.nodes = [];
	}

	getValues(): number[] {
		return this.nodes.map((node) => node.value);
	}

	insert(num: number): Node[] {
		const nodeToInsert = new Node(num);
		this.nodes.push(nodeToInsert);
		let numIndex = this.nodes.length - 1;

		while (numIndex > 0) {
			const parentIndex = Math.floor((numIndex - 1) / 2);
			let parent = this.nodes[parentIndex].value;
			let currentNum = this.nodes[numIndex].value;

			if (currentNum <= parent) break;
			const temp = parent;
			this.nodes[parentIndex].value = currentNum;
			this.nodes[numIndex].value = temp;
			numIndex = parentIndex;
		}

		return this.nodes;
	}

	extractMax(): Node | null {
		const maxNode = this.nodes[0] ? {...this.nodes[0]} : null;
		const endNode = this.nodes.pop() ?? null;

		if (this.nodes.length && endNode) {
			this.nodes[0].value = endNode.value;

			for (let i = 0; i < this.nodes.length; i++) {
				const element = this.nodes[i].value;

				const leftChildIdx = 2 * i + 1;
				const rightChildIdx = 2 * i + 2;
				// make sure to stay within bounds
				const leftChild = this.nodes[leftChildIdx]?.value ?? null;
				const rightChild = this.nodes[rightChildIdx]?.value ?? null;
				const maxChildIdx =
					leftChild > rightChild ? leftChildIdx : rightChildIdx;
				const maxChild = Math.max(leftChild, rightChild);

				if (element < maxChild) {
					this.nodes[i].value = maxChild;
					this.nodes[maxChildIdx].value = element;
				}
			}
		}

		return maxNode;
	}
}

const maxBinaryHeap = new MaxBinaryHeap();

maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(55); // [55,39,41,18,27,12,33]

maxBinaryHeap.getValues(); // [ 55, 39, 41, 18, 27, 12, 33 ]
maxBinaryHeap.extractMax(); // removes 55
maxBinaryHeap.getValues(); // [ 41, 39, 33, 18, 27, 12 ]
maxBinaryHeap.extractMax(); // removes 41
maxBinaryHeap.getValues(); // [ 39, 27, 33, 18, 12 ]
maxBinaryHeap.extractMax(); // removes 39
maxBinaryHeap.getValues(); // [ 33, 27, 12, 18 ]
maxBinaryHeap.extractMax(); // removes 33
maxBinaryHeap.getValues(); // [ 27, 18, 12 ]
maxBinaryHeap.extractMax(); // removes 27
maxBinaryHeap.getValues(); // [ 18, 12 ]
maxBinaryHeap.extractMax(); // removes 18
maxBinaryHeap.getValues(); // [ 12 ]
maxBinaryHeap.extractMax(); // removes 12
maxBinaryHeap.getValues(); // []
maxBinaryHeap.extractMax(); // heap is empty, returns null
maxBinaryHeap.getValues(); // []
export {};
