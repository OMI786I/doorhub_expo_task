import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ImageSourcePropType,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Modal from "react-native-modal";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { data, Data } from "@/constants/data";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { CustomHeader } from "@/component/CustomHeader";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import { addServices } from "@/servicesSlice";
import { useDispatch } from "react-redux";
interface Booking {
  id: number;
  title: string;
  type: string;
  unitNumber: number;
  bedroomsNumber: number;
  description?: string;
  time: Date | string;
  icons: ImageSourcePropType;
}

const DetailsPage: React.FC = () => {
  const [bookingData, setBookingData] = useState<Booking[]>([]);
  const [description, setDescription] = useState<string>("");

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
  const toggleModal = () => setModalVisible(!isModalVisible);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const showTimePicker = () => setTimePickerVisibility(true);
  const hideTimePicker = () => setTimePickerVisibility(false);
  const dispatch = useDispatch();
  const handleDateConfirm = (date: Date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const handleTimeConfirm = (time: Date) => {
    if (selectedDate) {
      const combinedDate = new Date(selectedDate);
      combinedDate.setHours(time.getHours());
      combinedDate.setMinutes(time.getMinutes());
      setSelectedDate(combinedDate);
    }
    setSelectedTime(time);
    hideTimePicker();
  };

  const handleBooking = () => {
    if (!detailsData) {
      alert("Error: Missing property details.");
      return;
    }

    const selectedType = selectHome
      ? "Home"
      : selectOffice
      ? "Office"
      : selectVila
      ? "Vila"
      : "";

    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }

    if (!selectedTime) {
      alert("Please select a time.");
      return;
    }

    if (!selectedType) {
      alert("Please select a property type (Home, Office, or Vila).");
      return;
    }

    if (numberUnits <= 0) {
      alert("Please select at least one unit.");
      return;
    }

    if (bedRooms <= 0) {
      alert("Please select at least one bedroom.");
      return;
    }

    const newBooking: Booking = {
      id: Number(id),
      title: detailsData.title,
      type: selectedType,
      unitNumber: numberUnits,
      bedroomsNumber: bedRooms,
      time: selectedDate.toISOString(),
      description: description,
      icons: detailsData.icons,
    };

    setBookingData([newBooking]);
    dispatch(addServices(newBooking));
  };
  console.log(detailsData);
  useEffect(() => {
    if (bookingData.length > 0) {
      console.log("Booking Data: ", bookingData);
      alert("Booking successful!");
    }
  }, [bookingData]);

  if (!detailsData) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView pointerEvents="box-none" className="bg-[#f9f9f9] flex-1">
      <View className="flex-1">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          {/** Top Image */}
          <View className="relative">
            <Image
              source={detailsData.image}
              className="w-full h-96"
              resizeMode="cover"
            />
            <View className="absolute px-6 py-10">
              <TouchableOpacity className="mb-14" onPress={() => router.back()}>
                <AntDesign name="arrowleft" size={30} />
              </TouchableOpacity>
              {/** Rating */}
              <View className="bg-[#FB9450] p-2 z-10 flex-row items-center gap-1 w-1/4 rounded-xl">
                <AntDesign name="star" size={12} color="white" />
                <Text className="text-white">{detailsData.rating}</Text>
              </View>
              {/** Title */}
              <View className="w-full mt-6">
                <Text className="font-bold text-5xl text-white">
                  AC Regular Service
                </Text>
              </View>
            </View>
          </View>

          {/** Type of Property */}
          <View className="bg-white -mt-10 w-11/12 mx-auto p-4 rounded-xl">
            <CustomHeader title="Type of Property" />
            <View className="flex-row justify-around mt-6">
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setSelectHome(true);
                    setSelectOffice(false);
                    setSelectVila(false);
                  }}
                  className={`p-5 border ${
                    selectHome
                      ? "border-[#6759ff] bg-[#6759ff]"
                      : "border-[#D1D3D4]"
                  } rounded-2xl`}
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
                  onPress={() => {
                    setSelectHome(false);
                    setSelectOffice(true);
                    setSelectVila(false);
                  }}
                  className={`p-5 border ${
                    selectOffice
                      ? "border-[#6759ff] bg-[#6759ff]"
                      : "border-[#D1D3D4]"
                  } rounded-2xl`}
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
                  onPress={() => {
                    setSelectHome(false);
                    setSelectOffice(false);
                    setSelectVila(true);
                  }}
                  className={`p-5 border ${
                    selectVila
                      ? "border-[#6759ff] bg-[#6759ff]"
                      : "border-[#D1D3D4]"
                  } rounded-2xl`}
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

          {/** Number of Units and Bedrooms */}
          <View className="bg-white mt-5 w-11/12 mx-auto p-4 rounded-xl">
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

          {/** Description */}
          <View className="bg-white mt-5 w-11/12 mx-auto p-4 rounded-xl">
            <CustomHeader title="Description" />
            <TextInput
              multiline={true}
              style={{
                textAlignVertical: "top",
                height: 200,
                textAlign: "left",
              }}
              className="border border-gray-300 rounded-xl p-3 mt-2 "
              placeholder="Enter any additional details..."
              value={description}
              onChangeText={setDescription}
            />
          </View>

          {/** Overlay Modal */}
          <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
            <View className="h-full justify-end">
              <View className="bg-white flex-col rounded-xl p-5">
                <View className="flex-row justify-between">
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

                <View className="items-start mt-9">
                  <TouchableOpacity
                    onPress={showDatePicker}
                    className="bg-[#ffbc99] p-4 rounded-2xl w-full"
                  >
                    <View className="flex-row gap-5 items-center">
                      <View>
                        <AntDesign name="carryout" size={30} color="black" />
                      </View>
                      <View>
                        <Text className="text-gray-500">DATE</Text>
                        {selectedDate ? (
                          <Text className="mt-2 text-lg">
                            Selected Date: {selectedDate.toDateString()}
                          </Text>
                        ) : (
                          <Text className="mt-2 text-lg">Select your Date</Text>
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>

                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleDateConfirm}
                    onCancel={hideDatePicker}
                  />
                </View>

                {/** Time Picker */}
                <View className="mt-5">
                  <TouchableOpacity
                    onPress={showTimePicker}
                    className="bg-[#b5e4ca] p-4 rounded-2xl "
                  >
                    <View className="flex-row gap-5 items-center">
                      <View>
                        <AntDesign name="clockcircle" size={30} color="black" />
                      </View>
                      <View>
                        <Text className="text-gray-500">TIME</Text>
                        {selectedDate ? (
                          <Text className="mt-2 text-lg">
                            Selected Time:
                            {selectedTime ? selectedTime.toTimeString() : ""}
                          </Text>
                        ) : (
                          <Text className="mt-2 text-lg">Select your Time</Text>
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>
                  <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleTimeConfirm}
                    onCancel={hideTimePicker}
                  />
                </View>
              </View>
              <View className="px-5 py-4 bg-white border-t  border-gray-300">
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
                      <Text className="text-orange-500">View Details</Text>
                      <AntDesign name="down" color={"#f97316"} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View className="flex-row gap-4 justify-center mt-6">
                  <TouchableOpacity
                    onPress={toggleModal}
                    className="bg-[#efefef] p-4 w-full px-11 rounded-xl"
                  >
                    <Text className="text-black text-center">Continue</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>

      {/** Sticky Footer */}
      <View
        pointerEvents="box-none"
        className="px-5 py-4 bg-white border-t border-gray-300"
      >
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
        <View className="flex-row gap-4 justify-center mt-6">
          <TouchableOpacity className="bg-[#fcfcfc] border border-gray-300 p-4 rounded-xl px-11">
            <Text className="text-black">Save Draft</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#6759ff] p-4 px-11 rounded-xl"
            onPress={handleBooking}
          >
            <Text className="text-white">Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsPage;
