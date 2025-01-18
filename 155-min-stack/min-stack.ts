class MinStack {
    private stack
    private minStack
    constructor() {
      this.stack = []  
      this.minStack = []
    }

    private get topMin(): number {
        if (this.minStack.length === 1) {
            return this.minStack[0]
        }
        return this.minStack[this.minStack.length-1] || 0
    }

    push(val: number): void {
        this.stack.push(val)
        if (this.minStack.length === 0 || val <= this.topMin) {
            this.minStack.push(val);
        }
    }

    pop(): void {
     const removed = this.stack.pop()
     if (removed === this.topMin) {
        this.minStack.pop()
     }   
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.topMin || 0
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */