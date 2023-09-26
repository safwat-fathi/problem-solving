function fib(n = 0) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(5));

function fibOptimized(n = 0) {
  const memo = {};

  function _fibOptimized(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    if (n in memo) return memo[n];

    memo[n] = _fibOptimized(n - 2) + _fibOptimized(n - 1);

    return memo[n];
  }

  return _fibOptimized(n);
}

console.log(fibOptimized(45));
console.log(fib(45));
