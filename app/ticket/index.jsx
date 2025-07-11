
import { Button, StyleSheet, Text, View } from "react-native";

const Ticket = () => {
    const {container} = style;
    return (
        <View style={container}>
            <Text style={{fontWeight: 'bold', marginBottom: 10}} >
                Selamat Datang di Halaman Ticket
            </Text>
            <Button
                title="Home"
            />
        </View>
    )
};

export default Ticket;

const style = StyleSheet.create(
    {
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop : 50,
            paddingTop: 300,
            paddingBottom: 300
        }
    }
)