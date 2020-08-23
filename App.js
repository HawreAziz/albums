import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


const App: () => React$Node = () => {
  return (
    <View>
        <Header headerText='Albums' />
        <AlbumList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
