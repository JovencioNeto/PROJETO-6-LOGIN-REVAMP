import { Text, SafeAreaView, StyleSheet,Image, TextInput,Pressable, View} from 'react-native'
import {useState} from 'react'
import { router } from 'expo-router'


export default function App() {
  //1° requisito (atividade principal)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //3° requisito
  const [adminPassword, setAdminPassword] = useState("1234")

  //4° requisito
  const [userEmail,setUserEmail] = useState('jovencio.neto@aluno.ce.gov.br')
  const [userName,setUserName] = useState('Jovêncio Rodrigues Pereira Neto')
  const [userBirthday,setUserBirthday] = useState('07/04')
  const [userPassword, setUserPassword] = useState('12345')
  

  const handleLogin = () => {
    if (email === "admin@admin.com" && password === adminPassword) {
      alert("Login successful")
      setEmail("")
      setPassword("")
    }else if(email === userEmail && password === userPassword){
      alert(`Bem vindo magnata ${userName.split(' ')[0]}`)
      setEmail("")
      setPassword("")
      router.replace({
        pathname: '/component/User',
        params: {
          userEmail,
          userBirthday,
          userName
        }})     
    } else {
      alert("Login failed")
      setEmail("")
      setPassword("")
    }
  }

  const forgottenPassword = () =>{
    router.replace('/component/ResetPassword')
  }

  const changePassword = (newPassword : string) =>{
    setAdminPassword(newPassword)
  }

  const changeAccount = ()=>{
    router.replace('/component/ResetAccount')
  }
  
  const changeDates = (name: string, password: string, birthday: string,email: string)=>{
    setUserBirthday(birthday)
    setUserEmail(email)
    setUserPassword(password)
    setUserName(name)
  }

  return (
    <SafeAreaView >
        <View style={styles.container}>
          <Image style={styles.image} source={require("../assets/image.png")}/>
          <Text style={styles.title}>Sistema de Login</Text>
          <Text style={styles.subtitle}>Bem vindo(a)! Digite seus dados abaixo.</Text>
          <View>

          </View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder={"Digite seu email"}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder={"*****************"}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            />
          <Pressable style={styles.forgottenPassword} onPress={forgottenPassword}>Esqueci minha senha</Pressable>
          <Pressable style={styles.login} onPress={handleLogin} ><Text style={styles.textLogin} >Entrar</Text></Pressable>
          <Text style={styles.footer} >Não tem uma conta?<Pressable onPress={changeAccount}><Text style={styles.register}>Cadastre-se</Text></Pressable></Text>
          <Text style={styles.creator}>Criado por Jovêncio Sigma da Bahia</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    alignSelf:'center',
    marginTop:50,
    },
  image:{
    width: 160,
    height: 160,
    marginTop: 20
  },
  title:{
    fontWeight:'bold',
    fontSize: 25,
    marginVertical: 5,
  },
  subtitle:{
    color: '#999',
    fontSize: 15,
    fontWeight: 400,
  },
  label:{
    alignSelf: 'flex-start',
    color: '#777',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    marginLeft: '10%'
  },
  input:{
    borderRadius: 5,
    borderColor: '#777',
    width: '80%',
    height: '7%',
    color:'#999',
    borderWidth: 2,
    padding:7,
  },
  forgottenPassword:{
    color:'#4162b7',
    fontSize: 15,
    fontWeight:'bold',
    alignSelf: 'flex-end',
    marginVertical: 20,
    marginRight: '10%'
  },
  login:{
    backgroundColor:'#4162b7',
    width: '80%',
    padding: 10,
    borderRadius: 5,
  },
  textLogin:{
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
  footer:{
    color:'#777',
    fontWeight: 'bold',
    marginVertical:20
  },
  register:{
    color:'#4162b7',
  },
  creator:{
    fontSize:11,
    color:'#777'
  }
})