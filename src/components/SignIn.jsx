import s from "../styles/st-signIn"
import { useState } from "react"
import { View, Image, Text, KeyboardAvoidingView, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { firebaseApp } from '../credentials'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { messagePass, fail, messageFail, pass } from "../test/log.test"
import clc from 'cli-color'

export function SingIn({ setIsRegistering }) {
  const auth = getAuth(firebaseApp)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  function tester() {
    console.log(clc.bgGreen('  PASS  '), 'The promise returns fullfill')
    console.log(clc.bgRed('  ERROR  '), 'The promise returns rejected')
    console.log(clc.bgYellowBright('  WARN  '), 'Some objects are missing')
    console.log(clc.bgRed('  ERROR  '), 'The promise returns rejected')
    console.log(clc.bgGreen('  PASS  '), 'The promise returns fullfill')
    console.log(clc.bgYellowBright('  WARN  '), 'Some objects are missing')

    /*console.log(messageFail, fail, "El usuario y la contraseña no coinciden con auth y infoFirestore en SignIn.jsx")
    console.log(messageFail, fail, "Error de autenticación")
    console.log(messageFail, fail, "Credenciales incorrectas")*/
  }

  function handleSignIn() {
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user
        // Alert.alert('Bienvenido ' + user.email);
      })
      .catch(err => Alert.alert(err.message))
  };

  return (
    <KeyboardAvoidingView style={s.container} behavior="padding">
      <ScrollView style={s.loginScrollView}>
        <View style={s.login}>
          <Image style={s.LoginImage} source={require('../../assets/img/login-userDoor.png')} />
          <Text style={s.LoginTitle}>Inicia Sesión</Text>

          <View behavior="padding" style={s.LoginContainerInput}>
            <Text style={s.LoginInputHeader}>Correo electrónico</Text>
            <TextInput
              style={s.LoginInput}
              onChangeText={text => setEmail(text)}
              placeholder="Ingresa un correo valido"
            ></TextInput>
          </View>

          <View style={s.LoginContainerInput}>
            <Text style={s.LoginInputHeader}>Contraseña</Text>
            <TextInput
              style={s.LoginInput}
              onChangeText={text => setPass(text)}
              placeholder="Ingresa tu contraseña"
              secureTextEntry
            ></TextInput>
          </View>

          <TouchableOpacity
            style={s.btnSignIn}
            // onPress={handleSignIn}>
            onPress={tester}>
            <Text style={s.btnSignInText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[s.btnSignIn, s.btnSignInGoogle]}
            onPress={handleSignIn}>
            <Image style={s.btnSignInGoogleImage} source={require('../../assets/img/google.png')} />
            <Text style={[s.btnSignInText, s.btnSignInGoogleText]}>Ingresar con Google</Text>
          </TouchableOpacity>

          <Text style={s.labelGSU}>¿No tienes una cuenta?
            <Text
              style={[s.btnSignInText, s.labelGoSignUp]}
              onPress={() => setIsRegistering(true)}>
              Registrate
            </Text>
          </Text>

        </View>
      </ScrollView>
    </KeyboardAvoidingView >
  )
}
