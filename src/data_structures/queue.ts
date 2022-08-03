export class Node {
	value: any;
	next: Node | null;

	constructor(value: any) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
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

	enqueue(value: any): Queue {
		const newNode = new Node(value);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last!.next = newNode;
			this.last = newNode;
		}
		this.increaseSize();
		return this;
	}

	dequeue(): Node | null {
		if (!this.first) return null;
		const nodeToRemove = this.first;

		if (!this.first.next) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first.next;
		}

		nodeToRemove.next = null;
		this.decreaseSize();
		return nodeToRemove;
	}
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.dequeue();
queue.dequeue();
