function searchRange(nums: number[], target: number): number[] {

    function findFirst(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;
        let first = -1;

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);

            if (nums[middle] === target) {
                first = middle; 
                right = middle - 1; 
            } else if (nums[middle] < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return first;
    }

    function findLast(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;
        let last = -1;

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);

            if (nums[middle] === target) {
                last = middle; 
                left = middle + 1; 
            } else if (nums[middle] < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return last;
    }

    const first = findFirst(nums, target);
    const last = findLast(nums, target);

    return [first, last];
}