import React from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  icon,
  ...rest
}) => {
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
        // numberOfLines={1}
        // placeholderTextColor="#666"
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        {...rest}
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
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});
export default CustomInput;
