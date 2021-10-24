import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { colors } from '../utils'

const CheckoutItem = ({ name, category, price, imageSrc }) => {
  return (
    <View style={styles.container}>
      {/* left image  */}
      <View
        style={{
          width: 80,
          height: 80,
          padding: '1.0em',
          backgroundColor: colors.primary_light,
          borderRadius: 10,
        }}
      >
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          source={{
            uri:
              imageSrc ??
              'https://www.pngmart.com/files/6/Bicycle-Transparent-PNG.png',
          }}
        />
      </View>

      {/* rest of the text */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between ',
          alignItems: 'center',
          flexGrow: 1,
          maxWidth: '90%',
        }}
      >
        {/* Product details text */}
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              fontWeight: 500,
              fontSize: 20,
              color: colors.primary_dark,
              marginBottom: 5,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontWeight: 500,
              fontSize: 18,
              color: colors.primary_light,
            }}
          >
            {category}
          </Text>
          <Text style={{ fontWeight: 600, fontSize: 22, color: colors.accent }}>
            $ <Text style={{ color: colors.primary_dark }}>{price}</Text>
          </Text>
        </View>

        {/* right */}
        {/* add/ remove from cart text */}
        <View style={{ maxWidth: '28%', flexGrow: 1 }}>
          <FontAwesome
            style={{
              alignSelf: 'flex-end',
              backgroundColor: colors.primary_light,
              padding: '0.2em',
              borderRadius: 100,
            }}
            name="trash-o"
            size={22}
            color={colors.accent}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              paddingVertical: '1em',
            }}
          >
            <AntDesign name="minuscircle" size={24} color="black" />
            <Text>1</Text>
            <AntDesign name="pluscircle" size={24} color={colors.accent} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default CheckoutItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
})
