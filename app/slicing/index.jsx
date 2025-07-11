import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";


const listData = [
  {
    id: 1,
    kamar: 'Super Twin',
    detail: 'Tersedia 3 kamar lagi',
    harga: 1_000_000,
    gambar: require('../slicing/villa.png'),
    rating: 3,
  },
  {
    id: 2,
    kamar: 'Deluxe Double',
    detail: 'Tersedia 3 lagi',
    harga: 2_000_000,
    gambar: require('../slicing/villa2.png'),
    rating: 4,
  },
  {
    id: 3,
    kamar: 'Superior Quen',
    detail: 'Tersedia 3 kamar lagi',
    harga: 3_000_000,
    gambar: require('../slicing/villa3.png'),
    rating: 5,
  },
  {
    id: 4,
    kamar: 'Executive Quen',
    detail: 'Tersedia 3 kamar lagi',
    harga: 4_000_000,
    gambar: require('../slicing/villa.png'),
    rating: 1
  }
]



const Slicing = () => {
  const { container, containKamar, imgVilla } = style;

  return (
    <>
      <View style={container} >
        <Text
          style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10, marginBottom: 10 }}
        >
          Pilih Kamar
        </Text>
        {listData.map((room) => {

          console.log(harga);


          const { id, kamar, detail, harga, gambar, rating } = room;
          const formatNumber = new Intl.NumberFormat('id-EN').format(harga)
          return (

            <View style={containKamar} key={id}>
              <View
                style={{
                  flexDirection: "row",
                  gap: 20,
                }}
              >
                <Image
                  source={gambar}
                  style={imgVilla}
                />
                <View style={{ gap: 16 }}>
                  <Text style={{ fontSize: 14, fontWeight: 'semiBold' }}>
                    {kamar}
                  </Text>
                  <View style={{ flexDirection: 'row', gap: 5 }}>
                    <Ionicons name='location' color='#7B22D3' />
                    <Text style={{ fontSize: 8, color: "#7B22D3" }}>
                      {detail}
                    </Text>

                  </View>
                  <View style={{ flexDirection: "row" }}>
                    {[...Array(5)].map((_, i) => (
                      <Ionicons 
                        key={i}
                        name="star"
                        color={i < rating ? "#FFCE31" : "#ACACAC"}

                      />
                    ))}
                  </View>
                </View>
              </View>
              <View style={{ justifyContent: 'center', paddingHorizontal: 10 }}>
                <Text style={{ fontWeight: 'semibold', fontSize: 12, color: '#7B22D3' }}>
                  Rp. {formatNumber}
                </Text>
              </View>
            </View>
          )
        })}
      </View>
    </>
  );
};
export default Slicing;

const style = StyleSheet.create(
  {
    container: {
      marginHorizontal: 10,
      gap: 15
    },
    containKamar: {
      // borderWidth: 2,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    imgVilla: {
      width: 120,
      height: 90,
      borderRadius: 20
    }
  }
)