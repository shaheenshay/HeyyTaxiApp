import { Ride } from "@/types/type";
import { Image, Text, View } from "react-native";

const RideCard = ({
  ride: {
    destination_address,
    destination_latitude,
    destination_longitude,
    origin_address,
    created_at,
    ride_time,
    driver,
    payment_status,
  },
}: {
  ride: Ride;
}) => (
  <View className="flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3">
    <View className="flex flex-row items-center justify-between p-3">
        <View className="flex flex-row items-center justify-between">
            <Image 
                source={{
                    uri: `https://maps.geoapify`
                }}
            />
        </View>
    </View>
    <Text className="text-3xl">{driver.first_name}</Text>
  </View>
);

export default RideCard;
