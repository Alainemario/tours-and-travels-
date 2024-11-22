// DestinationCard.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DestinationCard = ({ name, image, description }) => {
  const [showDetails, setShowDetails] = useState(false);
  const navigation = useNavigation();

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>

      {showDetails ? (
        <>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Booking')}
            style={styles.bookButton}
          >
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleDetails} style={styles.backButton}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity onPress={toggleDetails}>
          <Text style={styles.showMoreText}>Show More</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  bookButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  showMoreText: {
    color: '#007BFF',
    marginTop: 10,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 10,
    padding: 8,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DestinationCard;
