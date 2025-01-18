function isValid(s: string): boolean {
    const map = {
        '(': ')',
        '{':'}',
        '[':']'
    }
    if (s.length < 2) {
        return false 
    }
    const stack = []

    for (let i=0; i< s.length;i++) {
        const curr = s[i]
        if (map[curr]) {
            //fill reversed brackets
            stack.push(map[curr])
        } else {
            const last= stack.pop()
            if (last !== curr) {
                return false
            }   
        }
    }
    return stack.length === 0
};