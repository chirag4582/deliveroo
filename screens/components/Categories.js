import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl='https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg' />
      <CategoryCard imgUrl='https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg' />
      <CategoryCard imgUrl='https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg'/>
    </ScrollView>
  );
};

export default Categories;
