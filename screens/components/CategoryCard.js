import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
const CategoryCard = ({ imgUrl }) => {

    
  return (
      <TouchableOpacity>
        <Image
          source={{
            uri: imgUrl,
          }}
          className='h-20 w-20 rounded mx-2'
        />
        <Text className='absolute bottom-1 left-5 text-white font-bold'>hi</Text>
      </TouchableOpacity>
  );
};

export default CategoryCard;
