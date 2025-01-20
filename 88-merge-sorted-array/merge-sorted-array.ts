/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1
    let j = n - 1
    let fillIdx = m+n - 1


    while (i >= 0 && j >=0) {
        
        const numI = nums1[i]
        const numJ = nums2[j]

        if (numI > numJ) {
           // take from nums1, change pointer 
           nums1[fillIdx] = numI 
           i--
        } else {
            // take from nums2, change pointer 
           nums1[fillIdx] = numJ
           j--
        }
        fillIdx--
    }

    // if any items in nums2
    while (j >= 0) {
        nums1[fillIdx] = nums2[j];
        j--;
        fillIdx--;
    }

};
