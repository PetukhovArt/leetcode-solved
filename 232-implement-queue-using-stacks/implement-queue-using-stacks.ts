class MyQueue {
    private queue
    constructor() {
        this.queue = []
    }

    push(x: number): void {
        this.queue.push(x)
    }

    pop(): number {
        return this.queue.shift() // O'n
    }

    peek(): number {
        return this.queue[0]
    }

    empty(): boolean {
        return !this.queue.length
    }
}