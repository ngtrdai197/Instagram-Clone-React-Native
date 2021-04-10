import React from 'react';
import { observer } from 'mobx-react';
import {
  View,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Input, Button } from 'react-native-elements';

import { ROUTE } from '../../constants/route';
import { StackParamList } from '../../navigation';
import { UseEffect } from '../../hooks/effect.hook';

type SignUpScreenNavigationProps = StackNavigationProp<
  StackParamList,
  ROUTE.SIGN_UP
>;

interface IProps {
  navigation: SignUpScreenNavigationProps;
}

@observer
export class SignupScreen extends React.Component<IProps> {
  public customHeaderEffect = () => {
    this.props.navigation.setOptions({
      title: 'Sign up',
    });
  };
  render() {
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <UseEffect effect={this.customHeaderEffect} dependency={[navigation]} />
        <StatusBar barStyle={'light-content'} />
        <View>
          <View style={styles.logo}>
            <Image
              source={require('../../assets/instagram-logo.png')}
              style={{ width: 150, height: 150 }}
            />
          </View>
          <View style={styles.wrapperInput}>
            <Input placeholder="Enter your email/username" />
            <Input placeholder="Enter your full name" />
            <Input placeholder="Enter your alias name" />
            <Input secureTextEntry placeholder="Enter your password" />
          </View>
          <View>
            <Button
              onPress={() => navigation.navigate(ROUTE.LOGIN)}
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
    );
  }
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
});
