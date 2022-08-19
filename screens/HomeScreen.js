import { View, Text, SafeAreaView, Platform, StyleSheet, StatusBar, Image, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AdjustmentsIcon, ChevronDownIcon, SearchIcon, UserIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {
  const [featCategories, setFeatCategories] = useState([])
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }`
    ).then(data => {
      setFeatCategories(data)
    })
  }, []);

  return (
    <SafeAreaView style={styles.droidSafeArea} className="bg-white pt-5">
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
          <Image source ={{
            uri: "https://links.papareact.com/wru"
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-grat-400 text-xs" >
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00ccbb" />
              
            </Text>
          </View>
          <UserIcon size={35} color="#00ccbb" />
        </View>

        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <SearchIcon color="gray" size={20} />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType='default'
            />
          </View>
          <AdjustmentsIcon color="#00ccbb" />
        </View>

        <ScrollView 
          className="bg-gray-100" 
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          >
          <Categories />

          {featCategories?.map(({_id, name, short_description}) => (
            <FeaturedRow
              id={_id}
              title={name}
              description={short_description}
              key={_id}
            />
          ))}
    
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  droidSafeArea: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});