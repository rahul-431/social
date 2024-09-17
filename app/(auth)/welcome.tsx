import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const OnBoarding = () => {
  return (
    <SafeAreaView className="items-center justify-center flex-1">
      <View>
        <Text className="text-3xl">This is the welcome page</Text>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
