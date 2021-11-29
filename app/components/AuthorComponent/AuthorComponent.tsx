import * as React from 'react';
import {View, StyleSheet, Text, ImageSourcePropType} from 'react-native';
import {Avatar} from 'react-native-elements';
interface IAuthorComponentProps {
  imgAuthor?: ImageSourcePropType;
  nameAuthor?: string;
  isAvatar?: boolean;
}

const AuthorComponent = (props: IAuthorComponentProps) => {
  const {imgAuthor, nameAuthor, isAvatar} = props;
  return (
    <View style={styles.container}>
      {isAvatar && (
        <Avatar
          size={30}
          rounded
          title="MT"
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
          source={
            imgAuthor
              ? imgAuthor
              : {
                  uri: 'https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/62472150_1186880648180331_2568468555578212352_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kP3C_lnT1mEAX8u6VZu&_nc_ht=scontent.fsgn5-11.fna&oh=8c6962a301ed35e398153c7f49de4d11&oe=61B95BCB',
                }
          }
        />
      )}
      <Text style={styles.userName}>
        {nameAuthor ? nameAuthor : 'Anonymous'}
      </Text>
    </View>
  );
};

export default AuthorComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {fontSize: 20, paddingLeft: 5},
});
