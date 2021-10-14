import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          resizeMode: 'cover',
          width: 200,
          height: 200,
          borderRadius: 30,
          transform: [{ rotate: '-45deg' }],
        }}
        source={{
          uri: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
        }}
      />
      <View
        style={{
          marginTop: 40,
        }}
      >
        <Text style={{ fontWeight: 'normal', fontSize: 20, marginBottom: 10 }}>
          Welcome to
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            fontFamily: 'sans-serif',
            marginBottom: 10,
          }}
        >
          Power Bike Shop
        </Text>

        <TouchableOpacity
          style={[
            styles.button_base,
            {
              backgroundColor: '#e9e8ed',
            },
          ]}
          onPress={() => {
            navigation.navigate('Main')
          }}
        >
          <FontAwesome name="google" size={24} color="black" />
          <Text style={{ color: '#151110', fontSize: 16, marginLeft: 20 }}>
            Login with Gmail
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button_base,
            {
              backgroundColor: '#151110',
            },
          ]}
          onPress={() => {
            navigation.navigate('Main')
          }}
        >
          <FontAwesome name="apple" size={24} color="white" />
          <Text style={{ color: '#e9e8ed', fontSize: 16, marginLeft: 20 }}>
            Login with Apple
          </Text>
        </TouchableOpacity>

        <Text style={[styles.button_text, { color: '#6f7f88' }]}>
          Not a memeber?{' '}
          <Text style={{ color: '#dc3c11', fontSize: 16 }}>Sign up</Text>
        </Text>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '0',
    marginVertical: 0,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  button_base: {
    paddingVertical: '0.75em',
    paddingHorizontal: '3em',
    borderRadius: 15,
    marginBottom: 10,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    fontSize: 16,
    fontWeight: '600',
  },
})
