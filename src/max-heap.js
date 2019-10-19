const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.parentCondidates = []
		this.heapSize = 0;
	}

	push(data, priority) {
		const node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if (this.isEmpty()) return;
		const rootData = this.root.data;
		return rootData;
	}

	detachRoot() {
		this.root = null;
		return this.parentNodes.shift();
	}

	restoreRootFromLastInsertedNode(detached) {
		// const newNode = new Node(detached.data, detached.priority);
		// this.root = newNode;
		// this.root.left = detached.left;
		// this.root.right = detached.right;
		this.parentNodes = this.parentNodes.filter(element => element !== detached);
		this.parentNodes.shift();
		this.parentNodes.unshift(detached);
	}

	size() {
		return this.heapSize;
		
	}

	isEmpty() {
		return !this.heapSize;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	insertNode(node) {
		if (this.isEmpty()) {
			this.root = node;
		} else {

			this.parentNodes[0].appendChild(node);

			if (this.parentNodes[0].right) {
				this.parentNodes.shift();
			}
			
		}
		this.parentNodes.push(node);
		this.heapSize ++;
	}

	shiftNodeUp(node) {
		
		if (node.parent) {
			const indexOfNode = this.parentNodes.indexOf(node);
			const indexOfParentNode = this.parentNodes.indexOf(node.parent);
			if (indexOfNode !== -1) this.parentNodes[indexOfNode] = node.parent;
			if (indexOfParentNode !== -1) this.parentNodes[indexOfParentNode] = node;
			node.swapWithParent();
			
			this.shiftNodeUp(node);
		}

		this.root = node;
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
