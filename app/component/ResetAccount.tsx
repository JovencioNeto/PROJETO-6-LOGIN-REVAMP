import { router } from 'expo-router'
import { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

export default function ResetAccount({ changeDates }) {
  const [newPassword, setNewPassword] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newName, setNewName] = useState('')
  const [newBirthday, setNewBirthday] = useState('')

    function handleLogout(){
      router.replace('/')
    }
  const handleSaveChanges = () => {
    if (!newName || !newPassword || !newBirthday || !newEmail) {
      alert('Por favor, preencha todos os campos.')
    }else{
      changeDates(newName, newPassword, newBirthday, newEmail)
      handleLogout()
      alert('Dados atualizados!')
    }   
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redefinir Dados de Usuário</Text>

      <Text style={styles.label}>Nova Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite a nova senha"
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <Text style={styles.label}>Novo Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o novo Email"
        value={newEmail}
        onChangeText={setNewEmail}
      />
      <Text style={styles.label}>Nova Data de Aniversário</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a nova Data de Aniversário"
        value={newBirthday}
        onChangeText={setNewBirthday}
      />
      <Text style={styles.label}>Novo Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o novo Nome"
        value={newName}
        onChangeText={setNewName}
      />

      <Pressable style={styles.button} onPress={handleSaveChanges}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
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
    padding: 15,
    backgroundColor: '#f5f5f5',
    alignSelf:'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
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
