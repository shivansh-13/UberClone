import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: '123',
    icon: 'home', // 'Home' to 'home'
    location: 'Home',
    destination: 'Krishna Bunglows 02 near uma bhavan',
  },
  {
    id: '456', // Change the id to a unique value
    icon: 'briefcase',
    location: 'Work',
    destination: 'Dr Reddys Laboratories Corporate office',
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={
        ()=>(
            <View style={[tw`bg-gray-200`, {height:0.5}]}/>
        )
      }
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            containerStyle={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={item.icon} // Changed to item.icon
            type="ionicon"
            color="white" // Changed to color
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
