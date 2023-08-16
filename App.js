import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Components/styles'; // Importando o objeto de estilos do arquivo styles.js
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Formulario from './Components/Formulario/Formulario';


const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.homeScreem}>
      <Text> App Solutie Projetos</Text>
      <TouchableOpacity
        onPress={()=> navigation.navigate('Form')}
        style={styles.buttonForm}
      >
        <Text>Novo Formulário</Text>
      </TouchableOpacity>
    </View>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Form'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Form" component={Formulario}/>
      </Stack.Navigator>
    </NavigationContainer>
    /*
    <Text style={styles.label}>Solutie Projetos:</Text>
    <View style={styles.container}>
      <Formulario />
      </View>
    */
      
  );
}

export default App;
