import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import { CartItem, HomeHeader } from '.'
import { colors } from '../utils'

const bikeCategories = [
  'All',
  'RoadBike',
  'Mountain',
  'Urban',
  'Hybrid',
  'Cyclocross',
]

const HomeContents = () => {
  return (
    <>
      <HomeHeader />
      <View style={styles.container}>
        <View style={styles.container_contents}>
          <Text
            style={{
              fontWeight: '900',
              color: colors.primary_light,
              fontSize: 18,
              marginBottom: 10,
            }}
          >
            The world's <Text style={{ color: colors.accent }}>Best Bike</Text>
          </Text>
          <Text
            style={{
              color: colors.primary_dark,
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            Categories
          </Text>

          {/* Categories List Selector */}
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            style={{ margin: 10 }}
          >
            {bikeCategories.map((category, idx) => {
              return (
                <TouchableOpacity key={idx} activeOpacity={0.75}>
                  <Text
                    style={{
                      color: colors.neutral,
                      fontSize: 20,
                      fontWeight: '600',
                      padding: '0.55em',
                      backgroundColor: colors.primary_light,
                      marginRight: 10,
                      borderRadius: 17,
                    }}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              )
            })}
          </ScrollView>

          {/* Cart Item list */}
          <ScrollView
            style={{}}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            contentContainerStyle={{
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <CartItem
              isFavourite
              name="Brompton Bike*"
              price="1,250.00"
              imageSrc="https://www.pngmart.com/files/6/Bicycle-Transparent-PNG.png"
            />

            <CartItem
              name="Mountain Bike"
              price="1,383.00"
              imageSrc="https://www.pngmart.com/files/6/Bicycle-Transparent-Background.png"
            />

            <CartItem
              name="Mountain Bike"
              price="1,383.00"
              imageSrc="https://www.pngmart.com/files/6/Bicycle-Transparent-Background.png"
            />

            <CartItem
              name="Mountain Bike"
              price="1,383.00"
              imageSrc="https://www.pngmart.com/files/6/Bicycle-Transparent-Background.png"
            />

            <CartItem
              name="Mountain Bike"
              price="1,383.00"
              imageSrc="https://www.pngmart.com/files/6/Bicycle-Transparent-Background.png"
            />

            <CartItem
              name="Mountain Bike"
              price="1,383.00"
              imageSrc="https://www.pngmart.com/files/6/Bicycle-Transparent-Background.png"
            />
          </ScrollView>
        </View>
      </View>
    </>
  )
}

export default HomeContents

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },

  container_contents: {
    width: '95%',
    marginVertical: 0,
    marginHorizontal: 'auto',
    padding: '1em',
  },
})
