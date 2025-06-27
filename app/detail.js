import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";


const DetailScreen = () => {

    const router = useRouter();

    return (
        <View>
            <Text>
                DetailScreen
            </Text>
            <Button title="Kembali" onPress={() => router.back()}/>
        </View>
    )
}

export default DetailScreen;