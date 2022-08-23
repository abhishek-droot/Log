// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/
 
// import React in our code
import React, {useState, useEffect} from 'react';
import Button from '../components/Button';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import RadioButton from '../components/RadioButton'; 

const PROP = [
	{
		key: 'Company Name',
		text: 'Company Name',
	},
	{
		key: 'Plot Number',
		text: 'Plot Number',
	},
  {
    key: 'Name of concerned-Person',
    text: 'Name of concerned Person'
  }
]

const SearchScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
 
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
 
  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };
 
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          
          width: '100%',
          backgroundColor: '#C8C8C8',
         
        }}
      />
    );
  };
 
  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          placeholderTextColor="black"
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <View style={{paddingTop:20}}>
        <RadioButton PROP={PROP} />
        </View>
        <View style={{paddingLeft:20,paddingRight:20}}>
        <Button
        title="Select"
        onPress={() =>
          navigation.navigate('HomeScreen', { name: 'HomeScreen' })
        }
       />
       </View>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
    color:'black'

  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#000',
    // backgroundColor: '#FFFFFF',
    color:'black',
    borderRadius: 20
  },
});
 
export default SearchScreen;
