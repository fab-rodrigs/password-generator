// Importando módulos e componentes necessários do React Native
import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import { ModalPassword } from './src/assets/components/modal'

// Definindo um conjunto de caracteres para gerar senhas
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&"

// Componente principal do aplicativo
export default function App(){
  // Definindo estados usando o hook useState
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  // Função para gerar uma senha aleatória
  function generatePassword(){
    let password = "";

    // Loop para gerar a senha com base no conjunto de caracteres
    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    // Atualizando o estado da senha e exibindo o modal
    setPasswordValue(password)
    setModalVisible(true)
  }

  // Estrutura do componente renderizado
  return(
    <View style={styles.container}>
       <Image
        source={require("./src/assets/logo.png")}
        style={styles.logo}
       />

       <Text style={styles.title}>
        {size} caracteres
       </Text>

       <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#000'
          thumbTintColor='#392de9'
          value={size}
          onValueChange={ (value) => setSize(value.toFixed(0)) }
        />
       </View>
       
       <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
       </TouchableOpacity>

       <Modal visible={modalVisible} animationType='fade' transparent={true}>
          <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) }/>
       </Modal>
    
    </View>
  )
}

// Estilos CSS do componente
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 60
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 6,
  },
  button:{
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText:{
    color: '#FFF',
    fontSize: 20,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
  }
})
