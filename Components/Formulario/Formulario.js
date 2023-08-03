import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles'; // Importando o objeto de estilos do arquivo styles.js
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';
import PhotoModal from './PhotoModal/PhotoModal';


const Formulario = () => {
  // Resto do código do componente de formulário...

  const [selectedOption, setSelectedOption] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState('');


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handlePhotoCapture = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('É necessário conceder permissão para acessar a galeria de fotos.');
      return;
    }
  
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      const closeModal = () => {
        setIsModalVisible(false);
      };
  
      if (!result.canceled) { // Atualize "cancelled" para "canceled"
        const selectedImage = result.assets[0];
        setSelectedPhoto(selectedImage.uri);
        setIsModalVisible(true);
      }
      } catch (error) {
        console.error('Erro ao capturar a foto:', error);
      }
  };

  const closeModal = () => {
    setIsModalVisible(false);
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
      <Text style={styles.label}>Item 1 do Form</Text>
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
        
        <TouchableOpacity
          style={styles.photoButton}
          onPress={handlePhotoCapture}
        >
          <Icon name="camera" size={24} color="#fff" style={styles.photoButtonIcon} />
          <Text style={styles.photoButtonText}></Text>
        </TouchableOpacity>
        
        
        {photoUri !== '' && (
          <Image source={{ uri: photoUri }} style={styles.photoPreview} />
        )}
        
        <PhotoModal 
          isVisible={isModalVisible} 
          photoUri={photoUri} 
          onClose={closeModal} 
        />
         
        
        
        
        

      </View>
      
      {/* Outros campos do formulário aqui */}
    </View>
  );
};

export default Formulario;
