import React from "react";
import { observer } from "mobx-react";
import { View, Text, Button } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

interface IProps {
  navigation: NavigationStackProp;
}

@observer
export class SignupScreen extends React.Component<IProps> {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Signup Screen</Text>
        <Button title={"Go back"} onPress={() => navigation.pop(1)}></Button>
      </View>
    );
  }
}
