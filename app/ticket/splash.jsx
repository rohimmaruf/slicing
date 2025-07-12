import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";

const plane = {}

const Splash = () => {

    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout( () => {
            router.replace('/ticket/home');
        }, 3000);
         return () => clearTimeout(timeout);
    }, []
   
);


    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#7B22D3',
            flex: 1
        }}>

            <Image
                source={require('../../assets/images/splash.png')}
                style={{
                    height: 79,
                    width: 107
                }}
            />
            <View style={{flexDirection:'row', marginTop: 20}}>
                <Text style={{
                fontWeight: 'medium',
                fontSize: 50,
                color: 'white'
                
            }}>
                T
            </Text>
            <Image
                source={require('../../assets/images/plane1.png')}
                style={{height: 40, width: 40}}
            />
            <Text style={{
               
                fontWeight: 'medium',
                fontSize: 50,
                color: 'white'
            }}>
                cketing
            </Text>
            </View>

            


        </View>
    )
}

export default Splash