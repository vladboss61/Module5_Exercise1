export const days = {
    Monday: 1,
    Tuesday: 2
}

export function sum(numbers) {

    let result = 0
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    return result;
}