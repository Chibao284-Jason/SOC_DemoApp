import {colorGlobal} from '@config/colorGlobal';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';

interface ISearchInputProps {
  label: string;
  placeholder: string;
}

const SearchInput = (props: ISearchInputProps) => {
  const {label, placeholder} = props;
  return (
    <View style={styles.containerInput}>
      <View style={styles.viewLabelInput}>
        <Text style={styles.labelInput}>{label}</Text>
      </View>
      <View style={styles.searchInputContainer}>
        <TextInput placeholder={placeholder} style={styles.labelInput} />
      </View>
    </View>
  );
};

export default SearchInput;
