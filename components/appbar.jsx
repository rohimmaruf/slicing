import { View } from "react-native"


const Appbar = () => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 20
        }}>
            <Image
                source={require('../assets/images/hamburgMenu.png')}
                style={{
                    width: 25,
                    height: 15,
                    marginHorizontal: 10,

                }}
            />
            <Image
                source={require('../assets/images/profil.png')}
                style={{
                    width: 45,
                    height: 45
                }}
            />
        </View>
    )
}

export default Appbar