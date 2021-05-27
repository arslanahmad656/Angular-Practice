export class Person {
    constructor(
        private id: Number,
        private name: string
    ) {

    }

    toString(): string {
        return `${this.name} (${this.id})`
    }
}