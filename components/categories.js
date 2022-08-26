import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { Http } from '../utils/http';
import { urlFor } from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Http.categories().then((data) => setCategories(data));
  }, [])

  const renderItems = ({ item }) => {
    return (
      <CategoryCard 
        imgUrl={urlFor(item.image).url()}
        title={item.title} 
        key={item._id}
      />
    );
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