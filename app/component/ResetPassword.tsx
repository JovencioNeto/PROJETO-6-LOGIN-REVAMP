import { router } from 'expo-router'
import { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

type ResetPasswordProps = {
  changePassword: (newPassword: string) => void
}

export default function ResetPassword({ changePassword }: ResetPasswordProps) {
  const [newPassword, setNewPassword] = useState('')

  function handleLogout() {
    router.replace('/')
  }

  const handleResetPassword = () => {
    if (newPassword) {
      changePassword(newPassword)
      alert('Senha redefinida com sucesso!')
      handleLogout()
    } else {
      alert('Por favor, digite a nova senha.')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redefinir Senha</Text>

      <Text style={styles.label}>Nova Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite a nova senha"
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <Pressable style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Redefinir Senha</Text>
      </Pressable>
      <Pressable style={styles.buttonSecondary} onPress={handleLogout}>
        <Text style={styles.buttonSecondaryText}>Voltar</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignSelf:'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    backgroundColor: '#4162b7',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    borderColor: '#777',
    borderWidth: 1,
  },
  buttonSecondaryText: {
    color: '#777',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
