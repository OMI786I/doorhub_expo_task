import { ThemeContext } from "@/app/Context/ThemeContext";
import { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import images from "@/constants/images";
import Search from "@/component/Search";
import AntDesign from "@expo/vector-icons/AntDesign";
import Category from "@/component/Category";
import Offer from "@/component/Offer";
import ApplianceRepair from "@/component/ApplianceRepair";

export default function HomeScreen() {
  const [defaultColor, setDefaultColor] = useState("#f9f9f9");
  const [defaultTextColor, setDefaultTextColor] = useState("#000000");
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    if (isDark) {
      setDefaultColor("#0f1621");
      setDefaultTextColor("#ffffff");
    } else {
      setDefaultColor("#f9f9f9");
      setDefaultTextColor("#000000");
    }
  }, [isDark]);

  // List Header Component (Greeting & Category Section)
  const renderHeader = () => (
    <View>
      {/* Greeting & Search Bar */}
      <View
        className={
          isDark
            ? "bg-[#18202e] rounded-xl w-[91%] mx-auto p-8 mt-6"
            : "bg-[#ffffff] rounded-xl w-[91%] mx-auto p-8 mt-6"
        }
      >
        <Text
          className={
            isDark ? "text-lg text-[#ffffff]" : "text-lg text-[#666c89]"
          }
        >
          HELLO OMI 👋
        </Text>
        <Text
          className={
            isDark
              ? "text-[#ffffff] text-4xl my-7 font-bold"
              : "text-[#172b4d] text-4xl my-7 font-bold"
          }
        >
          What you are looking for today
        </Text>
        <Search />
      </View>

      {/* Category Section */}
      <View
        className={
          isDark
            ? "bg-[#18202e] rounded-xl w-[91%] mx-auto p-8 mt-6"
            : "bg-[#ffffff] rounded-xl w-[91%] mx-auto p-8 mt-6"
        }
      >
        <View className="flex-row justify-between">
          <TouchableOpacity>
            <Image source={images.category1} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.category2} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.category3} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.seeAll} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  // List Footer Component (Offers)
  const renderFooter = () => (
    <View>
      <View
        className={
          isDark
            ? "bg-[#18202e] rounded-xl w-[91%] mx-auto py-8 px-5 mt-6"
            : "bg-[#ffffff] rounded-xl w-[91%] mx-auto py-8 px-5 mt-6 "
        }
      >
        <Offer />
      </View>
      <View
        className={
          isDark
            ? "bg-[#18202e] rounded-xl w-[91%] mx-auto py-8 px-5 mt-6"
            : "bg-[#ffffff] rounded-xl w-[91%] mx-auto py-8 px-5 mt-6 "
        }
      >
        <ApplianceRepair />
      </View>
    </View>
  );

  // Render Static Service Section
  const renderService = ({ item }: { item: { id: string; title: string } }) => (
    <View
      className={
        isDark
          ? "bg-[#18202e] rounded-xl w-[91%] mx-auto py-8 px-5 mt-6"
          : "bg-[#ffffff] rounded-xl w-[91%] mx-auto py-8 px-5 mt-6"
      }
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          <View
            style={{
              width: 4,
              height: 20,
              backgroundColor: "#CABDFF",
              marginRight: 10,
              borderRadius: 20,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: defaultTextColor,
            }}
          >
            {item.title}
          </Text>
        </View>
        <TouchableOpacity className="flex-row items-center gap-1 border border-[#EFEFEF] py-3 px-5 rounded-full">
          <Text className={isDark ? "text-[#ffffff]" : "text-[#6F767E]"}>
            See All
          </Text>
          <AntDesign name="right" size={13} color="black" />
        </TouchableOpacity>
      </View>
      <Category />
    </View>
  );

  // Static Data (Only One Entry)
  const services = [{ id: "1", title: "Cleaning Services" }];

  return (
    <SafeAreaView
      className={isDark ? "bg-[#0f1621] flex-1" : "bg-[#f9f9f9] flex-1"}
    >
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderService}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
