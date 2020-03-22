/**
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 44,
    width: 160,
    marginBottom: 8,
    marginTop: 8,
    backgroundColor: 'lightblue',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  touchable: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    lineHeight: 44,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const Button = (props) => {
  const { title, onPress } = props;
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.touchable} >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

function ModalScreen(props: Object) {
  const { navigation } = props;
  return (
    <View style={styles.modal}>
      <Text>Modal One</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

function HomeScreen(props: Object) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>Can't spell awesome without me</Text>
      <Button title={'Home'} onPress={() => navigation.navigate('Home')} />
      <Button title={'Details'} onPress={() => navigation.navigate('Details')} />
      <Button title={'Settings'} onPress={() => navigation.navigate('Settings')} />
      <Button onPress={() => navigation.navigate('MyModal')} title="Open Modal" />
    </View>
  );
}

function SettingScreen(props: Object) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>Change your world</Text>
      <Button title={'Home'} onPress={() => navigation.navigate('Home')} />
      <Button title={'Details'} onPress={() => navigation.navigate('Details')} />
      <Button title={'Settings'} onPress={() => navigation.navigate('Settings')} />
      <Button onPress={() => navigation.navigate('MyModal')} title="Open Modal" />
    </View>
  );
}

function DetailScreen(props: Object) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>Deets</Text>
      <Button title={'Home'} onPress={() => navigation.navigate('Home')} />
      <Button title={'Details'} onPress={() => navigation.navigate('Details')} />
      <Button title={'Settings'} onPress={() => navigation.navigate('Settings')} />
      <Button onPress={() => navigation.navigate('MyModal')} title="Open Modal" />
    </View>
  );
}

/**
 * Stacks
 */
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator initialRouteName={'Home'} headerMode={'screen'}>
      <MainStack.Screen name={'Home'} component={HomeScreen} options={{ title: 'Dashboard' }}/>
      <MainStack.Screen name={'Details'} component={DetailScreen} />
      <MainStack.Screen name={'Settings'} component={SettingScreen} />
    </MainStack.Navigator>
  );
};

const RootStackScreen = () => {
  return (
    <RootStack.Navigator mode={'modal'}>
      <RootStack.Screen
        name={'Main'}
        component={MainStackScreen}
        options={{ headerShown: false }}
        />
      <RootStack.Screen name={'MyModal'} component={ModalScreen} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
};

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
