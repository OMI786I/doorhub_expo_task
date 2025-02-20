import { View, Text, ScrollView, Image, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { data, Data } from "@/constants/data";

const DetailsPage: React.FC = () => {
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
          <View>
            <Image
              source={detailsData.image}
              className="w-[100%] h-80"
              resizeMode="cover"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
};

export default DetailsPage;
