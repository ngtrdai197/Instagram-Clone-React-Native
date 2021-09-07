import { observable } from 'mobx';
import { CommonBaseDto } from './base.model';

export class AuthLoginDto {
  @observable
  public email!: string;

  @observable
  public password!: string;
}

export class AuthLoginResponseDto {
  token!: string;
  refreshToken!: string;
  user!: UserDto;
}

export class UserDto extends CommonBaseDto {
  email!: string;
  username!: string;
  fullName!: string;
  refreshToken!: string;
  website?: string;
  bio?: string;
  avatarUrl?: string;
  gender?: string;
  dob?: Date;
  phoneNumber?: string;
  hasFollow?: boolean;
}
