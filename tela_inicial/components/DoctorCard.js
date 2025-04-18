import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DoctorCard = ({ doutor, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cartao}>
      <Image source={{ uri: doutor.avatar }} style={styles.avatar}/>

      <View style={styles.textoContainer}>
      <Text style={styles.nome}>{doutor.nome}</Text>
      <View style={{flexDirection: 'row'}}>
      <Text style={styles.tipo}>{doutor.tipo}</Text>
      <Text> - </Text>
      <Text style={styles.especializacao}>{doutor.especializacao}</Text>
      </View>
      <View style={{flexDirection: 'row'}}> <Icon name='star' color='#FFD700' size={18} style={{marginRight: 4}}/> <Text style={{marginRight: 5}}>{doutor.estrelas}</Text> <Text>({doutor.avaliacoes} Reviews)</Text></View>
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