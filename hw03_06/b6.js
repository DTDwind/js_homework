var counter = 0;
var addGlobal = () => {
  counter++;
  console.log(counter);
}
addGlobal();
addGlobal();
addGlobal();

var addLocal = () => {
  var counter = 0;
  counter++;
  console.log(counter);
}
addLocal();
addLocal();
addLocal();



var addClosure = (() => {
  var counter = 0;
  return () => {
    counter++;
    console.log(counter);
  }
})();
addClosure();
addClosure();
addClosure();


var add = (x) => {
  return (y) => {
    console.log(x+y);
  };
}

var add5 = add(5);
add5(3);