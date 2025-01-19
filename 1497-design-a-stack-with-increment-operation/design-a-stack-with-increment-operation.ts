class CustomStack {
    private stack: number[]
    constructor(private maxSize: number) {
        this.stack = []
    }

    push(x: number): void {
        if (this.size >= this.maxSize) {
            return
        } 
        this.stack.push(x)
    }

    pop(): number {
        if (!this.size) {
            return - 1
        }
        return this.stack.pop()
    }

    increment(k: number, val: number): void {
        const last = Math.min(k, this.size)
        for (let i = 0; i < last; i++) {
            this.stack[i] += val
        }
    }

    get size(): number {
        return this.stack.length
    }
}