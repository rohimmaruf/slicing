import { Ionicons } from "@expo/vector-icons"
import { Image, Text, View } from "react-native"




const Favorite = () => {
    return (
        <View>
            <View>
                {/* Untuk Components App bar */}
                <Text>Favorite</Text>
            </View>
            {/* Contain */}
            <View
                style={{
                    borderRadius: 10,
                    elevation: 40,
                    backgroundColor: '#fff',
                    marginHorizontal: 35
                }}
            >
                {/* Gambar hotel */}
                <View>
                    <Image
                        source={require('../../assets/images/villa1.png')}
                        style={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius:10,
                            width: 410,
                            height: 181,
                        }}
                    />
                </View>
               {/* COntain Tulisan */}
               <View 
                    style={{
                        paddingHorizontal: 16,
                        paddingVertical: 10
                    }}
               >
                 {/* Judul */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text>Hotel 1</Text>
                    <Ionicons
                        name='bookmark'
                        size={20}
                        color='#7B22D3'
                    />
                </View>
                {/* Bintang */}
                <View style={{
                    flexDirection: 'row',
                    paddingTop: 10
                }}>
                    <Ionicons
                        name="star"
                        color={"#FFCE31"}
                        size={20}
                    />
                    <Ionicons
                        name="star"
                        size={20}
                    />
                </View>
                {/* Lokasi & Harga */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 10
                    }}
                >
                    <Ionicons
                        name="location"
                        size={20}
                        color={'#7B22D3'}
                    />
                    <Text
                        style={{
                            color:'#7B22D3',
                            fontWeight: 'bold'
                        }}
                    >
                        Rp. 1.000.000
                    </Text>
                </View>
               </View>
            </View>
        </View>
    )
}

export default Favorite