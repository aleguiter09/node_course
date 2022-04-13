const empleados = [
  {
    id: 1,
    nombre: "Fernando",
  },
  {
    id: 2,
    nombre: "Linda",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    empleado ? resolve(empleado) : reject("No existe pa");
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.id === id)?.salario;
    salario ? resolve(salario) : reject("No existe salario pa");
  });
};

const id = 2;

/* getEmpleado(id)
  .then((empleado) => console.log(empleado))
  .catch((err) => console.error(err));

getSalario(id)
  .then((salario) => console.log(salario))
  .catch((err) => console.error(err));
 */

/* getEmpleado(id)
  .then((empleado) => {
    getSalario(id)
      .then((salario) => {
        console.log("El empleado", empleado, "tiene un salario de:", salario);
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err)); */

let nombre;
getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log("El empleado", nombre, "tiene un salario de:", salario)
  )
  .catch((err) => console.error(err));
