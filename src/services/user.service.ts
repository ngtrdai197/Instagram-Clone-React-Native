import { makeAutoObservable, observable } from 'mobx';
import { Service } from 'typedi';

@Service()
export class UserService {
  constructor() {
    makeAutoObservable(this, {
      message: observable,
    });
  }
  public message: string = 'React Native with Expo !!!';
}
