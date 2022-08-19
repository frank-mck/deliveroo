import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LocationMarkerIcon, StarIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'

const RestaurantCard = ({ 
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat
 }) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow'>
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
      className="w-64 h-36 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="text-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
          <StarIcon color="green" opacity={0.5} size={22} />
        </View>
        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
          <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard