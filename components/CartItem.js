import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { colors } from '../utils'

const CartItem = ({
  isFavourite = false,
  name = 'Bike',
  price = '12, 000',
  imageSrc = 'https://www.pngmart.com/files/6/Bicycle-Transparent-PNG.png',
}) => {
  return (
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
        color={isFavourite ? colors.accent : colors.primary_dark}
      />
      <View style={{}}>
        <Image
          style={{
            width: 120,
            height: 120,
            display: 'block',
          }}
          resizeMode="cover"
          source={{
            uri: imageSrc,
          }}
        />
        <Text
          style={{ color: colors.neutral, fontWeight: '800', fontSize: 18 }}
        >
          {name}
        </Text>
        <Text style={{ color: colors.accent, fontSize: 20, fontWeight: '700' }}>
          $ <Text style={{ color: colors.primary_dark }}>{price}</Text>
        </Text>
      </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  cart_item: {
    maxWidth: '45%',
    backgroundColor: colors.primary_light,
    padding: '1em',

    marginLeft: 10,
    marginTop: 10,
    borderRadius: 25,

    textAlign: 'cemter',

    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})
