import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface ISearchShortcutProps {
  hotKey?: string;
}

const SearchShortcut = (props: ISearchShortcutProps) => {
  const {hotKey} = props;
  return (
    <View style={styles.containerShortcut}>
      <View style={styles.viewLabelInput}>
        <Text style={styles.labelTrending}>TÌM NHANH</Text>
      </View>
      <View style={styles.searchInputContainer}>
        <TouchableOpacity style={styles.viewTrending}>
          <Text style={styles.textHotKey}>F1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewTrending}>
          <Text style={styles.textHotKey}>Vắc-xin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchShortcut;
