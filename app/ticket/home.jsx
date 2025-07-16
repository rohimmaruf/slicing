import { Image, StyleSheet, Text, View } from "react-native";

const listMenu = [
    {
        id: 1,
        img : require('../../assets/images/splash.png'),
        label : 'Bioskop'
    },
    {
        id: 2,
        img : require('../../assets/images/kereta.png'),
        label : 'Travel'
    },
    {
        id: 3,
        img : require('../../assets/images/plane.png'),
        label : 'Pesawat'
    },
    {
        id: 4,
        img : require('../../assets/images/hotel.png'),
        label : 'Hotel'
    },
    {
        id: 5,
        img : require('../../assets/images/wisata.png'),
        label : 'Wisata'
    },
    {
        id: 6,
        img : require('../../assets/images/spot.png'),
        label : 'Spot'
    },
    
]

const Home = () => {
    const {textContain2, contain3} = style
    return (
        // Container Utama
        <View style={{
            backgroundColor: '#7B22D3',
            flex: 1,
            paddingHorizontal: 20,

        }}>
            {/* COntain 1 */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 20
            }}>
                <Image
                    source={require('../../assets/images/hamburgMenu.png')}
                    style={{
                        width: 25,
                        height: 15,
                        marginHorizontal: 10,

                    }}
                />
                <Image
                    source={require('../../assets/images/profil.png')}
                    style={{
                        width: 45,
                        height: 45
                    }}
                />
            </View>
            {/* Contain 2 */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View >
                    <Text style={textContain2}>
                        DISKON 30%
                    </Text>
                    <Text style={textContain2}>
                        Dengan Bunga
                    </Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 50
                    }}>
                        0%
                    </Text>
                </View>
                <Image
                    source={require('../../assets/images/caracter.png')}
                    style={{
                        height: 156,
                        width: 171
                    }}
                />
            </View>
            {/* Contain 3 */}
            <View style={{ alignItems: 'center'}}>
                <View style={contain3}>
                {/* Contain 3.1 */}
            <View style={
                {
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    marginHorizontal: 40,
                    

                }
                }>
                <Image
                    source={require('../../assets/images/Wallet.png')}
                    style={{
                        color: '#FFFFFF',
                        width: 40,
                        height: 40
                    }}
                />
                <Text style={{color: '#7B22D3', fontWeight: 'bold'}}>Rp 5.000.000</Text>
                {/* contain 3.2 */}
            </View>
            <View style={{
                flexDirection: 'row', 
                alignItems:'center',
                marginHorizontal: 40,
                gap: 10
                
                }}>
                <Image
                    source={require('../../assets/images/scan.png')}
                    style={{
                        width: 40,
                        height: 40
                    }}
                />
                <Text style={{color:'#7B22D3', fontWeight: 'bold'}}>SCAN</Text>
            </View>
            </View>
            {/* Contain 4 */}
            <View style={{}}>
                <Image
                    source={require('../../assets/images/hotel.png')}
                />

            </View>
            </View>



        </View>
    )
}

export default Home;

const style = StyleSheet.create(
    {
        textContain2: {
            color : 'white',
            fontWeight: 'bold'
        },
        contain3 : {
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            width:400,
            height: 90,
            borderRadius: 10,
            justifyContent: 'space-between'
        }
    }
)