import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ButtonProps } from "@/types/type";

const CustomButton = ({
  title,
  onPress,
  outline = false,
  icon,
}: ButtonProps) => {
  return (
    <View className="px-5 w-full mb-5">
      <TouchableOpacity
        onPress={onPress}
        className={`${
          outline ? "bg-none border border-gray-300" : "bg-[#DE8D13]"
        } p-3 flex flex-row items-center justify-center w-full rounded-lg gap-2`}
      >
        {icon && (
          <Image
            source={icon}
            className="w-[24px] h-[24px]"
            resizeMode="contain"
          />
        )}
        <Text
          className={`${
            outline ? "text-black" : "text-white"
          } text-lg font-robotoMedium`}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
