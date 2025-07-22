import { ScrollView, Text, View } from "react-native";

const slide = ['Slide 1', 'Slide 2', 'Slide 3']


const Scollview = () => {

    

    return(
    <View>
        <Text>Halaman Scroll View</Text>
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
        >
            {slide.map( (item, index) => {
                
                return(
                    <View key={index}>
                        <Text>{item}</Text>
                    </View>
                )
                
            } )}
        </ScrollView>
    </View>
    )
}

export default Scollview;