import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Formulir = () => {

    const router = useRouter();

    const {container, title, input} = styles; 

    // Variable State
    const [nama, setNama] = useState(``)
    const [deskripsi, setDeskripsi] = useState(``)
    const [jumlah, setJumlah] = useState(``)

    const [data, setData] = useState([]);

    const handleSimpan = () => {

        console.log(nama,deskripsi,jumlah)

        if(!nama || !deskripsi || !jumlah) return;

        const itemBaru = {
            id: Date.now().toString(),
            nama,
            deskripsi,
            jumlah,
        };

        setData([...data, itemBaru]);
        setNama('');
        setDeskripsi('');
        setJumlah('');

    }

    return (
        <View style={container}>
            <Text>Halaman Input </Text>
            <Button title="Kembali" onPress={() => router.back()}/>
            <Text style={title}>Form Produk</Text>
            <TextInput
                style={input}
                placeholder="Masukan Nama"
                value={nama}
                onChange={setNama}
            />
            <TextInput
                style={input}
                placeholder="Masukan Deskripsi"
                value={deskripsi}
                onChange={setDeskripsi}
            />
            <TextInput
                style={input}
                placeholder="Masukan Jumlah"
                value={jumlah}
                onChange={setJumlah}
            />
            <Button
                title="Simpan"
                onPress={handleSimpan}
            />

        </View>
    )
}

export default Formulir;

const styles = StyleSheet.create(
    {
        container: {
            padding: 20,
            justifyContent: 'center',
            backgroundColor: '#f9f9f9',
        },
        title: {
            fontSize: 24,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 12,
            marginBottom: 12,
        },
        input: {
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            padding: 12,
            marginBottom: 16,
            backgroundColor: '#fff'
        }
    }
)