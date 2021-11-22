import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {screenName} from '@navigation/screenName';
import ViewLineComponent from '@components/ViewLineComponent/ViewLineComponent';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {IListTabReducer} from '@store/reducers/listNewsReducer';
import {IChildren, IDataCategories} from '@models/interface';
interface IMenuComponentProps {
  onPress: (i: string) => void;
}
interface IButtonMenuProps {
  onPress: (i: string) => void;
  data: IDataCategories;
}
interface IListCategories {
  listTabReducer: IListTabReducer;
}
const ButtonMenu = (props: IButtonMenuProps) => {
  const [showChildrenCategories, setShowChildrenCategories] = useState(false);

  const {onPress, data} = props;
  const {id, name, children} = data;
  return (
    // <TouchableOpacity style={styles.viewButton} onPress={() => onPress(title)}>
    //   <Text style={styles.title}>{title}</Text>
    //   <ViewLineComponent />
    // </TouchableOpacity>
    <View style={{marginHorizontal: 15}}>
      <View>
        <TouchableOpacity
          onPress={() => setShowChildrenCategories(!showChildrenCategories)}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => console.log('')}>
            <Text style={styles.title}>{name}</Text>
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {children !== undefined && (
              <Image
                source={{
                  uri:
                    // showChildrenCategories
                    //   ? 'https://d29fhpw069ctt2.cloudfront.net/icon/image/39094/preview.png'
                    // :
                    'https://icons.veryicon.com/png/o/internet--web/prejudice/down-arrow-5.png',
                }}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'cover',
                  transform: showChildrenCategories
                    ? [{rotateY: '180deg'}, {rotateZ: '180deg'}]
                    : [{rotateY: '0deg'}, {rotateZ: '0deg'}],
                }}
              />
            )}
          </View>
        </TouchableOpacity>
        {showChildrenCategories &&
          children !== undefined &&
          children.map((itemChildren: IChildren, index) => {
            return (
              <View>
                <ViewLineComponent />
                <TouchableOpacity
                  style={styles.viewButton}
                  onPress={() => console.log('')}>
                  <Text style={styles.title}>{itemChildren.name}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        <ViewLineComponent />
      </View>
    </View>
  );
};
// const data = [
//   {
//     id: 1,
//     name: screenName.FOLLOW_SCREEN,
//   },
//   {
//     id: 2,
//     name: screenName.HOT_SCREEN,
//   },
//   {
//     id: 3,
//     name: screenName.NEW_SCREEN,
//   },
//   {
//     id: 4,
//     name: screenName.SOCCER_SCREEN,
//   },
// ];
const MenuComponent = (props: IMenuComponentProps) => {
  const dataCategories = useSelector(
    (state: IListCategories) => state.listTabReducer.data,
  );
  const {data} = dataCategories;
  const navigation = useNavigation();
  const {onPress} = props;

  return (
    <View style={styles.container}>
      {data.map((item: IDataCategories, index: number) => {
        return <ButtonMenu data={item} onPress={i => onPress(i)} />;
      })}
    </View>
  );
};

export default MenuComponent;

// const styles = StyleSheet.create({
//   container: {},
//   viewButton: {marginHorizontal: 15, marginTop: 20},
//   line: {
//     width: '100%',
//     height: 1,
//     backgroundColor: colorGlobal.lineColor,
//     marginTop: 10,
//   },
//   title: {
//     fontSize: 18,
//   },
// });
