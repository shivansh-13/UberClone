import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import MapView,{Marker} from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'

const Map = () => {
    const { height } = Dimensions.get('window')
    const mapHeight = height / 2
  
    return (
      <View>
        <MapView
          style={{ height: mapHeight }}
          mapType='mutedStandard'
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          {/* Add markers or other map components if needed */}
        </MapView>
      </View>
    )
  }
export default Map

const styles = StyleSheet.create({})