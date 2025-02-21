import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import axios from 'axios';

const Compagnie = () => {
  const [dati, setDati] = useState([]);
  const [errore, setError] = useState(null);

  useEffect(() => {
    const fetchDati = async () => {
      try {
        const response = await axios.get('http://172.20.0.1:5002/api/compagnie_voli');
        setDati(response.data);
      } catch (err) {
        setError('Errore nel recupero dei dati');
      }
    };

    fetchDati();
  }, []);

  if (errore) {
    return <Text>{errore}</Text>;
  }

  return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.tableRowHeader}>
          <Text style={styles.tableHeaderCell}>Nome</Text>
          <Text style={styles.tableHeaderCell}>Codice Compagnia</Text>
        </View>
  
       
        {dati.map((item, index) => (
          <View
            key={index}
            style={[styles.tableRow, index % 2 === 0 && styles.evenRow]}
          >
            <Text style={styles.tableCell}>{item[0]}</Text>
            <Text style={styles.tableCell}>{item[1]}</Text>
          </View>
        ))}
      </ScrollView>
    );
  };
  
  const { width } = Dimensions.get('window'); 
  
  const styles = StyleSheet.create({
    scrollContainer: {
      padding: 20,
    },
    tableRowHeader: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#e8dfdf',
      backgroundColor: '#aaa6a6',
      paddingVertical: 12,
      paddingHorizontal: 15,
    },
    tableHeaderCell: {
      flex: 1,
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: width <= 480 ? 14 : 16, 
      color: '#0f100f',
    },
    tableRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#e8dfdf',
    },
    evenRow: {
      backgroundColor: 'hsl(0, 31%, 95%)',
    },
    tableCell: {
      flex: 1,
      textAlign: 'left',
      fontSize: width <= 480 ? 14 : 16, 
      color: '#804b4b',
    },
    responsive: {
      fontSize: width <= 480 ? 12 : 16,
    },
  });
export default Compagnie;
