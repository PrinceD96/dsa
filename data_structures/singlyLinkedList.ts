export class Node {
	value: any;
	next: Node | null;

	constructor(value: any) {
		this.value = value;
		this.next = null;
	}
}

class SingleLinkedList {
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

	push(value: any): SingleLinkedList {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail!.next = newNode;
			this.tail = newNode;
		}
		this.increaseLength();
		return this;
	}

	pop(): Node | null {
		if (!this.head) return null;
		let previous = this.head;
		let current = this.head;

		while (current.next) {
			previous = current;
			current = current.next;
		}
		previous.next = null;
		this.tail = previous;
		this.decreaseLength();
		if (!this.length) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	shift(): Node | null {
		if (!this.head) return null;
		const temp = this.head;
		if (!this.head.next) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
		}
		temp.next = null;
		this.decreaseLength();
		return temp;
	}

	unshift(value: any): SingleLinkedList {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.increaseLength();
		return this;
	}

	get(index: number): Node | null {
		if (index < 0 || index >= this.length) return null;
		let currentIdx = 0;
		let currentNode = this.head;
		while (currentIdx < index) {
			currentNode = currentNode!.next;
			currentIdx++;
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
		if (previousNode) {
			const newNode = new Node(value);
			newNode.next = previousNode.next;
			previousNode.next = newNode;
			this.increaseLength();
			return true;
		}

		return false;
	}

	remove(index: number): Node | null {
		if (index < 0 || index >= this.length) return null;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		const previousNode = this.get(index - 1);
		const nodeToRemove = previousNode!.next;
		previousNode!.next = previousNode!.next!.next;
		this.decreaseLength();
		return nodeToRemove;
	}

	reverse(): SingleLinkedList {
		let previousNode = null;
		let currentNode = this.head;
		let nextNode = null;
		this.tail = currentNode;

		while (currentNode) {
			nextNode = currentNode.next;
			currentNode.next = previousNode;
			previousNode = currentNode;
			currentNode = nextNode;
		}

		this.head = previousNode;

		return this;
	}
}

const singleLinkedList = new SingleLinkedList();

singleLinkedList.push('One');
singleLinkedList.push('Two');
singleLinkedList.push('Three');
// singleLinkedList.pop()
// singleLinkedList.shift()
singleLinkedList.unshift('Zero');
// console.log(singleLinkedList.insert("One", 1))
// singleLinkedList.remove(1);
singleLinkedList.reverse();
