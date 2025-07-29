import { Ionicons } from "@expo/vector-icons"
import { Image, ScrollView, Text, View } from "react-native"
import Appbar from "./appbar"

const listFavorite = [
    {
        id: 1,
        label: 'Hotel Satu',
        star: 3,
        harga: 1000000,
        image: require('../../assets/images/villa1.png'),
        simpan: true
    },
    
    {
        id: 2,
        label: 'Hotel Dua',
        star: 1,
        harga: 1500000,
        image: require('../../assets/images/villa1.png'),
        simpan: false
    },
    
    {
        id: 3,
        label: 'Hotel Tiga',
        star: 5,
        harga: 2000000,
        image: require('../../assets/images/villa1.png'),
        simpan: true
    },
    
    {
        id: 4,
        label: 'Hotel Empat',
        star: 5,
        harga: 1900000,
        image: require('../../assets/images/villa1.png'),
        simpan: false
    },
    
]



const Favorite = () => {
    return (
        <ScrollView>
             <View 
                style={{
                    gap : 16
                }}
             >
            <Appbar title='Favorite' />
            <View>
                {/* Untuk Components App bar */}
            </View>
            {/* Contain */}
            {listFavorite.map( (data) => {
                const {id, label, star, harga, image, simpan} = data
                const formatNumber = new Intl.NumberFormat('id-EN').format(harga)
                return (
                    <View
                key={id}
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
                        source={image}
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
                    <Text>{label}</Text>
                    <Ionicons
                        name='bookmark'
                        size={20}
                        color= {simpan ? '#7B22D3' : "#ACACAC"}
                    />
                </View>
                {/* Bintang */}
                <View style={{
                    flexDirection: 'row',
                    paddingTop: 10
                }}>
                    {[...Array(5)].map( (_,i) => (
                        <Ionicons
                        name="star"
                        color={i < star ? "#FFCE31" : "#ACACAC" }
                        size={20}
                    />
   
                    ) )}
                    
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
                       Rp. {formatNumber}
                    </Text>
                </View>
               </View>
            </View>
                )
            } )}
        </View>
        </ScrollView>
    )
}

export default Favorite