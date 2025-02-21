import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View>
      <Text style={styles.colore}>Benvenuti alla nostra agenzia di viaggi!</Text>
      <Text style={styles.colore}>Scopri tutte le informazioni cliccando ai link sopra.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
  colore: {
    color: "black"
  }
});

export default Home;
