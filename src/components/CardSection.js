import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const CardSection = ({ children }) => {
  return (
    <View style={styles.mainView}>
      {children}
    </View>
  );
}


const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection:'row',
    borderBottomWidth: 1,
    marginBottom: 8,
    backgroundColor: '#FFF',
    borderColor: '#ddd',
    shadowOffset: { width: 0, height: 1},
    elevation: 10,
    borderRadius: 10,
    shadowOpacity: 0.9
  }
});

export default CardSection;
