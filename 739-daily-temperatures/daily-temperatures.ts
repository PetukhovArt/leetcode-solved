function dailyTemperatures(temps: number[]): number[] {
    const stack = []
    const result = new Array(temps.length).fill(0)

    for (let i=0; i<temps.length; i++) {
        const t = temps[i]


        while (stack.length && t > temps[stack[stack.length-1]]) {
            // pop last which is less than t
            const j = stack.pop()
            // days count until more temp
            result[j] = i - j
        }
        // push next temp index in stack
        stack.push(i)
    }

    return result 
};