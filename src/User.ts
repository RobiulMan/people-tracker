const faker = require("faker");

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();

    this.location = {
      lat: Math.abs(parseFloat(faker.address.latitude())),
      lng: Math.abs(parseFloat(faker.address.longitude()))
    };
  }
}
