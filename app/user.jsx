import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const User = () => {

    const router = useRouter();

    return (
        <View>
            <Text>Halaman User</Text>
            <Button 
                title="Kembali"
                onPress={router.back}
            />
        </View>
    )
}

export default User;