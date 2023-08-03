import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Components/styles'; // Importando o objeto de estilos do arquivo styles.js

import Formulario from './Components/Formulario/Formulario';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Formulário:</Text>
      <Formulario />
    </View>
  );
}

export default App;
