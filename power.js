test = require('tape')

/*
This is a tail recursive implementation of x^n.
The invariant used is:
  x^n = y^i * a
*/

let power = (x, n) => {
  function powerLoop(y, i, a){
    if(i == 0) return a
    else if(i%2 == 0) return powerLoop(y*y, i/2, a)
    else return powerLoop(y, i-1, y*a)
  }

  return powerLoop(x, n, 1)
}

// Tests
test('3^2', (assert) => {
  assert.equals(power(3, 2), 9)
  assert.end();
})


test('10^3', (assert) => {
  assert.equals(power(10, 3), 1000)
  assert.end();
})

test('32^7', (assert) => {
  assert.equals(power(32, 7), 34359738368)
  assert.end();
})

test('7^13', (assert) => {
  assert.equals(power(7, 13), 96889010407)
  assert.end();
})
