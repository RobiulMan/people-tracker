// const title = document.querySelector(".title");
import { Company } from "./Company";
import { CustomeMap } from "./CustomeMap";
import { User } from "./User";

const user = new User();
const compnay = new Company();
const customuser = new CustomeMap("#map");

customuser.addMarker(user);
customuser.addMarker(compnay);
