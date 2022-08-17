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
             valid = false;
        } else if(!inputs.email.match(/\S+@\S+\.\S+/)){
            handleError('Please input valid Email','email');
        }

        if (!inputs.fullname) {
            handleError('Please input fullname','fullname');
        } 
        if (!inputs.phone) {
            handleError('Please input Phone Number','phone');
        } 
        if (!inputs.password) {
            handleError('Please Input Password','password');
        }else if(inputs.password.length < 5) {
            handleError('Min Password Length of 5','password');
        }

        if(valid) {
            register();
        }

   };


   const register = () => {
         setLoading(true);
         setTimeout(() => {
            setLoading(false);

            try{ 
                AsyncStorage.setItem("user", JSON.stringify(inputs));
                navigation.navigate("LoginScreen");
             
            } catch (error) {
             Alert.alert("Error","Something went wrong");
            }

         }, 3000);
   };
   

    const handleOnChange = (text,  input) => {
        setInputs((prevState)=>({...prevState, [input]: text}));
       };
   

  

   const handleError = (errorMessage, input) => {
     setErrors((prevState)=>({...prevState,[input]: errorMessage}))
   };

    return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}> 
           <Loader visible={loading}/>
             <ScrollView contentContainerStyle={{paddingTop: 50 , paddingHorizontal: 20,}}>
                 <Text style={{color:'black' , fontSize: 40, fontWeight: 'bold'}}>
                    Register
                    </Text>
                    <Text style={{color:'black' , fontSize: 18, marginVertical: 10}}>
                       Enter your Details
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
                        placeholder="Enter your Full Name" 
                        label="Full Name" 
                        error={errors.fullname}
                        onFocus={()=>{
                            handleError(null,'fullname')
                        }}
                        onChangeText ={(text)=>handleOnChange(text,'fullname')}
                       />
                       <Input 
                       keyboardType="numeric"
                        placeholder="Enter your Phone Number" 
                        label="Phone Number" 
                        error={errors.phone}
                        onFocus={()=>{
                            handleError(null,'phone')
                        }}
                        onChangeText ={(text)=>handleOnChange(text,'phone')}
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
                       <Button title="Register" onPress={validate}/>
                       <Text style={{color: 'black' , textAlign: 'center', fontSize: 16}}> Already have account ? LogIn</Text>
                    </View>
                </ScrollView>  
       
     </SafeAreaView>)
};
   


export default LoginScreen;