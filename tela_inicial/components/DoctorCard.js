import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DoctorCard = ({ doutor, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cartao}>
      <Image source={{ uri: doutor.avatar }} style={styles.avatar}/>

      <View style={styles.textoContainer}>
      <Text style={styles.nome}>{doutor.nome}</Text>
      <Text style={styles.tipo}>{doutor.tipo}</Text>
      <Text style={styles.especializacao}>{doutor.especializacao}</Text>
      <Icon name='star' color='#FFD700'/> 
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
  },

  textoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },

  nome: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 10,
  },

  tipo: {
    color: '#666',
    fontSize: 14,
  },
  especializacao: {
    color: '#555',
    fontSize: 14,
  },
});

export default DoctorCard;