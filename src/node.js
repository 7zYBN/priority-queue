class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (!this.left) {
			this.left = node;
			this.left.parent = this;
		} else if (!this.right) {
			this.right = node;
			this.right.parent = this;
		}
	}

	removeChild(node) {
		if (this.left === node) {
			this.left = null;
		} else if (this.right === node) {
			this.right = null;
		} else throw new Error('Passed node is not a child of this node');
		node.parent = null;
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {

		if (this.parent) {
			const currentChild = (this === this.parent.left) ? 'left' : 'right';
			const secondChild = (this === this.parent.left) ? 'right' : 'left';
			let buffGrandParent = this.parent.parent; //root
			if (this.parent.parent) {
				let parentForGrandParent = (this.parent === this.parent.parent.left) ? 'left' : 'right';
				this.parent.parent[parentForGrandParent] = this;
			}
			
			this.parent.parent = this;
			if (this.parent[currentChild]) {
				this.parent[currentChild] = this[currentChild];
				this[currentChild] = this.parent;
			}
			
			
			if (this.parent[secondChild]) {
				this.parent[secondChild].parent = this;
				this[secondChild] = this.parent[secondChild];
			}
			this.parent = buffGrandParent;
		
		}
	}
}

module.exports = Node;
