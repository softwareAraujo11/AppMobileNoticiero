import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Incio() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.image}
      />
      <Text style={styles.heading}>¡BIENVENIDOS!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
  heading: {
    fontSize: 50,
    fontWeight: '400',
    marginBottom: 50,
    fontStyle: 'italic',
  },
})
;
