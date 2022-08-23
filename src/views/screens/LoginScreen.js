import AsyncStorage from '@react-native-async-storage/async-storage';
import React , {useState} from 'react';
import { Alert, Keyboard, SafeAreaView , ScrollView ,Text , View} from 'react-native';
import COLORS from '../../consts/color';
import Input from '../components/input';
import Button from '../components/Button';
import Loader from '../components/Loader';

const LoginScreen = ({navigation}) => {
    
        const [inputs , setInputs] = useState({
      email: '',
      fullname: '',
      phone: '',
      password: '',
   });
  
   const [errors, setErrors] = useState({});
   const [loading , setLoading] = useState(false);

  
 


   const validate = () => {
        Keyboard.dismiss();
        let valid = true;
        if (!inputs.email) {
             handleError("Please Input email",'email');
            
        } else if(!inputs.email.match(/\S+@\S+\.\S+/)){
            handleError('Please input valid Email','email');
        }
    
       
        

        if (!inputs.password) {
          
            handleError('Please Input Password','password');
         
        }else if(inputs.password.length < 5) {
            handleError('Min Password Length of 5','password');
        }

        if(valid) {
            login();
        }

   };


   const login = () => {
         setLoading(true);
         setTimeout(async() => {
            setLoading(false);
            let userData = await AsyncStorage.getItem('user');
            if(userData){
              userData = JSON.parse(userData);
              if(inputs.email == userData.email && inputs.password == userData.password){
                
                 AsyncStorage.setItem("user",JSON.stringify({...userData , loggedIn: true}),);
                AsyncStorage.getItem("user").then(JSON.parse).then(value => {
                  console.log(value); 
                 
                });
                navigation.navigate("SearchScreen");
              }else{
                Alert.alert('Error', 'Invalid Details');

              }
            }else{
                Alert.alert('Error', 'User does not Exist');
            }
         }, 3000)
   };
   

    const handleOnChange = (text,  input) => {
        setInputs((prevState)=>({...prevState, [input]: text}));
       };
   

  

   const handleError = (errorMessage, input) => {
     setErrors((prevState)=>({...prevState,[input]: errorMessage}))
   };

    return (
    <SafeAreaView style={{backgroundColor:'white',flex: 1}}> 
           <Loader visible={loading}/>
             <ScrollView contentContainerStyle={{paddingTop: 50 , paddingHorizontal: 20,}}>
                 <Text style={{color:'black' , fontSize: 40, fontWeight: 'bold'}}>
                    LogIn
                    </Text>
                    <Text style={{color:'black' , fontSize: 18, marginVertical: 10}}>
                       Enter your Details to Login
                    </Text>
                    <View style={{marginVertical: 20}}>
                        <Input 
                        placeholder="Enter your Email Address" 
                        label="Email" 
                        error={errors.email}
                        onFocus={()=>{
                            handleError(null,'email')
                        }}
                        onChangeText ={(text)=>handleOnChange(text,'email')}
                       />
                       
                        <Input 
                        placeholder="Enter your Email Password" 
                        label="Password" 
                        error={errors.password}
                        onFocus={()=>{
                            handleError(null,'password')
                        }}
                        onChangeText ={(text)=>handleOnChange(text,'password')}
                        password
                        
                       />
                       <Button title="LogIn" onPress={validate}/>
                       <Text 
                       
                       style={{color: 'black' , textAlign: 'center', fontSize: 16}}> Don't a have account ? Register</Text>
                    </View>
                </ScrollView>  
       
     </SafeAreaView>)
};
   


export default LoginScreen;