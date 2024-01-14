import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete  } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env"
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
    const dispatch = useDispatch();
  return (
    <SafeAreaView style={[tw`bg-white h-full`]}>
      <View style={[tw`p-5`]}>
        <Image
          source={{ uri: 'https://links.papareact.com/gzs' }}
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
        />
        <GooglePlacesAutocomplete 
        placeholder='Where From?'
        styles={{
            container:{
                flex:0,
            },
            textInput:{
                fontSize:18,
            }
        }}
        onPress={(data, details = null) => {
            console.log(data, details);
            dispatch(setOrigin({
                location:details.geometry.location,
                description:data.description,
            }))
            dispatch(setDestination(null))
        }}
        query={
             {key:GOOGLE_MAPS_APIKEY,
             language:"en"}
        }
        minLength={2}
        nearbyPlacesAPI='GooglePlacesSearch'
        returnKeyType={'search'}
        debounce={400}
        enablePoweredByContainer={false}
        />
      
      <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  // text:{
  //     color:"blue"
  // }
});
