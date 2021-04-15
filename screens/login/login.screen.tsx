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
import { StackNavigationProp } from '@react-navigation/stack';

import { ROUTE } from '../../constants/route';
import { LoginModel } from './login.model';
import { StackParamList } from '../../navigation';
import { UseEffect } from '../../hooks/effect.hook';

type LoginScreenNavigationProps = StackNavigationProp<
  StackParamList,
  ROUTE.SIGN_UP
>;

interface IProps {
  navigation: LoginScreenNavigationProps;
}

export default observer((props: IProps) => {
  const model = new LoginModel();

  const customHeaderEffect = () => {
    props.navigation.setOptions({
      title: 'Login ',
      headerRight: btnRight,
    });
  };

  const btnRight = (): React.ReactElement => {
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

  return (
    <React.Fragment>
      <UseEffect effect={customHeaderEffect} dependency={[props.navigation]} />
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
            <Input placeholder="Email" onChangeText={model.changeEmail} />
            <Input
              secureTextEntry
              placeholder="Password"
              onChangeText={model.changePassword}
            />
          </View>
          <View>
            <Button
              onPress={() => model.onHandleLogin()}
              title="Login"
              style={{ marginBottom: 20 }}
            />
            <Button
              onPress={() => props.navigation.navigate(ROUTE.SIGN_UP)}
              title="Sign up"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </React.Fragment>
  );
});

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
