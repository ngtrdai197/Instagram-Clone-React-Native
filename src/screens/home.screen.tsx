import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Image } from 'react-native-elements';
import {
  StackHeaderLeftButtonProps,
  StackNavigationProp,
} from '@react-navigation/stack';

import { StackParamList } from '../navigation';
import { ROUTE } from '../constants/route';
import UseCustomNavigator from '../navigation/navigator';
import SinglePost from '../components/single-post';

type IndexScreenNavigationProps = StackNavigationProp<
  StackParamList,
  ROUTE.INDEX
>;

interface IProps {
  navigation: IndexScreenNavigationProps;
}

export default observer((props: IProps) => {
  const headerLeft = (
    props: StackHeaderLeftButtonProps,
  ): React.ReactElement => {
    return (
      <Image
        source={{
          uri: 'https://fir-deploy-147f3.web.app/assets/instagram-logo.png',
        }}
      ></Image>
    );
  };
  const data: Array<{ id: string; title: string }> = [
    {
      id: '1',
      title: 'Post 1',
    },
    {
      id: '2',
      title: 'Post 2',
    },
    {
      id: '3',
      title: 'Post 3',
    },
  ];

  return (
    <React.Fragment>
      <UseCustomNavigator
        navigation={props.navigation}
        routeOptions={{ title: undefined, headerLeft }}
      />
      {/* <KeyboardAvoidingView behavior="padding" style={styles.container}> */}
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={(record) => <SinglePost title={record.item.title} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      {/* </KeyboardAvoidingView> */}
    </React.Fragment>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
