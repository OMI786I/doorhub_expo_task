import { View, Text } from "react-native";
import React from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      navigation.openDrawer();
    }, [navigation])
  );

  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
};

export default Settings;
