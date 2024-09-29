import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';

const DetailScreen = props => {
  const detail = props.route.params.item;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{detail.title}</Text>
      </View>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${detail.poster_path}`,
            }}
            style={styles.movieImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.descText}>Release Date:</Text>
            <Text style={styles.subText}>{detail.release_date}</Text>
            <Text style={styles.descText}>Popularity:</Text>
            <Text style={styles.subText}>{detail.popularity}</Text>
            <Text style={styles.descText}>Rating:</Text>
            <Text style={styles.subText}>{detail.vote_average}</Text>
          </View>
        </View>
        <View style={styles.opacBackground}>
          <Text style={styles.descText}>Overview:</Text>
          <Text style={styles.subText}>{detail.overview}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#603A40',
  },
  headerContainer: {
    backgroundColor: '#440D0F',
  },
  headerText: {
    fontFamily: 'Commissioner-SemiBold',
    fontSize: 20,
    padding: 10,
    color: '#fff',
  },
  movieImage: {
    resizeMode: 'cover',
    width: 200,
    height: 300,
    margin: 5,
    borderRadius: 5,
  },
  descText: {
    fontFamily: 'Commissioner-SemiBold',
    textAlign: 'justify',
    marginHorizontal: 10,
    fontSize: 16,
    color: '#fff',
  },
  subText: {
    fontFamily: 'Commissioner-Regular',
    textAlign: 'justify',
    marginHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
    color: '#fff',
  },
  contentContainer: {
    flexDirection: 'row',
    backgroundColor: '#191716',
    margin: 10,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  opacBackground: {
    backgroundColor: 'rgba(25,23,22, 0.4)',
    margin: 10,
    borderRadius: 10,
    padding: 5,
  },
});

export default DetailScreen;
