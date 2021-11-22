import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

interface IDatePickerComponentProps {}
import moment from 'moment';
import 'moment/locale/vi';
import {colorGlobal} from '@config/colorGlobal';
moment.locale('vi');
const DatePickerComponent = (props: IDatePickerComponentProps) => {
  // const [date, setDate] = useState(new Date());
  // return (
  //   <DatePicker date={date} maximumDate={new Date()} onDateChange={setDate} />
  // );

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.viewLabel}>
        <Text style={styles.label}>Ngày đăng</Text>
      </View>
      <TouchableOpacity
        style={styles.searchContainer}
        onPress={() => setOpen(true)}>
        <View>
          <Text style={styles.label}>{moment(date).format('L')}</Text>
        </View>
      </TouchableOpacity>
      <DatePicker
        modal
        mode={'date'}
        open={open}
        date={date}
        maximumDate={new Date()}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default DatePickerComponent;

const styles = StyleSheet.create({
  container: {marginTop: 20},
  searchContainer: {
    height: 50,
    backgroundColor: colorGlobal.textInputBg,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colorGlobal.textInputBorder,
    padding: 5,
  },
  viewLabel: {
    marginBottom: 10,
  },
  label: {fontSize: 18},
});
