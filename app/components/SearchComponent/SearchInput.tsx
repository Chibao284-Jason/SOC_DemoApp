import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

interface ISearchInputProps {
  label: string;
  placeholder: string;
}

const SearchInput = (props: ISearchInputProps) => {
  const {label, placeholder} = props;
  return (
    <View style={styles.container}>
      <View style={styles.viewLabel}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput placeholder={placeholder} style={styles.label} />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {marginTop: 20},
  searchContainer: {
    height: 50,
    backgroundColor: '#E9EBF2',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#99A0B0',
    padding: 5,
  },
  viewLabel: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    width: '100%',
  },
});
