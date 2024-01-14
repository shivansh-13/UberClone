import { FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';


const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen',
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    return (
        <FlatList
            data={data}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity 
                onPress={() => navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                    <View >
                        <Image
                            style={{ width: 120, height: 120, resizeMode: 'contain' }}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`text-lg mt-2 font-semibold`}>{item.title}</Text>
                        <Icon
                            style={tw`bg-black rounded-full w-10 p-2 mt-4`}
                            name="arrowright"
                            color={'white'}
                            type='antdesign'
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions;
