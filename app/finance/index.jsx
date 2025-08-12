import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useEffect } from "react"
import { Text, View } from "react-native"
import "../global.css"

const Finance = () => {

    const router = useRouter();
    
    useEffect( () => {
        const timeout = setTimeout( () => {
            router.replace('/finance/screen/home');
        },3000 );
        return () => clearTimeout(timeout);
    } );

    return(
        <View
            className = "flex-1 items-center justify-center bg-black"
        >
            <Ionicons
               name="cash-outline"
               color={'white'}
               size={80}
            />
            <Text
            className = "text-white font-bold text-2x1"
            >
                Finance Tranck
            </Text>
        </View>
    )
}

export default Finance