import { Image, Text, View } from "react-native"

const Appbar = ({title}) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingTop: 15,
            backgroundColor: '#7B22D3'
        }}>
            <Image
                source={require('../../assets/images/hamburgMenu.png')}
                style={{
                    width: 25,
                    height: 15,
                    marginHorizontal: 10,

                }}
            />
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'white'
                }}
            >
                {title}
            </Text>
            <Image
                source={require('../../assets/images/profil.png')}
                style={{
                    width: 45,
                    height: 45
                }}
            />
        </View>

    )
}

export default Appbar