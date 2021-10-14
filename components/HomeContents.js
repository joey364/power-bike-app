import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import { AntDesign } from '@expo/vector-icons'

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
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <View style={styles.cart_item}>
            <AntDesign
              style={{
                padding: '0.2em',
                backgroundColor: 'white',
                borderRadius: 25,
                alignSelf: 'flex-end',
              }}
              name="hearto"
              size={20}
              color="#dc3c11"
            />
            <View style={{}}>
              <Image
                style={{
                  width: 120,
                  height: 120,
                  display: 'block',
                }}
                source={{
                  uri: 'https://www.pngmart.com/files/6/Bicycle-Transparent-PNG.png',
                }}
              />
              <Text
                style={{ color: '#a4a3a3', fontWeight: '800', fontSize: 18 }}
              >
                Brompton Bike*
              </Text>
              <Text
                style={{ color: '#dc3c11', fontSize: 20, fontWeight: '700' }}
              >
                $ <Text style={{ color: '#151110' }}>1,250.00</Text>
              </Text>
            </View>
          </View>
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

  cart_item: {
    maxWidth: '45%',
    backgroundColor: '#e9e8ed',
    padding: '1em',
    margin: 10,
    borderRadius: 25,

    textAlign: 'cemter',

    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})
