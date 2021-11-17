import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {} from 'react-native-elements';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {styles} from './styles';
import {
  IChangeThemeFontFamilyReducer,
  IChangeThemeFontSizeReducer,
} from '@models/reducers/changeTheme';

interface IContentComponentProps {}
interface IReducer {
  ChangeFontReducer: IChangeThemeFontFamilyReducer &
    IChangeThemeFontSizeReducer;
}

const ContentComponent = (props: IContentComponentProps) => {
  const font = useSelector((state: IReducer) => state.ChangeFontReducer.font);

  const fontSize = useSelector(
    (state: IReducer) => state.ChangeFontReducer.fontSize,
  );

  const timeCreate = moment('2021-11').endOf('day').fromNow();

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.headingTitle(font, fontSize)}>
          Tín hiệu vui với bóng đá nữ Việt Nam
        </Text>
      </View>
      <Text style={styles.textCreate(font, fontSize)}>{timeCreate}</Text>
      <Text style={styles.textHeaderContent(font, fontSize)}>
        Vượt qua rào cản khó khăn. rào cản khó khăn. rào cản khó khăn.rào cản
        khó khăn. rào cản khó khăn. rào cản khó khăn. rào cản khó khăn. rào cản
        khó khăn. rào cản khó khăn.
      </Text>
      <Text style={styles.textBodyContent(font, fontSize)}>
        Dư âm màn của so tài đỉnh cao. Dư âm màn của so tài đỉnh cao Dư âm màn
        của so tài đỉnh cao Dư âm màn của so tài đỉnh cao Dư âm màn của so tài
        đỉnh cao Dư âm màn của so tài đỉnh cao Dư âm màn của so tài đỉnh cao{' '}
      </Text>
    </ScrollView>
  );
};

export default ContentComponent;
