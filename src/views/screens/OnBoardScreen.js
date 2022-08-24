import React from 'react';
import {StyleSheet , Text , View , SafeAreaView} from 'react-native';
import Button from '../components/Button';

const OnBoardScreen = ({ navigation }) => {
    return (
      <>
      <View style={styles.container}>
      <Button
        title="ORG 1"
        onPress={() =>
          navigation.navigate('Registration', { name: 'Registrationcreen' })
        }
      />
      <Button
        title="ORG 2"
        onPress={() =>
          navigation.navigate('Registration', { name: 'RegistrationScreen' })
        }
      />
    
       </View>
       <View style={{justifyContent:'space-evenly', flexDirection:'row' }}>
       
        <Button title="SCAN QR"  onPress={() => navigation.navigate('Search')}/>
        <Button title="SEARCH " onPress={() => navigation.navigate('Search')} />
       
       </View>
       </> 
    );
  };

  const styles = StyleSheet.create({
      container: {
       
        backgroundColor:'white',
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        paddingLeft: 20,
        paddingRight:20
      }
  })

export default OnBoardScreen;