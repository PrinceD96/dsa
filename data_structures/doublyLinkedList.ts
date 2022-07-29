export class Node {
	value: any;
	next: Node | null;
	previous: Node | null;

	constructor(value: any) {
		this.value = value;
		this.next = null;
		this.previous = null;
	}
}

class DoublyLinkedlist {
	head: Node | null;
	tail: Node | null;
	length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	increaseLength(): void {
		this.length += 1;
	}

	decreaseLength(): void {
		if (this.length === 0) return;
		this.length -= 1;
	}

	push(value: any): DoublyLinkedlist {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail!.next = newNode;
			newNode.previous = this.tail;
			this.tail = newNode;
		}

		this.increaseLength();
		return this;
	}

	pop(): Node | null {
		if (this.length === 0) return null;

		const nodeToRemove = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = nodeToRemove!.previous;
			this.tail!.next = null;
			nodeToRemove!.previous = null;
		}
		this.decreaseLength();
		return nodeToRemove;
	}

	shift(): Node | null {
		if (this.length === 0) return null;

		const nodeToRemove = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = nodeToRemove!.next;
			this.head!.previous = null;
			nodeToRemove!.next = null;
		}
		this.decreaseLength();
		return nodeToRemove;
	}

	unshift(value: any): DoublyLinkedlist {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head!.previous = newNode;
			this.head = newNode;
		}

		this.increaseLength();
		return this;
	}

	get(index: number): Node | null {
		if (index < 0 || index >= this.length) return null;

		let currentIdx, currentNode;
		if (index <= this.length / 2) {
			currentIdx = 0;
			currentNode = this.head;
			while (currentIdx < index) {
				currentNode = currentNode!.next;
				currentIdx++;
			}
		} else {
			currentIdx = this.length - 1;
			currentNode = this.tail;
			while (currentIdx > index) {
				currentNode = currentNode!.previous;
				currentIdx--;
			}
		}
		return currentNode;
	}

	set(value: any, index: number): boolean {
		const existingNode = this.get(index);
		if (existingNode) {
			existingNode.value = value;
			return true;
		}
		return false;
	}

	insert(value: any, index: number): boolean {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(value);
		if (index === this.length) return !!this.push(value);

		const previousNode = this.get(index - 1);
		const newNode = new Node(value);
		const afterNode = previousNode!.next;

		(newNode.next = afterNode), (afterNode!.previous = newNode);
		(newNode.previous = previousNode), (previousNode!.next = newNode);
		this.increaseLength();
		return true;
	}

	remove(index: number): Node | null {
		if (index < 0 || index >= this.length) return null;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		const previousNode = this.get(index - 1);
		const nodeToRemove = previousNode!.next;
		const afterNode = nodeToRemove!.next;

		(previousNode!.next = afterNode), (afterNode!.previous = previousNode);
		(nodeToRemove!.previous = null), (nodeToRemove!.next = null);

		this.decreaseLength();
		return nodeToRemove;
	}

	reverse(): DoublyLinkedlist | null {
		if (this.length === 0) return null;
		let currentNode = this.head;
		let newHead = this.head;
		this.tail = this.head;

		while (currentNode) {
			const previousNode = currentNode.previous;
			currentNode.previous = currentNode.next;
			currentNode.next = previousNode;
			newHead = currentNode;
			currentNode = currentNode.previous;
		}

		this.head = newHead;

		return this;
	}
}

const doublyLinkedlist = new DoublyLinkedlist();
doublyLinkedlist.push('One');
doublyLinkedlist.push('Two');
doublyLinkedlist.push('Three');
// doublyLinkedlist.pop();
// doublyLinkedlist.shift();
// doublyLinkedlist.unshift('Zero');
// doublyLinkedlist.get(0);
// doublyLinkedlist.insert('Two', 2);
// doublyLinkedlist.remove(3);
doublyLinkedlist.reverse();
