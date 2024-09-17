import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonProps } from "@/types/type";

const CustomButton = ({ title, onPress }: ButtonProps) => {
  return (
    <View className="px-5 w-full mb-5">
      <TouchableOpacity
        onPress={onPress}
        className="bg-[#DE8D13] p-3 flex items-center justify-center w-full rounded-lg"
      >
        <Text className="text-white text-lg font-bold">{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
