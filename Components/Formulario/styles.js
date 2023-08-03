// styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
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
});

export default styles;
