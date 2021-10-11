import { Company } from "./Company";
import { User } from "./User";

const title = document.querySelector('.title')

const user = new User()
console.log(user);
const company = new Company()
console.log(company);

// title.innerText = `${user.location.lat} ${user.location.lng}`
