function a() {
  console.log("a");
  b();
  console.log("aa");
}
function b() {
  console.log("b");
  c();
}

function c() {
  console.log("c");
}

a();
