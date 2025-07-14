import { Image, StyleSheet, Text, View } from "react-native";

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
            <View style={contain3}>
            <View >
                <Image
                    source={require('../../assets/images/Wallet.png')}
                    style={{
                        color: '#FFFFFF',
                    }}
                />
                <Text style={{color: '#7B22D3', fontWeight: 'bold'}}>Rp 5.000.000</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <Image
                    source={require('../../assets/images/scan.png')}
                />
                <Text>SCAN</Text>
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
            flexDirection: 'row'
        }
    }
)