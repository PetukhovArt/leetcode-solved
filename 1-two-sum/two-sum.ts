function twoSum(nums: number[], target: number): number[] {
    const table = new Map()
    for (let i=0; i < nums.length; i++ ) {
        const diff = target - nums[i]
        if (table.has(diff)) {
            return [i, table.get(diff)]
        }
        table.set(nums[i], i)
    }
};