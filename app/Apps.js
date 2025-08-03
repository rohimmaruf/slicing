import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";




const HomeScreen = () => {

    const { container } = style;

    const router = useRouter();

    return (
        <View style={container}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontWeight: 'bold',

                        fontSize: 30
                    }}
                >
                    Menu
                </Text>
            </View>

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
            <Button
                title="Halaman ScrollView"
                onPress={() => router.push('/scrollview')}
            />
            <Button
                title="Halaman Ticketing"
                onPress={() => router.push('/ticket')}
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