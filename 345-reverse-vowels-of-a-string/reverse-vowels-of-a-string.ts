function reverseVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const arr = Array.from(s);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const isVowel = (ch) => vowels.has(ch.toLowerCase());

        if (!isVowel(arr[left])) {
            left++; // Двигаем левый указатель, если символ не гласный
        } else if (!isVowel(arr[right])) {
            right--; // Двигаем правый указатель, если символ не гласный
        } else {
            // Если оба символа — гласные, меняем их местами
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('');
}