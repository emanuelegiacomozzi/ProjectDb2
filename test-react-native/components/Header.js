import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Header = () => {
  const imgUrl = "https://static.vecteezy.com/ti/vettori-gratis/p1/4185812-set-di-aereo-icona-nero-vettore-aereo-simbolo-set-gratuito-vettoriale.jpg";
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.Agenzia}>ViaggiaConNoi.it</Text>
        <Image source={{ uri: imgUrl }} style={styles.logo} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.navLink}>Home Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    textAlign: "center",
    padding: 5,
    backgroundColor: 'black',
    alignItems: 'center',
    color:"white",
    position:"fixed",
    top:0,
    left:0,
    justifyContent:"space-evenly",
    zIndex:1000
  },
  titleContainer: {
    justifyContent:"center",
    alignItems: 'center',
    
  },
  Agenzia: {
    lineHeight: 48,
    fontSize: 40,
    margin: 0,
  },
  logo: {
    height: 96,
    maWidth: '100%',
    padding:24,
  },
  navLink:{
    marginRight:15,
    color:"white",
    fontSize: 40
  }
});

export default Header;
