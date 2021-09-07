import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';

interface IProps extends StackHeaderProps {
  title: string;
  rightHeader?: React.ReactElement;
  leftHeader?: React.ReactElement;
}

export class CustomHeaderTitle extends React.Component<IProps> {
  public render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <View>{this.props.leftHeader}</View>
        <View style={styles.title}>
          <Text style={{ fontSize: 22 }}>{this.props.title}</Text>
        </View>
        <View>{this.props.rightHeader}</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    alignItems: 'center',
  },
});
