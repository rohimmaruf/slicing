import { router } from "expo-router"
import { Button, Image, Text, View } from "react-native"

const Pesanan = () => {
    return (
        // Contain Utama
        <View
            style={{
                justifyContent: 'center',
                flex: 1,
                alignItems: 'center',
                paddingHorizontal: '94'
            }}
        >
            <Image
                source={require('../../assets/images/travel.png')}
                style={{
                    width: 260,
                    height: 213,

                }}
            />
            <View
                style={{
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        fontWeight: 'bold'
                    }}
                >Belum ada Pesanan</Text>
                <Text
                    style={{
                        fontWeight: 'semibold',
                        alignContent: 'center'
                    }}
                >
                    Daftar Pesanan yang telah kamu pesan
                </Text>
                <Text
                    style={{
                        fontWeight: 'semibold',
                        alignContent: 'center'
                    }}
                >
                    akan tampil disini
                </Text>
            </View>
           {/* Button sementara */}
           <Button
                title='Halaman Favorite'
                onPress={() => router.push('ticket/favorite')}
           />
        </View>
    )
}

export default Pesanan