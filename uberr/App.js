import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, KeyboardAvoidingView ,Platform} from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
// import { header } from 'express/lib/request';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider style={[tw`bg-white h-full`]}>
          <KeyboardAvoidingView 
          behavior={Platform.OS === "ios"?"padding":"height"}
          style={{flex:1}}
          keyboardVerticalOffset={Platform.OS=== "ios"?-64:0}
          >
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={
                  { headerShown: false, }
                } />
              <Stack.Screen name="MapScreen" component={MapScreen}
                options={
                  { headerShown: false, }
                } />
            </Stack.Navigator>
            <StatusBar style="auto" />
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>

    </Provider>
  );
}

