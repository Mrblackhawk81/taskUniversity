import { Perro } from "./Perro";

export class Chihuahua extends Perro {
  ladrar(): void {
    console.log(`${this.nombre} dice: guau guau`);
  }
}

export class Pitbull extends Perro {
  ladrar(): void {
    console.log(`${this.nombre} dice: woof woof`);
  }
}