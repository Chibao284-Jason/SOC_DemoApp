import * as React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CardComponent from '@components/CardComponent/CardComponent';
import {screenName} from '@navigation/screenName';
import {colorGlobal} from '@config/colorGlobal';
import {Row} from '@models/actions/listNews';

interface IDataList {
  items: Row;
}

const ListNewsScreen = (props: IDataList) => {
  const {items} = props;
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CardComponent
          title={items.title}
          countView={items.count_view}
          imgUri={{
            uri: items.thumbnail
              ? items.thumbnail
              : 'https://tuhoclaptrinh.edu.vn/upload/post/16/36/68/05-trang-web-tu-hoc-lap-trinh-mien-phi-216990.jpg',
          }}
          timeCreated={items.datetime}
          onPress={() => navigation.navigate(screenName.DETAIL_SCREEN as never)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ListNewsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorGlobal.backgroundGlobal,
    paddingHorizontal: 10,
  },
});
