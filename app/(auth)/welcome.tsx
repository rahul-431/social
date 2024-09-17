import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { icons, onBoarding } from "@/constant";
import CustomButton from "@/components/CustomButton";
const OnBoarding = () => {
  const ref = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastItem = activeIndex === onBoarding.length - 1;
  return (
    <SafeAreaView className="bg-white w-full flex h-screen items-center justify-between">
      <View className="mx-10 items-center justify-between flex flex-row">
        <TouchableOpacity
          className="flex items-end justify-center p-5"
          onPress={() => ref.current?.scrollBy(-1)}
        >
          <Image
            source={icons.arrowLeft}
            className="w-[24px] h-[24px]"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="flex w-full items-end justify-center p-5"
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text className="underline text-base font-robotoRegular">Skip</Text>
        </TouchableOpacity>
      </View>
      <Swiper
        ref={ref}
        dot={
          <View className="w-[10px] h-[10px] bg-[#e2e8f0] rounded-full m-1" />
        }
        activeDot={
          <View className="w-[10px] h-[10px] bg-[#DE8D13] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
        autoplay={false}
        loadMinimal
        bounces
      >
        {onBoarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[400px]"
              resizeMode="contain"
            />
            <Text className="text-3xl text-center font-robotoMedium w-[80%]">
              {item.title}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        onPress={() => {
          isLastItem
            ? router.push("/(auth)/sign-up")
            : ref.current?.scrollBy(1);
        }}
        title={isLastItem ? "Get started" : "Next"}
      />
    </SafeAreaView>
  );
};

export default OnBoarding;
