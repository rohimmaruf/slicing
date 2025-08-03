import { Ionicons } from "@expo/vector-icons"
import { Image, Text, View } from "react-native"
import Appbar from "./appbar"




const Profil = () => {
    return (
        <View>
            <Appbar title={'Profil'}/>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',

                }}
            >
            <Image
                style={{
                    marginTop: 42,
                }}
                source={require('../../assets/images/profil.png')}
            />
            <Text
                style={{
                    marginTop: 14,
                    marginBottom: 14,
                    fontWeight: 'bold',
                    fontSize: 20
                }}
            >
                John Doe
            </Text>
            {/* Contain $ di bawah */}
            <View
                style={{
                    marginTop: 35,
                    // borderWidth: 2,
                    flexDirection:'row',
                    width: 400,
                    height: 60,
                    elevation: 6,
                    backgroundColor: '#fff',
                    borderRadius: 16,
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 12

                }}
            >
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <Ionicons
                    name="settings-outline"
                    color={'#7B22D3'}
                    size={30}
                />
                <Text
                    style={{
                        paddingTop: 4,
                        paddingLeft: 10,
                        fontWeight:'bold'
                    }}
                >
                    Setting
                </Text>
                </View>
                <Ionicons
                    name="arrow-forward-circle-outline"
                    color={'#7B22D3'}
                    size={30}
                />
            </View>
            
            </View>
        </View>
    )
}

export default Profil