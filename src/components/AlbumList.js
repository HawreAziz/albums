import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends React.Component {
    state = { albums: []};

    UNSAFE_componentWillMount = () => {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data}))
        .catch(err => console.log(err.message));
    }

    renderAlbums = () => {
        return this.state.albums.map(album => {
            return <Text key={album.title}>{album.title}</Text>
        })
    }

    render = () => {
        console.log(this.state);
        const { albums } = this.state;
        return (
            <View style={styles.container}>
              <FlatList
                  data={albums}
                  keyExctractor={ item => item.title}
                  renderItem={({ item }) => {
                      return <AlbumDetail album={item} />
                  }}
              />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100
  }
});

export default AlbumList;
