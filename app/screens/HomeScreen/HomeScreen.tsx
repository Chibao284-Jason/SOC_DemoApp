import * as React from 'react';
import {Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CardComponent from '@components/CardComponent/CardComponent';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <CardComponent
        imgUri={{
          uri: 'https://tuhoclaptrinh.edu.vn/upload/post/16/36/68/05-trang-web-tu-hoc-lap-trinh-mien-phi-216990.jpg',
        }}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
  },
});
