import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import DestinationCard from './DestinationCard';

const destinations = [
  {
    id: '1',
    name: 'Paris',
    image: 'https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_1:1,w_3840,g_auto/f_auto/q_auto/v1/gc-v1/paris/3%20giorni%20a%20Parigi%20Tour%20Eiffel?_a=BAVARSDW0',
    description: 'The city of love and lights.',
  },
  {
    id: '2',
    name: 'New York',
    image: 'https://www.travelguide.net/media/new-york.jpeg',
    description: 'The city that never sleeps.',
  },
  {
    id: '3',
    name: 'Tokyo',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQmNpxrD9ccoxZ3Q23LOOE93wLr_tMR7LFQ&s',
    description: 'A vibrant blend of tradition and technology.',
  },
];

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = destinations.filter((destination) =>
      destination.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredDestinations(filtered);
  };

  const renderItem = ({ item }) => (
    <DestinationCard 
      name={item.name} 
      image={item.image} 
      description={item.description} 
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Destinations</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search destinations..."
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredDestinations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default HomeScreen;
