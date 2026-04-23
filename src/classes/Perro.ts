export abstract class Perro {
  constructor(public nombre: string, public edad: number) {}

  comer(): void {
    console.log(`${this.nombre} está comiendo.`);
  }

  abstract ladrar(): void;
}