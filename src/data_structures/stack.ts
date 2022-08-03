export class Node {
	value: any;
	next: Node | null;

	constructor(value: any) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	first: Node | null;
	last: Node | null;
	size: number;

	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	increaseSize(): void {
		this.size += 1;
	}

	decreaseSize(): void {
		if (this.size === 0) return;
		this.size -= 1;
	}

	push(value: any): Stack {
		const newNode = new Node(value);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			newNode.next = this.first;
			this.first = newNode;
		}

		this.increaseSize();
		return this;
	}

	pop(): Node | null {
		if (!this.first) return null;
		const temp = this.first;
		if (!this.first.next) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first.next;
		}
		this.decreaseSize();
		return temp;
	}
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
