import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './components/styles'; // Importando o objeto de estilos do arquivo styles.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handlePhotoCapture = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('É necessário conceder permissão para acessar a galeria de fotos.');
      return;
    }
  
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
  
    if (!result.cancelled) {
      setPhotoUri(result.uri);
    }
  };
  

  const saveFormData = async (formData) => {
    try {
      const serializedData = JSON.stringify(formData);
      await AsyncStorage.setItem('formData', serializedData);
      console.log('Formulário salvo com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar o formulário:', error);
    }
  };
  
  // Função para obter os formulários preenchidos do AsyncStorage
  const getFormData = async () => {
    try {
      const serializedData = await AsyncStorage.getItem('formData');
      if (serializedData !== null) {
        const formData = JSON.parse(serializedData);
        return formData;
      }
    } catch (error) {
      console.error('Erro ao obter o formulário:', error);
    }
    return null;
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Cliente</Text>
      {/* Outros campos do formulário aqui */}
      
      {/* Campo com radio buttons "Sim", "Não" e "NA" */}
      <Text style={styles.label}>Paredes</Text>
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity
          style={[styles.radioButton, selectedOption === 'Sim' && styles.radioButtonSelected]}
          onPress={() => handleOptionSelect('Sim')}
        >
          <Text style={styles.radioButtonText}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, selectedOption === 'Não' && styles.radioButtonSelected]}
          onPress={() => handleOptionSelect('Não')}
        >
          <Text style={styles.radioButtonText}>Não</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, selectedOption === 'NA' && styles.radioButtonSelected]}
          onPress={() => handleOptionSelect('NA')}
        >
          <Text style={styles.radioButtonText}>NA</Text>
        </TouchableOpacity>
      </View>

      {/* Campo para adicionar foto */}
      <Text style={styles.label}>Foto das Paredes</Text>
      <TouchableOpacity style={styles.photoButton} onPress={handlePhotoCapture}>
        {photoUri ? (
          <Image source={{ uri: photoUri }} style={styles.photoPreview} />
        ) : (
          <Text style={styles.photoButtonText}>Adicionar Foto</Text>
        )}
      </TouchableOpacity>
      
      {/* Outros campos do formulário aqui */}
    </View>
  );
};

export default App;
