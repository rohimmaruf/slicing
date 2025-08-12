import { Text, View } from "react-native"

const Home = () => {
    return (
        <View 
            className = "flex-1 bg-black"
        >
            {/* Label Dashboard */}
            <Text
                className = "text-white font-bold"
            >
                Financial Dashboar
            </Text>
            <Text
                className = "text-white"
            >
                Track and analyze your financial healt
            </Text>
        </View>
    )
}

export default Home