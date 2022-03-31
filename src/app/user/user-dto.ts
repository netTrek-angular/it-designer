import {User} from "./user";
import {DTO} from "../utils/DTO";
export class UserDTO extends DTO<User> implements User {

  id?: number;
  email!: string;
  firstname!: string;
  lastname!: string;


  override toString (): string {
    return `${this.firstname} ${this.lastname}`;
  }
}
