export class Let {
  show: boolean;
  found: boolean;

  constructor (public id: number, public name: string, public romanization: string) {
    this.id = id
    this.name = name
    this.romanization = romanization
    this.show = true
    this.found = false
  }
}
