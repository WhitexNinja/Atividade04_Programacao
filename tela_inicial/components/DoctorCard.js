import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DoctorCard = ({ doutor, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cartao}>
      <Text style={styles.nome}>{doutor.nome}</Text>
      <Text style={styles.tipo}>{doutor.tipo}</Text>
      <Text style={styles.especializacao}>{doutor.especializacao}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: '#eee',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
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