import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";




const HomeScreen = () => {

    const router = useRouter();

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button 
                title="Produk" 
                onPress={() => router.push('/produk')}
            />
            <Button 
                title="User" 
                onPress={() => router.push('/user')}
            />
            <Button 
                title="Halaman Input" 
                onPress={() => router.push('/form')}
            />
            <Button 
                title="Halaman slicing" 
                onPress={() => router.push('/slicing')}
            />
           
        </View>
    );
}


export default HomeScreen;