import { action, observable } from 'mobx';
import Container from 'typedi';
import { apolloClient } from '../../apollo';
import { AuthLoginDto, AuthLoginResponseDto } from '../../models/auth.model';

import { UserService } from '../../services/user.service';

export class LoginModel {
  public readonly userService = Container.get(UserService);

  public login: AuthLoginDto = new AuthLoginDto();

  @action.bound
  public changeEmail = (email: string): void => {
    this.login.email = email.trim();
  };

  @action.bound
  public changePassword = (password: string) => {
    this.login.password = password.trim();
  };

  // @action.bound
  public onHandleLogin = (login: AuthLoginDto): void => {};
}
