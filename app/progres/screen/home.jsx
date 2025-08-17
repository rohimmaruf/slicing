import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";



const Home = () => {

    const target = 600000
    const hasil = 300000
    const hitung = hasil/target*100
    console.log(hitung);
    

    return (
        <View className="m-20 border-2 w-fit ">
            <Text className="font-bold">
                Events
            </Text>
            <View className="mt-2 flex-row border-2 w-full">
                <Ionicons
                    name="trophy-outline"
                    size={60}
                />
                <View className="w-full">
                    <Text className="mr-4 font-bold">
                        Coding
                    </Text>
                    {/* Progres bar */}
                    <View 
                        className="bg-gray-300 h-4 rounded-full my-2 "
                    >
                        <View 
                            className="bg-blue-500 h-4 rounded-full"
                            style = {{ width: `${hitung}%` }}
                        />
                    </View>
                    {/* Persentasi */}
                    <Text>{hasil}/600.000</Text>
                </View>

            </View>
        </View>
    );
};

export default Home;
