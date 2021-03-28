import { observer } from "mobx-react";
import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

import { ROUTE } from "../../constants/route";
import { LoginModel } from "./login.model";

interface IProps {
  navigation: NavigationStackProp;
}

@observer
export class LoginScreen extends React.Component<IProps> {
  private readonly model = new LoginModel();

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Login Screen</Text>
        <View>
          <Button
            onPress={() => navigation.navigate({ routeName: ROUTE.SIGN_UP })}
            title={"Sign up"}
          />
        </View>
      </View>
    );
  }
}
