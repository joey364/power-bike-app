import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import { CartItem } from '.'

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
    <View style={styles.container}>
      <View style={styles.container_contents}>
        <Text
          style={{
            fontWeight: '900',
            color: '#e9e8ed',
            fontSize: 18,
            marginBottom: 10,
          }}
        >
          The world's <Text style={{ color: '#dc3c11' }}>Best Bike</Text>
        </Text>
        <Text style={{ color: '#151110', fontWeight: 'bold', fontSize: 20 }}>
          Categories
        </Text>

        {/* Cateries List Selector */}
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
                    color: '#a4a3a3',
                    fontSize: 20,
                    fontWeight: '600',
                    padding: '0.55em',
                    backgroundColor: '#e9e8ed',
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
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginVertical: 20,
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
