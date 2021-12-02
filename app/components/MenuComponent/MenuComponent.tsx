import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import ViewLineComponent from '@components/ViewLineComponent/ViewLineComponent';
import {styles} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {IChildren, IDataCategories} from '@models/interface';
import {Actions} from '@store/actions';
import {useNavigation} from '@react-navigation/native';
import {IListTabReducer} from '@store/reducers/listTabReducer';
import {colorGlobal} from '@config/colorGlobal';
import {screenName} from '@navigation/screenName';

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
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {onPress, data} = props;
  const {id, name, children} = data;
  const getData = (item: IChildren) => {
    let idCatsMenu = item.id;
    if (item.id === 10000) {
      idCatsMenu = 0;
    }
    let paramsCatsSelectMenu = {
      filters: {News_Cat: idCatsMenu},
      limit: '20',
      page: '1',
    };

    dispatch(Actions.getCatsListNewsRequestActions(paramsCatsSelectMenu));
    navigation.navigate(
      screenName.HOME_SCREEN as never,
      paramsCatsSelectMenu as never,
    );
  };
  const onPressButtonMenu = (i: IChildren) => {
    if (children === undefined) {
      getData(i);
    } else {
      setShowChildrenCategories(!showChildrenCategories);
    }
  };

  return (
    <View
      style={{
        marginHorizontal: 15,
        backgroundColor: colorGlobal.backgroundGlobal,
      }}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => getData(data)}
            style={styles.viewButton}>
            <Text style={styles.title}>{name}</Text>
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {children !== undefined && (
              <TouchableOpacity onPress={i => onPressButtonMenu(data)}>
                <Image
                  source={{
                    uri: 'https://icons.veryicon.com/png/o/internet--web/prejudice/down-arrow-5.png',
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
              </TouchableOpacity>
            )}
          </View>
        </View>
        {showChildrenCategories &&
          children !== undefined &&
          children.map((itemChildren: IChildren, index) => {
            return (
              <View key={`${itemChildren.id}`}>
                <ViewLineComponent />
                <TouchableOpacity
                  style={styles.viewButton}
                  onPress={() => getData(itemChildren)}>
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

const MenuComponent = (props: IMenuComponentProps) => {
  const dataCategories = useSelector(
    (state: IListCategories) => state.listTabReducer.data,
  );
  const {data} = dataCategories;
  const {onPress} = props;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {data.map((item: IDataCategories, index: number) => {
        return (
          <ButtonMenu key={item.id.toString()} data={item} onPress={onPress} />
        );
      })}
    </ScrollView>
  );
};

export default MenuComponent;
