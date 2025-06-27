import { Image, Text, View } from "react-native";

const Slicing = () => {
  return (
    <View style={{}}>
      <View
        style={{
          borderWidth: 2,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 20,
          }}
        >
          <View>
            <Image
              source={require('../slicing/villa.png')}
              style={{width:120, height:90, borderRadius: 20}}
            />
          </View>
          <View style={{ gap: 5 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Superior Twin
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Image
                  source={require('../slicing/Location.png')}
                />
              </View>
              <View>
                <Text style={{ fontSize: 12, color: "#7B22D3" }}>
                  Tersedia 3 kamar lagi
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>1</Text>
              <Text>2</Text>
              <Text>3</Text>
              <Text>4</Text>
              <Text>5</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>Rp. 1.000.000</Text>
        </View>
      </View>
    </View>
  );
};

export default Slicing;
