function majorityElement(nums: number[]): number {

    if (nums.length < 2) {
        return nums[0]
    }    
    const majorCount = Math.ceil(nums.length / 2)
    const map = new Map()

    for (let n of nums) {
        if (map.has(n)) {
            const count = (map.get(n) || 0) + 1
            if (count >= majorCount) {
                return n
            }
            map.set(n, count)
        } else {
            map.set(n, 1)
        }
    }
};