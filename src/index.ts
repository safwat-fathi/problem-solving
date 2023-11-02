import MinStack from "./leetcode/Stacks/StackClass";

const minStack = new MinStack();

minStack.push(-1);
minStack.push(10);
minStack.push(-2);
// console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
console.log(minStack.top());
