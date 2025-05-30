import { router, useLocalSearchParams } from 'expo-router'
import { Text, StyleSheet, Image, View } from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function User() {
  const { userEmail, userBirthday, userName } = useLocalSearchParams()
  const navigation = useNavigation()

  function onLogout(){
      router.replace('/')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onLogout} style={{ marginRight: 15 }}>
          <Ionicons name="log-out-outline" size={24} color="black" />
        </TouchableOpacity>
      )
    })
  }, [navigation])

  return (
    <View style={styles.center}>
      <Image source={require('../../assets/userSigma.jpeg')} style={styles.imageUser} />
      <Text style={styles.welcomeText}>Bem vindo {userName}</Text>
      <Text style={styles.userInfo}>Seu nome completo: {userName}</Text>
      <Text style={styles.userInfo}>Sua data de aniversário: {userBirthday}</Text>
      <Text style={styles.userInfo}>Seu email: {userEmail}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageUser: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 20,
    marginTop: 100
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center', 
  },
  goBack:{
    backgroundColor:'#4162b7',
    width: '30%',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  textGoBack:{
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
})