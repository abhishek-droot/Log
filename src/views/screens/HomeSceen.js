import React, {useEffect, useState} from 'react';
import {View , Text, TouchableHighlight , Image , StyleSheet , ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';

const HomeScreen = ({navigation}) => {
    const [userDetails , setUserDetails ] = useState();
    useEffect(() => {
         getUserDetails
    },[]);
    const getUserDetails = () => {
      
        const userData =  AsyncStorage.getItem('user');
        if (userData) {
           setUserDetails(JSON.parse(userData));
        }
    }

    const logout = () => {
        AsyncStorage.setItem("user",
        JSON.stringify({...userDetails, loggedIn:false}),
            );
            navigation.navigate('LoginScreen');
    }

    return (
        <ScrollView style={{backgroundColor:'white', flex: 1}}>
         <View style={styles.profileImgContainer}>
            <Image source={require('../../assets/bike.jpg')} style={styles.profileImage} resizeMode={"cover"}/>
        
           <Text style={{color:'black' , fontSize: 25}}>Harley DavidSon</Text>

           <Text style={{color:'black', marginTop: 30, fontWeight:'bold'}}> Plot Number 12345, Ambala</Text>
      
       </View>

       <View style={styles.button}>

         <Button title="SHOW QR CODE"></Button>

         <Button title="SEE MORE DETAILS"></Button>

       </View>
      
       <View style={styles.text}>
       
         <Text style={{color:'black', fontSize: 25, fontStyle:'bold'}}>PRODUCT PHOTOS</Text>

       </View>

       <View style={styles.container}>
       <Image source={require('../../assets/bike.jpg')} style={styles.profileImage} resizeMode={"cover"}/>
       <Image source={require('../../assets/bike.jpg')} style={styles.profileImage} resizeMode={"cover"}/>
       </View>


       </ScrollView>
        

   )
}

const styles = StyleSheet.create({
    profileImgContainer: {
           marginTop: 40,
           alignItems:'center',
           justifyContent:'center',
           height: 250,
           width: '100%',
           

    },
    profileImage: {
               width: 150,
               height: 150,
               borderRadius: 150/2,
               overflow: "hidden",
               borderWidth: 3,
               borderColor: "black",
               marginBottom: 40
    },
    button:{
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20
    },
    text:{
       marginTop: 25,
       marginLeft:20,
       marginVertical: 10
    },
    container:{
        flexDirection:'row',
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
          justifyContent:'space-between'
    }

})


export default HomeScreen;
