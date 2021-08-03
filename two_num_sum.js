"use strict"
// O(n^2) time | O(1) space
function twoNumSumOOne(array, targetSum) {
    for (let i = 0; i < array.length; i++) {
        let currentNum = targetSum - array[i];

        for(let y = array.length; y > i; y--) {
            if (currentNum === array[y]) {
                return [array[i], array[y]];
            }
        }
    }
    return [];
}

console.log(twoNumSumOOne(
    [6,5,8,9,11,-1,13],
    12,
), 'O(n^2)');

// O(n) time | O(n) space
function twoNumSumOTwo(array, targetSum) {
    const nums = new Map;
    const numsResolve = [];
    array.some((num) => {
        let currentNum = targetSum - num;
        if (nums.has(currentNum)) {
            numsResolve.push(currentNum, num)
            return true;
        } else {
            nums.set(num, true);
        }
    });
    return numsResolve;
}

console.log(twoNumSumOTwo(
    [6,5,8,9,11,-1,13],
    12,
), 'O(n2)');

// O(nlog(n)) time | O(1) space
function twoNumSumOTrie(array, targetSum) {
    array.sort((a, b) => a - b); // должна быть реализована быстрая сортировка
    let left = 0;
    let right = array.length -1;
    while (left < right) {
        const currentNum = array[left] + array[right];
        if (currentNum === targetSum) {
            return [array[left], array[right]];
        } else if (currentNum < targetSum) {
            left++;
        } else if (currentNum > targetSum) {
            right++;
        }
    }
    return [];
}

console.log(twoNumSumOTrie(
    [6,5,8,9,11,-1,13],
    12,
), 'O(nlog(n))');
