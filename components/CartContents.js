import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { CartHeader, CheckoutItem } from '.'
import { colors } from '../utils'

const CartContents = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CartHeader navigation={navigation} />
      <View style={styles.container_contents}>
        <CheckoutItem name={'PoloG Bike'} category={'BMX'} price={'1,700.00'} />
        <CheckoutItem name={'PoloG Bike'} category={'BMX'} price={'1,700.00'} />
        <CheckoutItem name={'PoloG Bike'} category={'BMX'} price={'1,700.00'} />
      </View>

      {/* SubTotal */}
      <View
        style={{
          backgroundColor: colors.primary_light,
          width: '90%',
          borderRadius: 15,
          padding: '1em',
          marginHorizontal: 'auto',
          marginBottom: 20,
        }}
      >
        <View style={styles.checkoutPriceContainer}>
          <Text style={styles.priceHeadingText}>SubTotal</Text>
          <Text style={styles.priceText}>
            $ <Text style={{ color: colors.primary_dark }}>3,400.00</Text>{' '}
          </Text>
        </View>
        <View style={styles.checkoutPriceContainer}>
          <Text style={styles.priceHeadingText}>Shopping fee</Text>
          <Text style={styles.priceText}>
            $ <Text style={{ color: colors.primary_dark }}>100.00</Text>
          </Text>
        </View>

        {/* divider */}
        <View
          style={{
            width: '95%',
            height: 2,
            marginHorizontal: 'auto',
            marginVertical: 10,
            backgroundColor: colors.neutral,
          }}
        />

        <View style={styles.checkoutPriceContainer}>
          <Text
            style={[styles.priceHeadingText, { color: colors.primary_dark }]}
          >
            Total
          </Text>
          <Text style={styles.priceText}>
            $ <Text style={{ color: colors.primary_dark }}>3,500.00</Text>{' '}
          </Text>
        </View>
      </View>

      {/* Checkout Button */}
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: colors.accent,
            maxWidth: '80%',
            borderRadius: 15,
            padding: '1em',
            marginHorizontal: 'auto',
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              color: colors.primary_light,
              fontWeight: '700',
            }}
          >
            Proceed to Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartContents

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
  priceHeadingText: {
    color: colors.neutral,
    fontWeight: '800',
    fontSize: 16,
  },
  priceText: {
    fontWeight: 'bold',
    color: colors.accent,
    fontSize: 20,
    margin: 10,
  },

  checkoutPriceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
