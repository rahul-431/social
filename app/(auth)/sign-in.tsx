import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constant";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

const SignIn = () => {
  return (
    <SafeAreaView className="w-full bg-white h-full p-5 flex justify-between">
      <TouchableOpacity onPress={() => router.back()}>
        <Image
          source={icons.arrowLeft}
          className="w-[24px] h-[24px]"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View className="flex flex-col gap-5">
        <View className="mb-5">
          <Text className="text-4xl font-robotoRegular text-center">
            Let's sign you in
          </Text>
        </View>
        <View className="flex w-full items-center justify-center">
          <CustomButton
            icon={icons.google}
            title="Continue with Google"
            outline
          />
          <CustomButton
            icon={icons.facebook}
            title="Continue with Facebook"
            outline
          />
          <CustomButton
            icon={icons.apple}
            title="Continue with Apple"
            outline
          />
        </View>
        <View className="flex items-center justify-center flex-row gap-2 mb-5">
          <View className="w-[40%] bg-gray-300 h-[1px]" />
          <Text className="text-lg mx-2">Or</Text>
          <View className="w-[40%] bg-gray-300 h-[1px]" />
        </View>
        <View className="w-full">
          <CustomButton title="Sign in with password" />
        </View>
      </View>
      <View className="items-center flex flex-row justify-center gap-1 mb-2">
        <Text>Don't have an account?</Text>
        <Link href="/(auth)/sign-up" className="text-[#DE8D13]">
          Sign Up
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
