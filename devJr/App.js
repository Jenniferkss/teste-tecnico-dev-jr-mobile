import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Perfil from './screens/PerfilScreen'
import Projetos from './screens/ProjetosScreen'
import Habilidades from './screens/HabilidadesScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.quadrado]}>
        <View> 
        <Image style={styles.img} source={require('./assets/image.png')} />
        </View>
        <Text style={styles.txt}>Dev Junior</Text>
        <Text style={styles.txt1}>Mobile Developer</Text>
       <View style={styles.icons}>
      <AntDesign name="github" size={40} color="black" />
      <AntDesign name="linkedin" size={40} color="black" />
      <AntDesign name="mail" size={40} color="black" />
       </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  quadrado: {
    width: 350,
    height: 350,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 60
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
   txt1: {
    fontSize: 15,
    color: '#000000',
  },
  img: {
    width: 200,
    height: 150,
    borderRadius: 90,
    justifyContent: 'center',

  },
  icons: {
    width: 250,
  justifyContent: 'space-around',
  flexDirection:'row'
  }
});