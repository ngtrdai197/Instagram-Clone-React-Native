import { observable } from 'mobx'

export class LoginDto {
  @observable
  public email!: string

  @observable
  public password!: string
}
