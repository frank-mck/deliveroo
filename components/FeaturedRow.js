import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
  const restaurantCards = [
    <RestaurantCard
      id={'987'}
      imgUrl='https://links.papareact.com/gn7'
      title='Yo! Sushi'
      rating={4.5}
      genre="Japenese"
      address="123  Main St"
      short_description="Test description"
      dishes={20}
      long={20}
      lat
      key={2205}
    />,
  ]

  const renderCards = ({ item }) => {
    return item;
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
        data={restaurantCards}
        renderItem={renderCards}
        keyExtractor={({ key }) => key}
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