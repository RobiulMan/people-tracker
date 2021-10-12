const faker = require("faker");
import { Mappable } from "./CustomeMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.name.firstName();

    this.location = {
      lat: Math.abs(parseFloat(faker.address.latitude())),
      lng: Math.abs(parseFloat(faker.address.longitude()))
    };
  }

  markerContent(): string {
    return `User Name:${this.name}`;
  }
}
