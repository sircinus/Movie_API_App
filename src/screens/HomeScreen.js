import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const headers = {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGVlODk5ZjUyODNjNTc5MTFlNWM1NDcxODFiNjhlYyIsInN1YiI6IjY2MWZiOWI3M2M0MzQ0MDE2MzAzNTIyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DmFtiGtsr4O3mQmy4p-_EprPDAz0fSA4mCi3KUHeifM',
    };
    axios
      .get(url, {headers})
      .then(res => {
        setData(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log('data', data);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Movie App</Text>
      </View>

      <ScrollView>
        <View style={styles.category}>
          <Text style={styles.categoryText}>Trending</Text>
        </View>

        <View style={styles.wrapContainer}>
          {data.map((item, index) => {
            return (
              <View key={index} style={styles.allMovieContainer}>
                <TouchableOpacity
                  style={styles.movieContainer}
                  onPress={() =>
                    navigation.navigate('DetailScreen', {
                      item: item,
                    })
                  }>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                    }}
                    style={styles.movieImage}
                  />
                  <View style={styles.movieText}>
                    <Text style={styles.movieTitle}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#603A40',
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#440D0F',
  },
  headerText: {
    fontFamily: 'Commissioner-SemiBold',
    fontSize: 24,
    padding: 10,
    color: '#fff',
  },
  category: {
    margin: 5,
  },
  categoryText: {
    fontFamily: 'Commissioner-Regular',
    color: '#fff',
    fontSize: 16,
  },
  allMovieContainer: {
    marginHorizontal: 0,
  },
  movieContainer: {
    backgroundColor: '#191716',
    margin: 5,
    width: 180,
    height: 280,
    borderRadius: 5,
  },
  movieImage: {
    resizeMode: 'contain',
    width: 140,
    height: 200,
    alignSelf: 'center',
    marginTop: 5,
  },
  movieTitle: {
    fontFamily: 'Commissioner-Bold',
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    margin: 5,
  },
  movieDesc: {
    textAlign: 'justify',
    fontFamily: 'Commissioner-Light',
    color: '#fff',
  },
  wrapContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

export default HomeScreen;
