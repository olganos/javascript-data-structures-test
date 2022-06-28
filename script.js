const largeArray = [1000000];
for (let index = 0; index < 1000000; index++) {
    largeArray[index] = index;
}

const stack = [];
const queue = [];

console.log('1,000,000 items array')
console.log('');

console.log('Stack:');
console.time('stack create');
createStack(largeArray);
console.timeEnd('stack create');

console.time('stack clean');
cleanStack(largeArray);
console.timeEnd('stack clean');
console.log('');

function createStack(array) {
    for (let index = 0; index < array.length; index++) {
        stack.push(array[index]);
    }
}

function cleanStack() {
    while (stack.length != 0) {
        stack.pop();
    }
}