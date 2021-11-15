import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
interface ModalThemeProps {
  title?: string;
  image?: ImageSourcePropType;
  selected?: boolean;
}

const ModalTheme = (props: ModalThemeProps) => {
  const {title, image, selected} = props;
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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ScrollView
          contentContainerStyle={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 15,
          }}
          horizontal={true}>
          {true ? (
            <View style={styles.check}>
              <View style={styles.viewDotColor} />
            </View>
          ) : (
            <View style={styles.unCheck}>
              <View style={styles.viewDotColor} />
            </View>
          )}
          <View style={styles.unCheck}>
            <View style={styles.viewDotColor} />
          </View>
          <View style={styles.unCheck}>
            <View style={styles.viewDotColor} />
          </View>
          <View style={styles.unCheck}>
            <View style={styles.viewDotColor} />
          </View>
        </ScrollView>
        <Image
          source={{
            uri: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png',
          }}
          style={styles.imgArrow}
        />
      </View>
    </View>
  );
};

export default ModalTheme;

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
  viewDotColor: {
    backgroundColor: 'red',
    width: 15,
    height: 15,
    borderRadius: 10,
  },
  check: {
    borderRadius: 20,
    borderWidth: 2,
    padding: 2,
    marginLeft: 20,
  },
  unCheck: {
    marginLeft: 20,
  },
  imgArrow: {width: 20, height: 25},
});
