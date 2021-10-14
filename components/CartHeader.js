import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const HomeHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_contents}>
        {/* left */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home')
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        {/* middle */}
        <TouchableOpacity style={styles.header_middle}>
          <View>
            <Text style={{ fontWeight: '700', color: '#151110', fontSize: 18 }}>
              Cart list
            </Text>
            <Text
              styles={{ fontWeight: '400', color: '#e9e8ed', fontSize: 18 }}
            >
              {'(3 items)'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  container_contents: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '95%',
    marginHorizontal: 'auto',
    marginVertical: 0,
    padding: '1em',
  },

  header_middle: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'center',
  },
})

export default HomeHeader
