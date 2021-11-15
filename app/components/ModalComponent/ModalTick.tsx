import * as React from 'react';
import {Text, View, StyleSheet, Image, ImageSourcePropType} from 'react-native';

interface ModalTickProps {
  title?: string;
  image?: ImageSourcePropType;
}

const ModalTick = (props: ModalTickProps) => {
  const {title, image} = props;
  return (
    <View style={styles.container}>
      <View style={styles.viewLabel}>
        <Image
          source={
            image
              ? image
              : {
                  uri: 'https://cdn.iconscout.com/icon/free/png-512/save-3244517-2701888.png',
                }
          }
          style={styles.imgIcon}
        />
        <View style={styles.title}>
          <Text>{title ? title : 'Title'}</Text>
        </View>
      </View>
      <View style={styles.title}>
        <Text>Chia sẻ</Text>
      </View>
    </View>
  );
};

export default ModalTick;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewLabel: {
    flexDirection: 'row',
  },
  imgIcon: {
    width: 15,
    height: 20,
  },
  title: {
    marginLeft: 10,
  },
});
