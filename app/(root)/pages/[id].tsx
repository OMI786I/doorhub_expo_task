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
import Feather from "@expo/vector-icons/Feather";
import { CustomHeader } from "@/component/CustomHeader";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
const DetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [detailsData, setDetailsData] = useState<Data | null>(null);
  const [selectHome, setSelectHome] = useState<boolean>(false);
  const [selectOffice, setSelectOffice] = useState<boolean>(false);
  const [selectVila, setSelectVila] = useState<boolean>(false);

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
      <SafeAreaView className="bg-[#f9f9f9]">
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
          <View className="bg-white -mt-10 w-[90%] mx-auto p-4 rounded-xl">
            <CustomHeader title="Type of Property" />
            <View className="flex-row justify-around  mt-6">
              <View>
                <TouchableOpacity
                  onPress={() => setSelectHome(!selectHome)}
                  className={
                    selectHome
                      ? "p-5 border border-[#6759ff] bg-[#6759ff] rounded-2xl"
                      : "p-5 border border-[#D1D3D4] rounded-2xl"
                  }
                >
                  <Feather
                    name="home"
                    size={34}
                    color={selectHome ? "#ffffff" : "#D1D3D4"}
                  />
                </TouchableOpacity>
                <Text className="text-center mt-1">Home</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => setSelectOffice(!selectOffice)}
                  className={
                    selectOffice
                      ? "p-5 border border-[#6759ff] bg-[#6759ff] rounded-2xl"
                      : "p-5 border border-[#D1D3D4] rounded-2xl"
                  }
                >
                  <FontAwesome5
                    name="building"
                    size={34}
                    color={selectOffice ? "#ffffff" : "#D1D3D4"}
                  />
                </TouchableOpacity>
                <Text className="text-center mt-1">Office</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => setSelectVila(!selectVila)}
                  className={
                    selectVila
                      ? "p-5 border border-[#6759ff] bg-[#6759ff] rounded-2xl"
                      : "p-5 border border-[#D1D3D4] rounded-2xl"
                  }
                >
                  <Entypo
                    name="shop"
                    size={34}
                    color={selectVila ? "#ffffff" : "#D1D3D4"}
                  />
                </TouchableOpacity>
                <Text className="text-center mt-1">Vila</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
};

export default DetailsPage;
