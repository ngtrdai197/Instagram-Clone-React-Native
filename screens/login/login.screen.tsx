import React from 'react';
import { observer } from 'mobx-react';
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import { Input, Button } from 'react-native-elements';

import { ROUTE } from '../../constants/route';
import { LoginModel } from './login.model';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../navigation';
import { UseEffect } from '../../hooks/effect.hook';

type LoginScreenNavigationProps = StackNavigationProp<
  StackParamList,
  ROUTE.SIGN_UP
>;

interface IProps {
  navigation: LoginScreenNavigationProps;
}

@observer
export class LoginScreen extends React.Component<IProps> {
  private readonly model = new LoginModel();

  public customHeaderEffect = () => {
    this.props.navigation.setOptions({
      title: 'Login ',
      headerRight: this.btnRight,
    });
  };

  render() {
    const { navigation } = this.props;

    return (
      <React.Fragment>
        <UseEffect effect={this.customHeaderEffect} dependency={[navigation]} />
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <StatusBar barStyle={'light-content'} />
          <View>
            <View style={styles.logo}>
              <Image
                source={require('../../assets/instagram-logo.png')}
                style={{ width: 150, height: 150 }}
              />
            </View>
            <View style={styles.wrapperInput}>
              <Input
                placeholder="Email"
                onChangeText={this.model.changeEmail}
              />
              <Input
                secureTextEntry
                placeholder="Password"
                onChangeText={this.model.changePassword}
              />
            </View>
            <View>
              <Button
                onPress={() => this.model.onHandleLogin()}
                title="Login"
                style={{ marginBottom: 20 }}
              />
              <Button
                onPress={() => navigation.navigate(ROUTE.SIGN_UP)}
                title="Sign up"
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </React.Fragment>
    );
  }

  public btnRight = (): React.ReactElement => {
    return (
      <View>
        <Button
          onPress={() => {
            console.log('right btn clicked');
          }}
          title="Right Btn"
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  wrapperInput: {
    width: 350,
  },
  input: {
    // color: '#333',
    // marginBottom: 20,
    // maxWidth: 250,
    // borderColor: '#333',
  },
});
