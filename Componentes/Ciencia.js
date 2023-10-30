import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const Ciencia = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=596a5c19c00a4e67a20267255e65967a'
      )
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error('¡Ha ocurrido un error!', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Noticias de Ciencia</Text>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Image source={{ uri: item.urlToImage }} style={styles.newsImage} />
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign:'center',
    color:'red',
    fontStyle:'italic',
  },
  newsItem: {
    backgroundColor: '#fff',
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  newsImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newsDescription: {
    fontSize: 14,
  },
});

export default Ciencia;
