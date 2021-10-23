import React from 'react'
import { StyleSheet, View } from 'react-native'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

import { Cart, Home } from '.'
import { colors } from '../utils'

const Tab = createMaterialBottomTabNavigator()

const Main = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        barStyle={styles.barStyle}
        labeled={false}
        initialRouteName="Cart"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused = true }) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={focused ? colors.accent : colors.primary_dark}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Record"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                style={{
                  transform: [{ translateY: '-35%' }],
                  padding: '0.3em',
                  backgroundColor: focused
                    ? colors.accent
                    : colors.primary_dark,
                  borderRadius: 20,
                }}
                name="mic-outline"
                color={'white'}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                onPress={() => {
                  setIsCartScreen(!isCartScreen)
                }}
                name="shopping-outline"
                size={26}
                color={focused ? colors.accent : colors.primary_dark}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  barStyle: {
    backgroundColor: colors.primary_light,
    overflow: 'visible',
    position: 'relative',
    // zIndex: 2,
  },
})
