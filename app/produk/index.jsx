import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const dataProduct = [
    {
        id: 1,
        nama: 'Shampoo',
        jumlah : 10,
    },
    {
        id: 2,
        nama: 'Shabuun',
        jumlah : 12,
    },
    {
        id: 3,
        nama: 'Odol',
        jumlah : 16,
    },
]

const Produk = () => {

    const router = useRouter();

    return (
        <View>
            <Text>Halaman Produk</Text>
            <Button title="Kembali" onPress={router.back}/>
            <Text>List Product</Text>
            {dataProduct.map((item) =>{
                const {nama,id,jumlah} = item
                // console.log(item.nama)
                return  (
                <View key={id} >
                    <Text>{nama}</Text>
                    <Text>{jumlah}</Text>
                    <Button
                    title="Lihat Detail"
                    onPress={() => router.push(`/produk/${id}`)}
                    />
                </View>
            )
            })}
        </View>
    )
}

export default Produk;

