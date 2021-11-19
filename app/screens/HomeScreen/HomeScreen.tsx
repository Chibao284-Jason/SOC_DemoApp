import * as React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CardComponent from '@components/CardComponent/CardComponent';
import {screenName} from '@navigation/screenName';
import {colorGlobal} from '@config/colorGlobal';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <CardComponent
          imgUri={{
            uri: 'https://tuhoclaptrinh.edu.vn/upload/post/16/36/68/05-trang-web-tu-hoc-lap-trinh-mien-phi-216990.jpg',
          }}
          onPress={() => navigation.navigate(screenName.DETAIL_SCREEN as never)}
        />
        <CardComponent
          imgUri={{
            uri: 'https://tuhoclaptrinh.edu.vn/upload/post/16/36/68/05-trang-web-tu-hoc-lap-trinh-mien-phi-216990.jpg',
          }}
          onPress={() => navigation.navigate(screenName.DETAIL_SCREEN as never)}
        />
        <CardComponent
          imgUri={{
            uri: 'https://tuhoclaptrinh.edu.vn/upload/post/16/36/68/05-trang-web-tu-hoc-lap-trinh-mien-phi-216990.jpg',
          }}
          onPress={() => navigation.navigate(screenName.DETAIL_SCREEN as never)}
        />
        <CardComponent
          imgUri={{
            uri: 'https://tuhoclaptrinh.edu.vn/upload/post/16/36/68/05-trang-web-tu-hoc-lap-trinh-mien-phi-216990.jpg',
          }}
          onPress={() => navigation.navigate(screenName.DETAIL_SCREEN as never)}
        />
        <CardComponent
          imgUri={{
            uri: 'https://tuhoclaptrinh.edu.vn/upload/post/16/36/68/05-trang-web-tu-hoc-lap-trinh-mien-phi-216990.jpg',
          }}
          onPress={() => navigation.navigate(screenName.DETAIL_SCREEN as never)}
        />
        <CardComponent
          imgUri={{
            uri: 'https://tuhoclaptrinh.edu.vn/upload/post/16/36/68/05-trang-web-tu-hoc-lap-trinh-mien-phi-216990.jpg',
          }}
          onPress={() => navigation.navigate(screenName.DETAIL_SCREEN as never)}
        />
        <CardComponent
          imgUri={{
            uri: 'https://tuhoclaptrinh.edu.vn/upload/post/16/36/68/05-trang-web-tu-hoc-lap-trinh-mien-phi-216990.jpg',
          }}
          onPress={() => navigation.navigate(screenName.DETAIL_SCREEN as never)}
        />
        <CardComponent
          imgUri={{
            uri: 'https://tuhoclaptrinh.edu.vn/upload/post/16/36/68/05-trang-web-tu-hoc-lap-trinh-mien-phi-216990.jpg',
          }}
          onPress={() => navigation.navigate(screenName.DETAIL_SCREEN as never)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorGlobal.backgroundGlobal,
    paddingHorizontal: 10,
  },
});
