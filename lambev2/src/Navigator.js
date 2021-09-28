import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';

// const authRouter = createNativeStackNavigator({
//   Login: { screen: Login, navigationOptions: { title: 'Login'}},
//   Register: { screen: Register, navigationOptions: { title: 'Register'}}
// }, {
//   initialRouteName: 'Login'
// })

// const loginOrProfileRouter = createNativeStackNavigator({
//   Profile: Home,
//   Auth: authRouter
// }, {
//   initialRouteName: 'Home'
// })

const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator();

function HomeLoggedIn() {
  return (
          <Tab.Navigator 
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color }) => {
                let iconName = null

                if (route.name === 'Feed') {
                  iconName = "home"
                } else if (route.name === 'AddPhoto') {
                  iconName = "camera"
                } else if (route.name === 'Profile') {
                    iconName = "user"
                }

                return <Icon name={iconName} size={30} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >        
            <Tab.Screen name="Feed" component={Feed} options={{ tabBarBadge: 12, tabBarShowLabel: false, headerShown: false }} />
            <Tab.Screen name="AddPhoto" component={AddPhoto} options={{ tabBarShowLabel: false, headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarShowLabel: false, headerShown: false }} />
          </Tab.Navigator>
  )
}

export default function App() {
  return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="HomeLoggedIn" component={HomeLoggedIn} options={{ headerShown: false }}/>
              <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
              <Stack.Screen name="Register" component={Register} options={{ headerShown: true }} />
            </Stack.Navigator>
        </NavigationContainer>
  )
}


