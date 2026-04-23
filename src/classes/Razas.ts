import { Perro } from "./Perro";

export class Mestizo extends Perro {
  ladrar(): void {
    console.log(`${this.nombre} dice: guau guau`);
  }
}

export class Doberman extends Perro {
  ladrar(): void {
    console.log(`${this.nombre} dice: woof woof`);
  }
}