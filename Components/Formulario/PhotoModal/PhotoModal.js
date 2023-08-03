import React, { useState } from 'react';
import { Text, View, Modal, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';


const PhotoModal = ({ isVisible, photoUri, onClose }) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Image source={{ uri: photoUri }} style={styles.modalImage} />
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default PhotoModal;
