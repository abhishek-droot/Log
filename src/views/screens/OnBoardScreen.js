import React from 'react';
import {StyleSheet , Text , View , SafeAreaView} from 'react-native';
import Button from '../components/Button';
import Buttons from '../components/Buttons';

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
       <View style={{justifyContent:'space-evenly', flexDirection:'row' ,backgroundColor:'white' }}>
       
          <Buttons title="SCAN QR"  onPress={() => navigation.navigate('Search')}/>
          <Buttons title="SEARCH " onPress={() => navigation.navigate('Search')} />
       
       </View>
       </> 
    );
  };

  const styles = StyleSheet.create({
      container: {
       
        backgroundColor:'white',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingLeft: 20,
        paddingRight:20
      }
  })

export default OnBoardScreen;