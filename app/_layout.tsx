import { Stack } from 'expo-router'

export default function RootLayout () {
  return (
    <Stack >
        <Stack.Screen name="index"  options={{title: 'Login'}} />
        <Stack.Screen name="component/User" options={{ title: 'Usuário' }} />
        <Stack.Screen name="component/ResetPassword" options={{ title: 'Redefinir Senha'}} />
        <Stack.Screen name="component/ResetAccount" options={{ title: 'Criar Conta' }} />
    </Stack>
  )
}