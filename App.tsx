import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryButton from './components/CategoryButton';

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Header/>
        <SearchBar/>  

        <View style={styles.containerCategory}>
          <CategoryButton title="Ação" selected={true}/>
          <CategoryButton title="Ação" selected={false}/>      
        </View>

        <View style={styles.sectionMovie}>

          <View style={styles.sectionTitleRow}>
            <View style={styles.accentBar}></View>
              <Text style={styles.sectionTitle}>Filmes em destaque</Text>
          </View>

            <View>
              <Text>6 Filmes</Text>
            </View>

          </View>

        </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0d14',
    paddingTop:40,
  },

  containerCategory:{
    flexDirection:"row",
    gap: 10,
    marginLeft:20
  },

  sectionMovie:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginLeft:20,
    marginBlock:20
  },

  sectionTitleRow:{
    flexDirection:"row",
    alignItems:"center",
    gap: 8
  },

  accentBar:{
    height: 18,
    width: 4,
    backgroundColor: "#FF3366",
    borderRadius: 2
  },

  sectionTitle:{
    fontSize: 20,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 0.3
  },

  

  

});
