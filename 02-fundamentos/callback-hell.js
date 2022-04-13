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
  {
    id: 2,
    salario: 2000,
  },
];

const getSalario = (id, callback) => {
  const salario = salarios.find((e) => e.id === id)?.salario;
  if (salario) {
    callback(null, salario);
  } else {
    callback("No existe el salario con " + id);
  }
};

const getEmpleado = (id, callback) => {
  // return empleados.find((e) => e.id === id);
  const empleado = empleados.find((e) => {
    return e.id === id;
  });
  if (empleado) {
    callback(null, empleado);
  } else {
    callback("No existe el empleado con " + id);
  }
};

getEmpleado(1, (err, empleado) => {
  if (err) return console.log("Error", err);
  console.log(empleado);
});

getSalario(1, (err, salario) => {
  if (err) return console.log("Error", err);
  console.log(salario);
});
