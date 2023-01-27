let a = 24; // global scope

function test() {
  let b = 30;
  function new_test() {
    let v = 34;
    console.log(v, a, b);
  }

  new_test();
}
test();
//put another function inside another function

// it starts from the inner scope and outer to global scope

function test() {
  let inner_circle = 23;
  //  nested function
  function area() {
    let _area = inner_circle * inner_circle;
    console.log(_area);
  }
  //   area();
  area.apply(null, inner_circle);
}
