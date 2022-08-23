import AsyncStorage from '@react-native-async-storage/async-storage';
import React , {useState} from 'react';
import { Alert, Keyboard, SafeAreaView , ScrollView ,Text , View} from 'react-native';
import COLORS from '../../consts/color';
import Input from '../components/input';
import Button from '../components/Button';
import Loader from '../components/Loader';
import RadioButton from '../components/RadioButton';
import Slider from '../components/Slider';

const PROP = [
	{
		key: 'Rented',
		text: 'Rented',
	},
	{
		key: 'Owned',
		text: 'Owned',
	},
]

const DATAS = [
	{
		key: 'Member',
		text: 'Member',
	},
	{
		key: 'Non Member',
		text: 'Non Member',
	},
]

const RegistrationScreen = ({navigation}) => {
   
   
   const [inputs , setInputs] = useState({
      email: '',
      fullname: '',
      property: '',
      membership: '',
      phone: '',
      website:'',
      password: '',
   });
  
   const [errors, setErrors] = useState({});
   const [loading , setLoading] = useState(false);
    

   const validate = () => {
        Keyboard.dismiss();
        let valid = true;
        const urlPattern = new RegExp('(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?');

        

        if (!inputs.email) {
             handleError("Please Input email",'email');
             valid = false;
        } else if(!inputs.email.match(/\S+@\S+\.\S+/)){
            handleError('Please input valid Email','email');
            valid = false;
        }

        if (!inputs.fullname) {
            handleError('Please input fullname','fullname');
            valid = false;
        } 
        
        if (!inputs.phone) {
            handleError('Please input Phone Number','phone');
            valid = false;
        } 
       

        if (!inputs.password) {
            handleError('Please Input Password','password');
            valid = false;
        }else if(inputs.password.length < 5) {
            handleError('Min Password Length of 5','password');
            valid = false;
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
    <SafeAreaView style={{backgroundColor:'white' , flex: 1}}> 
           <Loader visible={loading}/>
             <ScrollView contentContainerStyle={{paddingTop: 50 , paddingHorizontal: 20,}}>
                 <Text style={{color:'black' , fontSize: 40, fontWeight: 'bold'}}>
                    Register
                    </Text>
                    <Text style={{color:'black' , fontSize: 18, marginVertical: 10}}>
                       Enter your Details
                    </Text>
                    <View style={{marginVertical: 10}}>
                       <Input 
                        placeholder="Enter your Company Name" 
                        placeholderTextColor='grey'
                        label="Company Name" 
                        error={errors.fullname}
                        onFocus={()=>{
                            handleError(null,'fullname')
                        }}
                        onChangeText ={(text)=>handleOnChange(text,'fullname')}
                       />
                       <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View>
                        <Text style={{color:'black',paddingBottom:10}}>Property Type</Text>
                        <RadioButton PROP={PROP} />
                        </View>
                        <View style={{paddingTop: 10}}>
                        <Text style={{color:'black',paddingBottom:10}}>MemberShip Type</Text>
                        <RadioButton PROP={DATAS} />
                        </View>
                       </View>
                        <Slider />
                          <Input 
                       keyboardType="numeric"
                        placeholder="Enter your Phone Number" 
                        placeholderTextColor='grey'
                        label="Plot Number" 
                        error={errors.phone}
                        onFocus={()=>{
                            handleError(null,'phone')
                        }}
                        onChangeText ={(text)=>handleOnChange(text,'phone')}
                       />
                        <Input 
                        placeholder="Enter your Company Email" 
                        placeholderTextColor='grey'
                        label="Company Email" 
                        error={errors.email}
                        onFocus={()=>{
                            handleError(null,'email')
                        }}
                        onChangeText ={(text)=>handleOnChange(text,'email')}
                       />    
                        <Input 
                        placeholder="Enter your Website" 
                        placeholderTextColor='grey'
                        label="Website" 
                        error={errors.fullname}
                        onFocus={()=>{
                            handleError(null,'Website');
                        }}
                        onChangeText ={(text)=>handleOnChange(text,'website')}
                       /> 
                        
                        <Input 
                        placeholder="Enter your Email Password" 
                        placeholderTextColor='grey'
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

export default RegistrationScreen;