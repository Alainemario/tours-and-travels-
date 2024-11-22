import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false); // State to control OTP visibility

  const handleBooking = () => {
    // Validate name, email, and phone before proceeding
    if (!name.trim() || !email.trim() || !phone.trim()) {
      Alert.alert('Error', 'Please fill in all fields: Name, Email, and Phone.');
      return;
    }

    if (!showOtp) {
      // Show OTP input field when Confirm Booking is clicked
      setShowOtp(true);
    } else {
      // Check if OTP is entered
      if (otp === '') {
        Alert.alert('Error', 'Please enter the OTP.');
      } else {
        // OTP is validated but not included in the confirmation message
        Alert.alert('Booking Confirmed', `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Booking Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      {showOtp && (
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType="numeric"
          maxLength={6} // Limit OTP length to 6 digits
        />
      )}

      <Button title={showOtp ? 'Verify OTP' : 'Confirm Booking'} onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default Booking;
