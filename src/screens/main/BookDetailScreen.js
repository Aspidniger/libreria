import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function BookDetailScreen({ route }) {
  const { book } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: book.imageLinks.thumbnail }} style={styles.image} />

      <Text style={styles.title}>{book.title}</Text>

      {book.subtitle ? <Text style={styles.subtitle}>{book.subtitle}</Text> : null}

      <Text style={styles.authors}>Autores: {book.authors?.join(', ')}</Text>

      {book.publisher && (
        <Text style={styles.info}>Editorial: {book.publisher}</Text>
      )}

      {book.publishedDate && (
        <Text style={styles.info}>Fecha de publicación: {book.publishedDate}</Text>
      )}

      {book.description && (
        <Text style={styles.description}>{book.description}</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 220,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginVertical: 5,
  },
  authors: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  description: {
    marginTop: 20,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
    color: '#444',
  },
});