import { Ionicons } from "@expo/vector-icons"
import { Button, Image, Text, View } from "react-native"
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
            <Button
                color={'purple'}
                title='Edit Profil'
            />
            {/* Contain $ di bawah */}
            <View
                style={{
                    marginTop: 35,
                    // borderWidth: 2,
                    flexDirection:'row',
                    width: 400,
                    height: 60,
                    elevation: 2,
                    borderRadius: 30
                }}
            >
                <Ionicons
                    name="settings-outline"
                    color={'purple'}
                    size={30}
                />
                <Text>
                    Setting
                </Text>
                <Ionicons
                    name="arrow-forward-circle-outline"
                    color={'purple'}
                    size={30}
                />
            </View>
            </View>
        </View>
    )
}

export default Profil