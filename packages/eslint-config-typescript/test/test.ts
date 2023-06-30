function foo() {}
function bar() {}
function baz() {}
function yousk() {}

var n = 0;
n = 2;
if (n === 1) {
  foo();
} else if (n === 2) {
  bar();
} else if (n === 3) {
  baz();
} else if (n === 2) {
  yousk();
}

if (false) {
  // @ts-ignore: Unreachable code error
  console.log('hello');
}

enum E {
  A = 0,
  B = 0,
}