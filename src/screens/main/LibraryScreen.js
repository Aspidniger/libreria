import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Text } from '@rneui/themed';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function LibraryScreen() {
  const [books, setBooks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get('https://reactnd-books-api.udacity.com/books', {
        headers: { Authorization: 'whatever-you-want' },
      });
      setBooks(res.data.books);
      setFiltered(res.data.books);
    } catch (err) {
      console.error('Error fetching books:', err);
    }
  };

  const handleSearch = (text) => {
    setQuery(text);
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(filteredBooks);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('BookDetail', { book: item })}
    >
      <Image source={{ uri: item.imageLinks.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      {item.subtitle ? <Text style={styles.subtitle}>{item.subtitle}</Text> : null}
      <Text style={styles.authors}>{item.authors?.join(', ')}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar libro..."
        value={query}
        onChangeText={handleSearch}
        style={styles.input}
      />
      <FlatList
        data={filtered}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    width: '48%',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
  },
  authors: {
    fontSize: 12,
    color: '#444',
    marginTop: 4,
  },
});