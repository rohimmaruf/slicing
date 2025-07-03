import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";




const HomeScreen = () => {

    const { container } = style;

    const router = useRouter();

    return (
        <View style={container}>
            <Text>
                HomeScreen
            </Text>
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

const style = StyleSheet.create({
    container: {
        padding: 10,
        gap: 10,
    },
})