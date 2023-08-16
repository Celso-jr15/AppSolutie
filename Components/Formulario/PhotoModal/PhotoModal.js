import React, { useState } from 'react';
import { Text, View, Modal, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome'

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
              <Icon name="close" size={44} color="#fff" />
            </TouchableOpacity>
          </View>
        </Modal>
      );
};

export default PhotoModal;
