import { StyleSheet, Text, View, SafeAreaView, Image, Touchable } from 'react-native';
import React,{useRef} from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
const HomeScreen = () => {
  const dispatch = useDispatch();

  const getPlaceDetails = async (placeId) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_APIKEY}`
      );
      const data = await response.json();
      return data.result.geometry.location;
    } catch (error) {
      console.error("Error fetching place details:", error);
      return null;
    }
  };


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
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            }
          }}
          onPress={async (data, details = null) => {
            const location = await getPlaceDetails(details.place_id);
            if (location) {
              dispatch(setOrigin({
                location,
                description: data.description,
              }));
              dispatch(setDestination(null));
            } else {
              console.error("Unable to fetch location details.");
            }
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en"
          }}
          minLength={2}
          nearbyPlacesAPI='GooglePlacesSearch'
          returnKeyType={'search'}
          debounce={200}
          enablePoweredByContainer={false}
        />

        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
