import * as React from 'react';
import {Text, View, Image, ImageSourcePropType, ScrollView} from 'react-native';
import {styles} from './styles';
interface ModalThemeProps {
  title?: string;
  image?: ImageSourcePropType;
  selected?: boolean;
}

const ModalTheme = (props: ModalThemeProps) => {
  const {title, image, selected} = props;
  return (
    <View style={styles.containerTheme}>
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
          <Text style={styles.titleStyles}>{title ? title : 'Title'}</Text>
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
