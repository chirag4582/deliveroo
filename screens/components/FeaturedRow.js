import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaruntCard from './RestaruntCard'

const FeaturedRow = ({id,title,description,feauturedCategory}) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg' >{title}</Text>
        <ArrowRightIcon  color='#00CCBB' />
      </View>
      <Text className='text-xs text-gray-500 px-4' >{description}</Text>

      <ScrollView 
        horizontal
        contentcontainerStyle={{
            paddingHorizontal:15,
        }}
        showHorizontalScrollIndicator={false}
        className='pt-4 '
      >
        {/* {restraunt card} */}
        <RestaruntCard
            id={123}
            imgUrl='https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg'
            title="yo sushi!"
            rating={4.5}
            genre='Japanese'
            adress='123 ming street'
            short_description='test desc'
            dishes={[]}
            long={20}
            lat={0}
        />
        <RestaruntCard
            id={123}
            imgUrl='https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg'
            title="yo sushi!"
            rating={4.5}
            genre='Japanese'
            adress='123 ming street'
            short_description='test desc'
            dishes={[]}
            long={20}
            lat={0}
        /><RestaruntCard
            id={123}
            imgUrl='https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg'
            title="yo sushi!"
            rating={4.5}
            genre='Japanese'
            adress='123 ming street'
            short_description='test desc'
            dishes={[]}
            long={20}
            lat={0}
        /><RestaruntCard
            id={123}
            imgUrl='https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg'
            title="yo sushi!"
            rating={4.5}
            genre='Japanese'
            adress='123 ming street'
            short_description='test desc'
            dishes={[]}
            long={20}
            lat={0}
        /><RestaruntCard
            id={123}
            imgUrl='https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg'
            title="yo sushi!"
            rating={4.5}
            genre='Japanese'
            adress='123 ming street'
            short_description='test desc'
            dishes={[]}
            long={20}
            lat={0}
        /><RestaruntCard
        id={123}
        imgUrl='https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg'
        title="yo sushi!"
        rating={4.5}
        genre='Japanese'
        adress='123 ming street'
        short_description='test desc'
        dishes={[]}
        long={20}
        lat={0}
    />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow