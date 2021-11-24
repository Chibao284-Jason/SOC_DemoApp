import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import ViewLineComponent from '@components/ViewLineComponent/ViewLineComponent';
import {styles} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {IListTabReducer} from '@store/reducers/listNewsReducer';
import {IChildren, IDataCategories} from '@models/interface';
import {Actions} from '@store/actions';
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
  const {onPress, data} = props;
  const {id, name, children} = data;
  const getData = item => {
    let paramsCatsSelectMenu = {
      filters: {News_Cat: item.parent},
      limit: '20',
      page: '1',
    };
    if (item.parent === 0) {
      paramsCatsSelectMenu = {
        filters: {News_Cat: item.id},
        limit: '20',
        page: '1',
      };
    }

    // console.log(i);
    dispatch(Actions.getCatsListNewsRequestActions(paramsCatsSelectMenu));
  };
  const onPressButtonMenu = i => {
    if (children === undefined) {
      getData(i);
    } else {
      setShowChildrenCategories(!showChildrenCategories);
    }
  };

  return (
    <View style={{marginHorizontal: 15}}>
      <View>
        <TouchableOpacity
          // onPress={() => setShowChildrenCategories(!showChildrenCategories)}
          onPress={i => onPressButtonMenu(data)}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.viewButton}>
            <Text style={styles.title}>{name}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {children !== undefined && (
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
            )}
          </View>
        </TouchableOpacity>
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
    <View style={styles.container}>
      {data.map((item: IDataCategories, index: number) => {
        return (
          <ButtonMenu
            key={item.id.toString()}
            data={item}
            onPress={i => {
              onPress(i);
            }}
          />
        );
      })}
    </View>
  );
};

export default MenuComponent;
