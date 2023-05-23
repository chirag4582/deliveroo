import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline'

const RestaruntCard = ({
    id,imgUrl,title,rating,genre,adress,short_description,dishes,long,lat
}) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow'>
        <View>
        <Image
            source={{
                uri:imgUrl
            }}
            className="w-64 h-36 rounded-sm ml-3"
        />
      <View className='px-3 pb-4' >
        <Text className='font-bold text-lg pt-2' >{title}</Text>
        <View className='flex-row items-center space-x-1'>
            <StarIcon color={'green'} opacity={0.5} size={22} />
            <Text className='text-green-500' >{rating}</Text>
        </View>
      </View>
      <View className='flex-row items-center space-x-1' >
        <MapPinIcon color={'gray'} opacity={0.4} size={22} />
        <Text className='text-xs text-gray-500' >Nearby . {adress}</Text>
      </View>
    </View>
    </TouchableOpacity>
    
  )
}

export default RestaruntCard