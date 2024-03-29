import { StyleSheet, Text, Touchable, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from 'react-native-elements'
import RideOptionsCard from './RideOptionsCard'


const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-lg py-4 text-center text-xl`}>Hello Shivansh !</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete

                        placeholder='where to'
                        styles={toInputBoxStyles}
                        fetchDetails={true}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        returnKeyType={'search'}
                        enablePoweredByContainer={false}
                        minLength={2}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description,
                                }))
                            navigation.navigate('RideOptionsCard')

                        }}
                        query={
                            {
                                key: GOOGLE_MAPS_APIKEY,
                                language: 'en',
                            }
                        }
                        nearbyPlacesAPI=" GooglePlacesSearch"
                        debounce={200} />
                </View>
                <NavFavourites />

            </View>
            <View style={tw`flex-row justify-evenly border-t border-gray-100 mt-auto py-2 bg-white `}>
                <TouchableOpacity style={tw` justify-between flex-row bg-black flex w-24 px-4 py-3 rounded-full`}
                    onPress={() => navigation.navigate("RideOptionsCard")}
                >
                    <Icon name='car' type='font-awesome' color='white' size={16} />
                    <Text style={tw`text-center text-white`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex-row justify-between items-center w-24 px-4 py-3 rounded-full`}>
                    <Icon name='fastfood' type='material' color='black' size={16} />
                    <Text style={tw`text-center text-black`}>Eats</Text>
                </TouchableOpacity>

            </View>
            <View></View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }

})