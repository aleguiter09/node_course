/* setTimeout(function () {
  console.log("Hola mundo");
}, 1000);
 */

const getUserById = (id, callback) => {
  const usuario = {
    id,
    nombre: "Fernando",
  };

  setTimeout(() => {
    callback(usuario);
  }, 1000);
};

getUserById(10, (user) => {
  console.log("Hola mundo", user);
});
