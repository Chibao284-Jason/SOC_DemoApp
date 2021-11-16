import * as React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {} from 'react-native-elements';
import moment from 'moment';
import {styles} from './styles';

interface IContentComponentProps {}
const ContentComponent = (props: IContentComponentProps) => {
  const timeCreate = moment('2021-11').endOf('day').fromNow();

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.headingTitle('Bookerly')}>
          Tín hiệu vui với bóng đá nữ Việt Nam
        </Text>
      </View>
      <Text style={styles.textCreate('Courier New')}>{timeCreate}</Text>
      <Text style={styles.textHeaderContent()}>
        Vượt qua rào cản khó khăn. rào cản khó khăn. rào cản khó khăn.rào cản
        khó khăn. rào cản khó khăn. rào cản khó khăn. rào cản khó khăn. rào cản
        khó khăn. rào cản khó khăn.
      </Text>
      <Text style={styles.textBodyContent()}>
        Dư âm màn của so tài đỉnh cao. Dư âm màn của so tài đỉnh cao Dư âm màn
        của so tài đỉnh cao Dư âm màn của so tài đỉnh cao Dư âm màn của so tài
        đỉnh cao Dư âm màn của so tài đỉnh cao Dư âm màn của so tài đỉnh cao{' '}
      </Text>
    </ScrollView>
  );
};

export default ContentComponent;
