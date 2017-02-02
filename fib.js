test = require('tape')

let fib = (n) => {
  function fibLoop(k, acc1, acc2){
    if(k==0) return 0
    if(k==1) return acc1
    else return fibLoop(k-1, acc1+acc2, acc1)
  }
  return fibLoop(n, 1, 0)
}

function fibNaive(n){
  if(n==0) return 0
  if(n==1) return 1
  return fibNaive(n-1) + fibNaive(n-2)
}

// 0 1 1 2 3 5 8 13 21 34 55 89 144

// Tests

test('Fibonacci of 0 is 0', (assert) => {
  assert.equals(fib(0), 0)
  assert.end()
})

test('Fibonacci of 1 is 1', (assert) => {
  assert.equals(fib(1), 1)
  assert.end()
})

test('Fibonacci of 2 is 1', (assert) => {
  assert.equals(fib(2), 1)
  assert.end()
})

test('Fibonacci of 4 is 3', (assert) => {
  assert.equals(fib(4), 3)
  assert.end()
})

test('Fibonacci of 10 is 55', (assert) => {
  assert.equals(fib(10), 55)
  assert.end()
})

test('Fibonacci of 32 is 2178309', (assert) => {
  assert.equals(fib(32), 2178309)
  assert.end()
})

test('Fibonacci of 42 is 267914296', (assert) => {
  assert.equals(fib(42), 267914296)
  assert.end()
})


console.log('fib(45)', fib(45))
console.log('fibNaive(45)', fibNaive(45))
