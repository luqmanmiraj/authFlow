import React, { useContext } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth'
import { AuthContext } from '../navigation/AuthNavigator'

export default function Home() {
  const user = useContext(AuthContext)

  async function logOut() {
    try {
      await auth().signOut()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {user.uid}!</Text>
      <TouchableOpacity style={styles.button} onPress={logOut}>
        <Text style={styles.buttonText}>Sign out 🤷</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe2ff'
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 14,
    fontWeight: '400',
    color: '#7f78d2'
  },
  button: {
    flexDirection: 'column',
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    width: 140,
    height: 30,
    justifyContent: 'left',
    alignItems: 'center',
    backgroundColor: '#481380'
  },
  buttonText: {
    color: '#ffe2ff',
    fontSize: 23,
    marginRight: 5
  }
})

