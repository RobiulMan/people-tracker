const faker = require("faker");

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red'

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Math.abs(parseFloat(faker.address.latitude())),
      lng: Math.abs(parseFloat(faker.address.longitude()))
    };
  }

  markerContent(): string {
    return `<div><h1>User Name:${this.companyName}</h1> 
    <h3>Catchpharse: ${this.catchPhrase}</h3></div>`;
  }
}
