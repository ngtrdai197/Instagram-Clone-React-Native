import React, { useState } from 'react';
import { observer } from 'mobx-react';
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigationProp } from '@react-navigation/stack';

import { ROUTE } from '../../constants/route';
import { LoginModel } from './login.model';
import { StackParamList } from '../../navigation';
import { AuthLoginDto } from '../../models/auth.model';
import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { AUTH_LOGIN_MUTATION } from '../../apollo/auth/auth.mutation';
import UseCustomNavigator from '../../navigation/navigator';
import {
  SignInMutationMutation,
  SignInMutationMutationVariables,
} from '../../apollo/types';
import { getAccessToken, setAccessToken } from '../../utils/secure-store';

type LoginScreenNavigationProps = StackNavigationProp<
  StackParamList,
  ROUTE.SIGN_UP
>;

interface IProps {
  navigation: LoginScreenNavigationProps;
}

export default observer((props: IProps) => {
  const model = new LoginModel();
  const [login, setLogin] = useState<AuthLoginDto>({ email: '', password: '' });
  const [loginMutationFn] = useMutation<
    SignInMutationMutation,
    SignInMutationMutationVariables
  >(AUTH_LOGIN_MUTATION, {
    variables: { input: login },
  });

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

  const onHandleLogin = useCallback(async () => {
    props.navigation.push(ROUTE.INDEX);
    // const { data, errors } = await loginMutationFn({ fetchPolicy: 'no-cache' });
    // console.log('data :>> ', data);
    // console.log('errors :>> ', errors);
    // if (data?.signIn) {
    //   setAccessToken(data.signIn.token);
    //   setAccessToken(data.signIn.refreshToken);
    //   props.navigation.push(ROUTE.INDEX);
    // }
  }, []);

  return (
    <React.Fragment>
      <UseCustomNavigator
        navigation={props.navigation}
        routeOptions={{ title: 'Login', headerRight: btnRight }}
      />
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <View>
          <View style={styles.logo}>
            <Image
              source={require('../../../assets/instagram-logo.png')}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <View style={styles.wrapperInput}>
            <Input
              placeholder="Email"
              onChangeText={(email) =>
                setLogin((state) => ({ ...state, email }))
              }
              leftIcon={<Icon name="email" size={24} color="black" />}
            />
            <Input
              secureTextEntry
              placeholder="Password"
              onChangeText={(password) =>
                setLogin((state) => ({ ...state, password }))
              }
              leftIcon={<Icon name="lock" size={24} color="black" />}
            />
          </View>
          <View>
            <Button
              onPress={onHandleLogin}
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
});
