import { Image, View } from "react-native";

const Home = () => {
    return (
        <View style={{
            backgroundColor:'#7B22D3', 
            flex:1,
            flexDirection: 'row',
            justifyContent: 'space-between'
            }}>
            <Image
                source={require('../../assets/images/splash.png')}
                style={{
                    width:19,
                    height: 14,
                    marginHorizontal: 10,
                    marginTop: 20
                }}
            />
            <Image
                source={require('../../assets/images/profil.png')}
            />
        </View>
    )
} 

export default Home;