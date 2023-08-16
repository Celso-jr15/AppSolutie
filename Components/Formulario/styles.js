// styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    
  },
  label: {
    fontSize: 14,
    
  },

  textinput:{
    borderColor: '#9e9e9e',
    borderWidth: 1,
    color: '#2c2c2c',
    padding: 10,
    marginTop: 1,
    width: 300,
    marginBottom: 10,
    borderRadius: 10,
  },

  linhaHorizontal:{
    borderBottomColor: '#b6b6b690',
    borderBottomWidth: 2,
    marginVertical: 1,
    marginTop: 20,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },

  textInfo:{
    fontSize: 12,
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'center',
    color: '#ff4444',

  },

  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    height: 40,
    
    
  },
  radioButton: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    backgroundColor: '#bdbdbd',
  },
  radioButtonText: {
    color: '#000000',

  },
 

 
  photoButtonContainer: {
   //flexDirection: 'row',
    //alignItems: 'center',
    
  },

  photoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 0,
    marginRight: 0,
    marginLeft: 15,
  },
  photoButtonIcon: {
    marginRight: 0,
  },

  photoButtonText: {
    color: '#fff',
    marginLeft: 0,
    alignContent: 'center',
    justifyContent: 'center',
  },

  photoPreview: {
    width: 50,
    height: 50,
    marginTop: 0,
  },


  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalImage: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
  },

  selectionButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  selectionButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  selectionButtonSelected: {
    backgroundColor: '#27ec00',
    borderColor: '#007bff',
  },
  selectionButtonText: {
    color: '#000',
  },
});

export default styles;
