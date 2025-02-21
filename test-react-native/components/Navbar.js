import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Voli')}>
        <Text style={styles.navLinks}>Voli</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Compagnie')}>
        <Text style={styles.navLinks}>Compagnie</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Aeroporti')}>
        <Text style={styles.navLinks}>Aeroporti</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    textAlign:"center",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgb(78, 76, 76)',
    padding: 10,
    color:"white",
    width:"100%",
    position:"fixed",
    top:200,
    left:0,
    alignitems:"center",
    zIndex:1,
    flex:1
  },
  navLinks: {
    color: 'white',
    fontSize: 16,
    marginRight: 15
  },
});

export default Navbar;
