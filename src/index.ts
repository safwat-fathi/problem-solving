import MinStack from "./leetcode/Stacks/MinStackClass";

const minStack = new MinStack();

minStack.push(2);
minStack.push(0);
minStack.push(3);
minStack.push(0);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
// minStack.pop();
// console.log(minStack.getMin());
// console.log(minStack.top());
