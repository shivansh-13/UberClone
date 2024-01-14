import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import MapView,{Marker} from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'

const Map = () => {
    const { height } = Dimensions.get('window')
    const mapHeight = height / 2
    const origin = useSelector(selectOrigin)
    return (
      <View>
        <MapView
          style={{ height: mapHeight }}
          mapType='mutedStandard'
          initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          {/* Add markers or other map components if needed */}
        </MapView>
      </View>
    )
  }
export default Map

const styles = StyleSheet.create({})