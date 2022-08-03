class Node {
	value: any;
	left: Node | null;
	right: Node | null;
	constructor(value: any) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	root: Node | null;
	constructor() {
		this.root = null;
	}

	insert(value: any): BinarySearchTree | null {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return this;
		}

		let currentNode = this.root;
		while (true) {
			// don't allow duplicates
			if (currentNode.value === newNode.value) return null;

			if (currentNode.value < newNode.value) {
				if (!currentNode.right) {
					currentNode.right = newNode;
					break;
				}
				currentNode = currentNode.right;
			} else if (currentNode.value > newNode.value) {
				if (!currentNode.left) {
					currentNode.left = newNode;
					break;
				}
				currentNode = currentNode.left;
			}
		}

		return this;
	}

	find(value: any): Node | null {
		if (!this.root) return null;

		const nodeToFind = new Node(value);
		let currentNode: Node | null = this.root;
		let found = false;

		while (currentNode && !found) {
			if (currentNode.value < nodeToFind.value) {
				currentNode = currentNode.right;
			} else if (currentNode.value > nodeToFind.value) {
				currentNode = currentNode.left;
			} else {
				found = true;
			}
		}

		return currentNode;
	}

	breadthFirstSearch(bst: BinarySearchTree): number[] | null {
		if (!bst.root) return null;
		const nodesQueue = [];
		const visited = [];

		nodesQueue.push(bst.root);
		while (nodesQueue.length) {
			//@ts-ignore
			const currentNode: Node = nodesQueue.shift();
			visited.push(currentNode!.value);
			if (currentNode!.left) {
				nodesQueue.push(currentNode!.left);
			}
			if (currentNode!.right) {
				nodesQueue.push(currentNode!.right);
			}
		}
		return visited;
	}

	recursiveDFS(bst: BinarySearchTree): number[] | null {
		if (!bst.root) return null;
		const visited: number[] = [];
		const currentNode = bst.root;

		const preOrderDFS = (node: Node): void => {
			visited.push(node.value);
			if (node.left) preOrderDFS(node.left);
			if (node.right) preOrderDFS(node.right);
		};
		preOrderDFS(currentNode);

		return visited;
	}
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(5);
binarySearchTree.insert(3);
binarySearchTree.insert(2);
binarySearchTree.insert(4);
binarySearchTree.insert(8);
binarySearchTree.insert(7);
binarySearchTree.insert(10);
binarySearchTree.insert(6);

binarySearchTree.find(8);
binarySearchTree.breadthFirstSearch(binarySearchTree); // [5,3,8,2,4,7,10, 6]
binarySearchTree.recursiveDFS(binarySearchTree); // [5,3,2,4,8,7,6,10]
