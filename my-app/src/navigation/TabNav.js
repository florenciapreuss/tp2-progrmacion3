import { Text, View } from 'react-native'
import React, { Component } from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'; //para ponerles alguna fotito

import StackHome from './StackHome';
import NewPost from '../screens/NewPost'
import MyProfile from '../screens/MyProfile'


const Tab = createBottomTabNavigator()

export default class TabNav extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Stack.Screen
            options={{
                headerShown:false
            }} 
            name='stackhome' component={StackHome} 
        />
        <Tab.Screen 
        name='new-post' 
        component={NewPost}
        options={{
          headerShown:false
        }}
        />
        <Tab.Screen 
        name='my-profile' 
        component={MyProfile}
        options={{
          headerShown:false
        }}
        />
      </Tab.Navigator>
    )
  }
}