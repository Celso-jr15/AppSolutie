import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles'; // Importando o objeto de estilos do arquivo styles.js
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';
import PhotoModal from './PhotoModal/PhotoModal';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';
//import CheckBox from '@react-native-community/checkbox';

///import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker'; // Importe o componente DateTimePicker
import { ScrollView } from 'react-native';


const SelectionButtons = ({ selectedValue, onSelect }) => (
  <View style={styles.selectionButtonsContainer}>
    <TouchableOpacity
      style={[
        styles.selectionButton,
        selectedValue === 'Sim' ? styles.selectionButtonSelected : null,
      ]}
      onPress={() => onSelect('Sim')}
      >
      <Text style={styles.selectionButtonText}>Sim</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.selectionButton,
        selectedValue === 'Não' ? styles.selectionButtonSelected : null,
      ]}
      onPress={() => onSelect('Não')}
      >
      <Text style={styles.selectionButtonText}>Não</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.selectionButton,
        selectedValue === 'NA' ? styles.selectionButtonSelected : null,
      ]}
      onPress={() => onSelect('NA')}
    >
      <Text style={styles.selectionButtonText}>NA</Text>
    </TouchableOpacity>
  </View>
);

const FormItem = ({ label, value, onValueChange }) => (
  <View style={{ marginBottom: 10 }}>
    <Text>{label}:</Text>
    <SelectionButtons selectedValue={value} onSelect={onValueChange} />
  </View>
);
const Formulario = () => {


  
  const navigation = useNavigation();
  const [nomeCliente, setNomeCliente] = useState('');
  const [enderecoCliente, setEnderecoCliente] = useState('');
  const [inspectionDate, setInspectionDate] = useState('');
  const [tipoInpecaoCliente, setTipoInpecaoCliente] = useState('');
  const [ordemServicoCliente, setOrdemServicoCliente] = useState('');
  
  const [fields, setFields] = useState([]);
  const [itemValue, setItemValue] = useState('');


  const [showDatePicker, setShowDatePicker] = useState(false); // Estado para mostrar/ocultar o seletor de data

  // Função para exibir o seletor de data
  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  // Função para atualizar a data selecionada
  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || inspectionDate;
    setShowDatePicker(false);
    setInspectionDate(currentDate);
  };

  
  const handleAddField = () => {
    // Lógica para adicionar um novo campo Sim/Não/NA
    // Atualize o estado 'fields' com o novo campo
  };
  
  
  const handleSubmit = () => {
    // Será enviado o botão com o Form
  }

  // Array de itens com nomes diferentes
  const formItems = [
    { name: 'Item 1.1', value: '' },
    { name: 'Item 2.2', value: '' },
    { name: 'Item 3.3', value: '' },
    // ... Adicione mais itens aqui
  ];


  
  const [photoUri, setPhotoUri] = useState(null);
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState('');
  
  
  const [selectedOption, setSelectedOption] = useState(null);
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
      
  
      if (!result.canceled) { // Atualize "cancelled" para "canceled"
        const selectedImage = result.assets[0].uri;
        setSelectedPhoto(selectedImage.uri);
        setIsModalVisible(true);
        //setPhotoUri(result.uri);
        setPhotoUri(result.assets[0].uri); // Use assets[0].uri para atualizar o photoUri
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
  <ScrollView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Cliente</Text>
      <TextInput 
        value={nomeCliente}
        onChangeText={setNomeCliente}
        style={styles.textinput}
      />

      <Text style={styles.label}>Endereço</Text>
      <TextInput 
        value={enderecoCliente}
        onChangeText={setEnderecoCliente}
        style={styles.textinput}
      />

      <Text style={styles.label}>Data da Inspeção</Text>
      <TouchableOpacity onPress={showDatepicker} style={styles.textinput}>
      <Text>{inspectionDate ? inspectionDate.toLocaleDateString() : 'Selecionar Data'}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={inspectionDate || new Date()}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Text style={styles.label}>Tipo</Text>
      <TextInput 
        value={tipoInpecaoCliente}
        onChangeText={setTipoInpecaoCliente}
        style={styles.textinput}
      />

      <Text style={styles.label}>Ordem de Serviço</Text>
      <TextInput 
        value={ordemServicoCliente}
        onChangeText={setOrdemServicoCliente}
        style={styles.textinput}
      />

      <View style={styles.linhaHorizontal} />  
      <View>
        <Text style={styles.textInfo}>Todos os campos abaixo são obrigatórios*</Text>
      </View>


      {/* Renderize os itens dinamicamente */}
      {formItems.map((item, index) => (
        <FormItem
          key={index}
          label={item.name}
          value={item.value}
          onValueChange={(newValue) => {
            const updatedItems = [...formItems];
            updatedItems[index].value = newValue;
            setFields(updatedItems);
          }}
        />
      ))}

      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          backgroundColor: '#007bff',
          padding: 10,
          borderRadius: 25,
          marginTop: 20,
        }}
      >
        <Text style={{ color: '#fff' }}>Enviar</Text>
      </TouchableOpacity>
    

      
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
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Image source={{ uri: photoUri }} style={styles.photoPreview} />
          </TouchableOpacity>
        )}

       {/*
        <PhotoModal 
          isVisible={isModalVisible} 
          photoUri={photoUri} 
          onClose={closeModal} 
        />
        */}
        <PhotoModal 
          isVisible={isModalVisible} 
          //isVisible={()=> setIsModalVisible(false)}
          photoUri={photoUri} 
          onClose={() => setIsModalVisible(false)} 
        /> 
         
        
        
        
        

      </View>
      
      {/* Outros campos do formulário aqui */}
    </View>
    </ScrollView>
  );
};

export default Formulario;
