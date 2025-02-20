import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { data, Data } from "@/constants/data";
import AntDesign from "@expo/vector-icons/AntDesign";
import { goBack } from "expo-router/build/global-state/routing";
const DetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [detailsData, setDetailsData] = useState<Data | null>(null);

  useEffect(() => {
    if (id) {
      const response = data.find((res) => res.id === Number(id)) || null;
      setDetailsData(response);
    }
  }, [id]);
  console.log(detailsData);
  if (!detailsData) {
    return <Text>Loading...</Text>;
  } else
    return (
      <SafeAreaView>
        <ScrollView>
          {/**top image */}
          <View className="relative">
            <Image
              source={detailsData.image}
              className="w-[100%] h-96"
              resizeMode="cover"
            />
            <View className="absolute px-6 py-10">
              <TouchableOpacity className="mb-14" onPress={() => router.back()}>
                <AntDesign name="arrowleft" size={30} />
              </TouchableOpacity>

              {/**rating */}
              <View className="bg-[#FB9450] p-2 z-10 flex-row items-center gap-1 w-[23%] rounded-xl">
                <AntDesign name="star" size={12} color="white" />
                <Text className="text-white">{detailsData.rating}</Text>
              </View>
              {/**title */}
              <View className="w-[100%] mt-6">
                <Text className="font-bold text-5xl text-white">
                  AC Regular Service
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
};

export default DetailsPage;
