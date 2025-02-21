import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { Rating } from "react-native-ratings";

import Modal from "react-native-modal";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import images from "@/constants/images";
import icons from "@/constants/icons";

const refer = () => {
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => router.back()} className="p-4 bg-white">
        <AntDesign name="left" size={24} />
      </TouchableOpacity>
      <View className="bg-white flex-col gap-2 justify-center p-4 h-[85%] w-[90%] mx-auto mt-2 rounded-xl  ">
        <View>
          <Image resizeMode="cover" source={images.referImage} />
        </View>
        <View className="justify-center  mt-9">
          <Text className="font-bold text-4xl text-center">
            Refer a Friend & Get 50% off
          </Text>
          <Text className="text-[#535763] mt-14">
            * Get 50% off upto $20 after your friend’s 1st order
          </Text>
          <Text className="text-[#535763] mt-2">
            * Your friend gets 50% off on their 1st order
          </Text>
        </View>
        <View className="justify-center items-center">
          <TouchableOpacity
            onPress={toggleModal}
            className="bg-[#6759FF] p-4 w-[50%] px-11 rounded-xl mt-9"
          >
            <Text className="text-white text-center">Refer a friend</Text>
          </TouchableOpacity>
          {/**Modal */}

          <Modal className="bg-[#f9f9f9]" isVisible={isModalVisible}>
            <View className="bg-white p-8 relative rounded-xl">
              <TouchableOpacity
                onPress={toggleModal}
                className="p-2 border border-gray-200 bg-gray-200 rounded-full absolute right-2 top-2 "
              >
                <AntDesign name="close" />
              </TouchableOpacity>

              <View className="items-center">
                <Image source={icons.logo} />
                <Text className="font-bold text-xl mt-5 mb-3">
                  Rate Door Hub App
                </Text>
                <Text className="text-center text-[#535763]">
                  Your feedback will help us to make improvements
                </Text>
              </View>
              <View className="mt-5 ">
                <Rating
                  type="star"
                  ratingCount={5}
                  imageSize={30}
                  showRating={false}
                />
              </View>
              <View className="flex-row justify-center gap-4 mt-10">
                <TouchableOpacity className="p-4 border border-gray-300 rounded-xl">
                  <Text>No Thanks</Text>
                </TouchableOpacity>
                <TouchableOpacity className="p-4 border border-gray-300 rounded-xl bg-[#6759FF]">
                  <Text className="text-white">Rate on Play Store</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default refer;
