import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import { ROUTE } from '../constants/route';
import { StackParamList } from '../navigation';
import * as React from 'react';

type ScreenNavigationProps = StackNavigationProp<StackParamList, ROUTE>;

interface IProps {
  navigation: ScreenNavigationProps;
  routeOptions: Partial<StackNavigationOptions>;
}

const UseCustomNavigator = (props: IProps) => {
  React.useEffect(() => {
    props.navigation.setOptions({ ...props.routeOptions });
  }, [props.navigation]);

  return null;
};

export default UseCustomNavigator;
