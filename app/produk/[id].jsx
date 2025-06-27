import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";


const ProdukDetail = () => {

    const {id} = useLocalSearchParams();

    return (
        <Text>Id Product Detail {id}</Text>

    )
}

export default ProdukDetail;