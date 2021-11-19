import {colorGlobal} from '@config/colorGlobal';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

interface ISearchComponentProps {}

const SearchComponent = (props: ISearchComponentProps) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput placeholder="Search" style={styles.input} />
      <TouchableOpacity>
        <Icon
          name="search"
          size={25}
          style={{marginLeft: 20}}
          tvParallaxProperties={undefined}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {},
  searchContainer: {
    height: 50,
    backgroundColor: colorGlobal.backgroundGlobal,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: colorGlobal.textInputBorder,
    padding: 5,
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: 'gray',
  },
});
