import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

const Progres = () => {
    const router = useRouter();
    
    useEffect( () => {
        const timeout = setTimeout( () => {
            router.replace('/progres/screen/home');
        },2000 );
        return () => clearTimeout(timeout);
    } );

    return(
        <View
            className = "flex-1 items-center justify-center bg-primary"
        >
            <Ionicons
               name="cash-outline"
               color={'white'}
               size={80}
            />
            <Text
            className = "text-white font-bold text-2x1"
            >
                Progres
            </Text>
        </View>
    )
}

export default Progres