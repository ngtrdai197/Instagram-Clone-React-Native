import Container from "typedi";
import { UserService } from "../../services/user.service";

export class LoginModel {
  public userService = Container.get(UserService);
}
