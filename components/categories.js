import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  const categories = [
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title='title' />,
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title='title' />,
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title='title' />,
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title='title' />,
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title='title' />,
    <CategoryCard imgUrl='https://links.papareact.com/gn7' title='title' />,
  ]

  const renderItems = ({ item }) => {
    return item
  }

  return (
    <FlatList
      data={categories}
      renderItem={renderItems}
      horizontal
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    />
      


  )
}

export default Categories