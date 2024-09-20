import { Button, Text, View } from "react-native";
import { useAuth } from "../../hooks/Auth";
import { Banner } from "../../components/Banner";

export default function Home() {
    const {signOut} = useAuth();
    return (
        <View  style={{ flex: 1}}>
           <Banner />
           
        </View>
    );
}