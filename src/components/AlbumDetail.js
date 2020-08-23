import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import CardSection from './CardSection';
import Card from './Card';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { imageStyle,
            textStyle,
            textViewStyle,
            thumbnailImageStyle,
            buttonStyle,
            btnTextStyle } = styles;

    return(
      <Card>
        <CardSection>

          <Image
            source={{ uri: thumbnail_image }}
            style={imageStyle}
          />
          <View style={textViewStyle} >
            <Text style={textStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image source={{ uri: image }} style={thumbnailImageStyle} />
        </CardSection>
        <CardSection>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => Linking.openURL(url)}
          >
            <Text style={btnTextStyle}>Buy now</Text>
          </TouchableOpacity>
        </CardSection>
      </Card>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 80,
    width: 80,
    margin: 5,
    borderRadius: 5
  },
  thumbnailImageStyle: {
    height: 300,
    flex: 1,
    borderRadius: 10
  },
  textStyle: {
    fontSize: 18,
  },
  textViewStyle: {
    flexDirection: 'column',
    paddingTop: 2
  },
  buttonStyle: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTextStyle:{
    fontSize: 22
  }
});


/*
*/
export default AlbumDetail;
