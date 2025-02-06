function reverseVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const arr = Array.from(s);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const isVowel = (ch) => vowels.has(ch.toLowerCase());

        if (!isVowel(arr[left])) {
            left++;
        } else if (!isVowel(arr[right])) {
            right--;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('');
}