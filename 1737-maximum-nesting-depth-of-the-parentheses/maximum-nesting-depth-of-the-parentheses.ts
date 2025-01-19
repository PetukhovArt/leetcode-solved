
class Stack<T> {
    private items:T[] = []

    get top ():T | undefined {
        return this.items[this.items.length-1]
    }
    get size ():number {
        return this.items.length
    }
    push (item:T):void {
        this.items.push(item)
    }
    pop ():T | undefined {
        return this.items.pop()
    }
}

function maxDepth(s: string): number {
    const stack = new Stack()

    let max = 0

    for (let i=0;i<s.length;i++) {
        if (s[i] === '(') {
            stack.push(s[i])
            max = Math.max(max, stack.size)
        } else if (s[i]===')') {
            stack.pop()
        }
    }
    return max
};