const deadpool = {
  nombre: " Wade",
  apellido: "Wilson",
  poder: "Regeneracion",
  getNombre: () => {
    return `${this.nombre} ${this.apellido}`;
  },
};

/* const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder;
 */
function imprimeHeroe(heroe) {
  const { nombre, apellido, poder } = heroe;

  console.log(nombre, apellido, poder);
}

imprimeHeroe(deadpool);

const heroes = ["Batman", "Superman", "Deadpool"];

const [h1, h2, h3] = heroes;
console.log(h1, h2, h3);
