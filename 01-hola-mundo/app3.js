console.log("Inicio de programas");

setTimeout(() => {
  console.log("Primer timeout");
}, 3000);

setTimeout(() => {
  console.log("Segundo timeout");
}, 0);

setTimeout(() => {
  console.log("Tercer timeout");
}, 0);
