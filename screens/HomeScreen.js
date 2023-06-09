import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "./components/Categories";
import FeaturedRow from "./components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="text-red-500 flex-row items-center">
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
        </View>
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold  text-xl items-center">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* {search } */}

      <View className="flex-row items-center space-x-2 pb-2 mx-3 pl-5">
        <View className="flex-row space-x-2 flex-1 items-center bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restraunts and Cuisines"
            keyboradType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/* content  */}
      <ScrollView className="bg-gray-100">
        {/* categories */}
        <Categories />

        {/* featured rows */}
        <FeaturedRow
          id='1'
          title="Featured"
          description="Paid Placments from our partners"
          feauturedCategory="feautured"
        />

        <FeaturedRow
          id='2'
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts"
          feauturedCategory="discounts"
        />

        <FeaturedRow
          id='3'
          title="Offers near you!"
          description="Why not support your local restraunt tonight"
          feauturedCategory="offers"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
