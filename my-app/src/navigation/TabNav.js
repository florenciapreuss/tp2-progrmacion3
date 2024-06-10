import { Text, View } from 'react-native'
import React, { Component } from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons';

import Home from '../screens/Home'
import NewPost from '../screens/NewPost'
import MyProfile from '../screens/MyProfile'
import FriendProfile from '../screens/FriendProfile'


const Tab = createBottomTabNavigator()

export default class TabNav extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen 
        name='home' 
        component={Home}
        options={{
          headerShown:false
        }}
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
        <Tab.Screen 
        name='friend-profile' 
        component={FriendProfile}
        options={{
          headerShown:false
        }}
        />
      </Tab.Navigator>
    )
  }
}