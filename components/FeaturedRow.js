import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import { Http } from '../utils/http'

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(()  => {
    Http.restaurants(id).then(data => {
      setRestaurants(data.restaurant)
    })
  }, []);
  
  const renderCards = ({ item }) => {
    return (
      <RestaurantCard
        key={item._id}
        id={item?._id}
        imgUrl={item?.image}
        title={item?.title}
        rating={item?.rating}
        genre={item?.type?.name}
        address={item?.address}
        short_description={item?.short_description}
        dishes={item?.dishes}
        long={item?.long}
        lat={item?.lat}
    />
    )
  }

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className='font-bold text-lg'>{title}</Text>
          <ArrowRightIcon color='#00CCBB' />
      </View>
      <Text className='text-xs text-gray-500 px-4'>
        {description}
      </Text>
      
      <FlatList 
        data={restaurants}
        renderItem={renderCards}
        keyExtractor={(_, index) => Math.random(index) * 100}
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      />
    </View>
  )
}

export default FeaturedRow