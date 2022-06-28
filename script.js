const largeArrayCapasity = 100000;
const largeArray = [largeArrayCapasity];
for (let index = 0; index < largeArrayCapasity; index++) {
    largeArray[index] = index;
}

const stack = [];
const queue = [];
const reversedQueue = [];
const hashTable = {};

console.log(`${new Intl.NumberFormat('en-en').format(largeArrayCapasity)} items array`)
console.log('');

console.log('Stack:');
console.time('stack create');
createStack(largeArray);
console.timeEnd('stack create');

console.time('stack clean');
cleanStack();
console.timeEnd('stack clean');
console.log('');

console.log('Queue:');
console.time('queue create');
createQueue(largeArray);
console.timeEnd('queue create');

console.time('queue clean');
cleanQueue();
console.timeEnd('queue clean');
console.log('');

console.log('Reversed Queue:');
console.time('reversed queue create');
createReversedQueue(largeArray);
console.timeEnd('reversed queue create');

console.time('reversed queue clean');
cleanReversedQueue();
console.timeEnd('reversed queue clean');
console.log('');

console.log('Hash table (object):');
console.time('hash table create');
createHashTable(largeArray);
console.timeEnd('hash table create');
console.log(hashTable);

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

function createQueue(array) {
    for (let index = 0; index < array.length; index++) {
        queue.push(array[index]);
    }
}

function cleanQueue() {
    while (queue.length != 0) {
        queue.shift();
    }
}

function createReversedQueue(array) {
    for (let index = 0; index < array.length; index++) {
        reversedQueue.unshift(array[index]);
    }
}

function cleanReversedQueue() {
    while (reversedQueue.length != 0) {
        reversedQueue.pop();
    }
}

function createHashTable(array) {
    for (let index = 0; index < array.length; index++) {
        hashTable[index] = array[index];
    }
}