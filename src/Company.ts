const faker = require("faker");

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Math.abs(parseFloat(faker.address.latitude())),
      lng: Math.abs(parseFloat(faker.address.longitude()))
    };
  }
}
