import * as React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {AntDesign, MaterialCommunityIcons} from 'react-native-vector-icons';

const colors = {
  themeColor: '#4263ec',
  white: '#fff',
  background: '#f4f6fc',
  greyish: '#a4a4a4',
  tint: '#2b49c3',
};

export default function Task(props) {
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: colors.themeColor}}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={colors.themeColor}
        />
        <View style={{backgroundColor: colors.themeColor}}>
          <View
            style={{
              padding: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <MaterialCommunityIcons
              name="text"
              size={30}
              style={{colors: colors.white}}
            />
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="bel-outline"
                size={30}
                style={{colors: colors.white}}
              />
              <AntDesign name="user" size={30} style={{colors: colors.white}} />
            </View>
          </View>
          <View></View>
        </View>
      </View>
    </ScrollView>
  );
}
