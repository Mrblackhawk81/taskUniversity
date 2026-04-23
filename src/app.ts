import { Chihuahua, Pitbull } from "./classes/Razas";
import type { Perro } from "./classes/Perro";

// Instanciamos los objetos
const perroMestizo = new Chihuahua("Spike", 2);
const perroDoberman = new Pitbull("Rambo", 5);

// 1. Ejemplo de Herencia
console.log("--- Ejemplo de Herencia ---");
perroMestizo.comer();
perroDoberman.comer();
console.log("");

// 2. Ejemplo de Polimorfismo
const misPerros: Perro[] = [perroMestizo, perroDoberman];

console.log("--- Ejemplo de Polimorfismo ---");
misPerros.forEach((perro) => {
  perro.ladrar();
});