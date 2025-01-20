function majorityElement(nums: number[]): number {
    let currentMajor = nums[0]; // Инициализируем кандидата
    let count = 1; // Инициализируем счётчик

    for (let i = 1; i < nums.length; i++) {
        const n = nums[i];
        if (n === currentMajor) {
            count += 1; 
        } else {
            if (count === 0) {
                currentMajor = n;
                count = 1;
            } else {
                count -= 1; 
            }
        }
    }

    return currentMajor;
}