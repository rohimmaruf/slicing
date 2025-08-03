import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TicketLayout = () => {

    return (
        <Tabs
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#7B22D3',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'favorite') {
                        iconName = 'heart-outline';
                    } else if (route.name === 'profil') {
                        iconName = 'person-outline';
                    } else {
                        iconName = 'home-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tabs.Screen
                name="index" 
                options={{ title: 'home'}}
            />
            <Tabs.Screen
                name="favorite"
                options={{ title: 'favorite'}}
            />
            <Tabs.Screen
                name="profil"
                options={{ title: 'profil'}}
            />
        </Tabs>
    )
}

export default TicketLayout