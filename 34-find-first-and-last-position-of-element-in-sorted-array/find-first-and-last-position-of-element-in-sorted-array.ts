function searchRange(nums: number[], target: number): number[] {
    let n = [];

    for (let i = 0; i <= nums.length; i++){
        if (nums[i] == target){
            n.push(i)
        }
    }

    if (n.length == 0) return [-1, -1]

    return [n[0], n.pop()]
};