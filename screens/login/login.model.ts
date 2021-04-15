import { action, observable } from 'mobx';
import Container from 'typedi';
import { gql } from '@apollo/client';

import { LoginDto } from '../../models/login.model';
import { UserService } from '../../services/user.service';

export const SIGN_IN_MUTATION = gql`
  mutation signInMutation($input: CredentialInput!) {
    signIn(input: $input) {
      token
      refreshToken
      user {
        id
        email
        fullName
        username
        phoneNumber
        bio
        dob
        gender
        website
        avatarUrl
        hasFollow
      }
    }
  }
`;

export class LoginModel {
  public readonly userService = Container.get(UserService);

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
    // this.apollo.client
    //   .mutate<{signIn: any}>({
    //     mutation: SIGN_IN_MUTATION,
    //     variables: this.changePassword,
    //   })
    //   .then((result) => {
    //     result.data!.signIn
    //     console.log(`result.data`, result.data);
    //   });
  };
}
