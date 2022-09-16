import React from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomInput = ({value, setValue, placeholder, secureTextEntry, icon}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={{marginRight: 5}}
          name={icon}
          size={20}
        />
      )}

      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    borderColor: ' #e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});
export default CustomInput;
