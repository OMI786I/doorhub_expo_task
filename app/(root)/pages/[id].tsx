import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  ColorValue,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { data, Data } from "@/constants/data";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { CustomHeader } from "@/component/CustomHeader";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import CustomTitle from "@/component/CustomTitle";
const DetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [detailsData, setDetailsData] = useState<Data | null>(null);
  const [selectHome, setSelectHome] = useState<boolean>(false);
  const [selectOffice, setSelectOffice] = useState<boolean>(false);
  const [selectVila, setSelectVila] = useState<boolean>(false);
  const [numberUnits, setNumberUnits] = useState<number>(0);
  const [bedRooms, setBedRooms] = useState<number>(0);

  useEffect(() => {
    if (id) {
      const response = data.find((res) => res.id === Number(id)) || null;
      setDetailsData(response);
    }
  }, [id]);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
          {/**type of property */}
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
          {/**number of units and bedrooms */}

          <View className="bg-white mt-5 w-[90%] mx-auto p-4 rounded-xl">
            <View className="flex-row justify-between">
              <Text className="text-lg">Number of Units</Text>
              <View className="flex-row items-center gap-3">
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor={"#6759ff"}
                  onPress={() =>
                    setNumberUnits((prev) => (prev > 0 ? prev - 1 : 0))
                  }
                  className="p-2 border border-[#D1D3D4] rounded-2xl"
                >
                  <AntDesign name="minus" size={18} color="black" />
                </TouchableHighlight>
                <Text>{Number(numberUnits)}</Text>
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor={"#6759ff"}
                  onPress={() =>
                    setNumberUnits((prev) => (prev < 50 ? prev + 1 : 50))
                  }
                  className="p-2 border border-[#D1D3D4] rounded-2xl"
                >
                  <AntDesign name="plus" size={18} color="black" />
                </TouchableHighlight>
              </View>
            </View>
            <View className="flex-row justify-between border-t-[0.2px] mt-4 py-4">
              <Text className="text-lg">Number of Bedrooms</Text>
              <View className="flex-row items-center gap-3">
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor={"#6759ff"}
                  onPress={() =>
                    setBedRooms((prev) => (prev > 0 ? prev - 1 : 0))
                  }
                  className="p-2 border border-[#D1D3D4] rounded-2xl"
                >
                  <AntDesign name="minus" size={18} color="black" />
                </TouchableHighlight>
                <Text>{Number(bedRooms)}</Text>
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor={"#6759ff"}
                  onPress={() =>
                    setBedRooms((prev) => (prev < 50 ? prev + 1 : 50))
                  }
                  className="p-2 border border-[#D1D3D4] rounded-2xl"
                >
                  <AntDesign name="plus" size={18} color="black" />
                </TouchableHighlight>
              </View>
            </View>
          </View>
          {/* Sticky Footer */}
          <View style={styles.footer} className="flex-col gap-4 justify-center">
            <View className="flex-row justify-between">
              <View className="flex-row gap-2">
                <Text className="text-gray-400">Total:</Text>
                <Text className="font-bold">USD {detailsData.money}</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={toggleModal}
                  className="flex-row items-center gap-1"
                >
                  <Text className="text-orange-500">Bill Details</Text>
                  <AntDesign name="up" color={"#f97316"} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              className="
            flex-row gap-4 justify-center"
            >
              <TouchableOpacity
                className="bg-[#fcfcfc] border  border-gray-300"
                style={styles.button}
              >
                <Text className="text-black">Save Draft</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#6759ff]" style={styles.button}>
                <Text className="text-white">Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Overlay Modal */}
          <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
            <View className="bg-white rounded-xl p-5">
              {/**top part */}
              <View className="flex-row justify-between ">
                <View className="w-[80%]">
                  <CustomHeader title="Select your Date & Time?" />
                </View>

                <TouchableOpacity
                  onPress={toggleModal}
                  className="p-2 border border-gray-200 bg-gray-200 rounded-full"
                >
                  <AntDesign name="close" />
                </TouchableOpacity>
              </View>
              {/**middle part */}
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flexGrow: 1,
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  footer: {
    padding: 20,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 50,
    marginTop: 10,
  },

  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default DetailsPage;
