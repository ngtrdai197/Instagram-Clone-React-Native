import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Octicons';

interface IProps {
  title: string;
}

function SinglePost(props: IProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperHeader}>
        <View style={styles.header}>
          <Avatar
            source={{
              uri: 'https://fir-deploy-147f3.web.app/assets/default-avatar-1.png',
            }}
          />
          <Text style={styles.headerUser}>__nguyendai.dev</Text>
        </View>
        <View>
          <Icon name="kebab-horizontal" size={18} color="black" />
        </View>
      </View>
      <View>
        {/* Display gallery */}
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/fir-deploy-147f3.appspot.com/o/post%2F534c6d2f-3419-425c-93be-053eb4add62c%2F1617358249297_4CF113CA-726E-47B8-99E9-323740D30A5D.jpeg?alt=media&token=929485ae-0dc6-4b3b-bb90-a49975d0ddc1',
          }}
          style={{ width: '100%', minHeight: 500, marginTop: 15 }}
          resizeMode="stretch"
        />
      </View>
    </View>
  );
}

export default SinglePost;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },
  wrapperHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 20,
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerUser: {
    fontSize: 12,
    marginLeft: 10,
  },
});
