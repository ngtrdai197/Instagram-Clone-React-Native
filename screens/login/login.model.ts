import { action, observable } from 'mobx';
import Container from 'typedi';
import { LoginDto } from '../../models/login.model';
import { UserService } from '../../services/user.service';

export class LoginModel {
  public userService = Container.get(UserService);

  @observable
  public login: LoginDto = new LoginDto();

  @action.bound
  public changeEmail = (email: string): void => {
    this.login.email = email.trim();
  };

  @action.bound
  public changePassword = (password: string) => {
    this.login.password = password.trim();
  };

  @action.bound
  public onHandleLogin = (): void => {
    console.log(`this.login`, this.login);
  };
}
