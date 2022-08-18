import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  const categories = [
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title='title1' key={331} />,
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title='title2' key={222} />,
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title='title3' key={311} />,
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title='title4' key={4122} />,
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title='title5' key={1422} />,
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title='title6' key={1225} />,
  ]

  const renderItems = ({ item }) => {
    return item;
  }

  return (
    <FlatList
      data={categories}
      renderItem={renderItems}
      horizontal
      keyExtractor={({ key }) => key}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    />
      


  )
}

export default Categories