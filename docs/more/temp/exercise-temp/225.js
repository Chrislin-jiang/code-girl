/**
 * Initialize your data structure here.
 */
class MyStack {
	constructor() {
		this.q1 = []
		this.q2 = []
	}
	/**
	 * Push element x onto stack. 
	 * @param {number} x
	 * @return {void}
	 */
	push(x) {
		if (this.q1.length === 0) {
			this.q2.push(x)
		} else {
			this.q1.push(x)
		}
	}
	/**
	 * Removes the element on top of the stack and returns that element.
	 * @return {number}
	 */
	pop() {
		if (this.q1.length === 0) {
			while (this.q2.length > 1) {
				this.q1.push(this.q2.shift())
			}
			return this.q2.shift()
		} else {
			while (this.q1.length > 1) {
				this.q2.push(this.q1.shift())
			}
			return this.q1.shift()
		}
	}
	/**
	 * Get the top element.
	 * @return {number}
	 */
	top() {
		if (this.q1.length === 0) {
			while (this.q2.length > 1) {
				this.q1.push(this.q2.shift())
			}
			let top = this.q2.shift()
			this.q1.push(top)
			return top
		} else {
			while (this.q1.length > 1) {
				this.q2.push(this.q1.shift())
			}
			let top = this.q1.shift()
			this.q2.push(top)
			return top
		}
	}
	/**
	 * Returns whether the stack is empty.
	 * @return {boolean}
	 */
	empty() {
		return this.q1.length === 0 && this.q2.length === 0
	}
}