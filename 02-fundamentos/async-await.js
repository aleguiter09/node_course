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

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return empleado + salario;
  } catch (err) {
    throw err;
  }
};

getInfoUsuario(id)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
