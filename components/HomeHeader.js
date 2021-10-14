import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons'

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_contents}>
        {/* left */}
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={24} color="black" />
        </TouchableOpacity>
        {/* middle */}
        <TouchableOpacity>
          <FontAwesome name="bicycle" size={24} color="black" />
        </TouchableOpacity>
        {/* right */}
        <View>
          <TouchableOpacity style={styles.header_right}>
            <Feather name="search" size={24} color="black" />
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  container_contents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginHorizontal: 'auto',
    marginVertical: 0,
    padding: '1em',
  },

  header_right: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})
