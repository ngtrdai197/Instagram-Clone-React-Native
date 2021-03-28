import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { ROUTE } from "../constants/route";
import { LoginScreen } from "../screens/login/login.screen";
import { SignupScreen } from "../screens/signup/signup.screen";

const RootStack = createStackNavigator(
  {
    [ROUTE.LOGIN]: {
      screen: LoginScreen,
    },
    [ROUTE.SIGN_UP]: {
      screen: SignupScreen,
    },
  },
  {
    headerMode: "none",
  }
);
export default createAppContainer(RootStack);
