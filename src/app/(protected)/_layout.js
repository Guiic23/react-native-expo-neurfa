import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../hooks/Auth/index';

function CustomDrawerContent(props) {
  const { user, signOut } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0", paddingVertical: 10 }}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/160981090?v=4',
          }}
          style={{ width: 100, height: 100, borderRadius: 50, alignSelf: "center" }}
        />
        <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "regular" }}>{user?.user?.nome}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity onPress={() => signOut()} style={{ justifyContent: "center", alignItems: "center", height: 50, margin: 10, backgroundColor: "#0000ff", borderRadius: 5, }}>

        <Text style={{ color: "white", fontFamily: "bold" }} >Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
}
const Neurfatext = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontFamily: "bold" }}>Neurfa</Text>
    </View>
  );
}

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer  screenOptions={
        {
          headerTitle: "Neurfa",
          headerTitleAlign: "center",
          headerStyle:{fontSize: 40},
          headerStyle: { backgroundColor: "#f0f0f0" },
          headerTitleStyle: { fontFamily: "bold" },
          headerRight: () => (
            <TouchableOpacity onPress={() => alert("Abrir Carrinho")}>
              <Ionicons name="cart-outline" size={40} color="black" style={{ marginRight: 30 }} />
            </TouchableOpacity>
          ),
        }
      }  drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="index"
          options={{ drawerLabel: "Inicio", headerTitle: "Neurfa", drawerIcon: () => (<Ionicons name="home-outline" size={20} color="black" />), }}
        />
        <Drawer.Screen
          name="list"
          options={{ drawerLabel: "Listagem", headerTitle: "Listagem", drawerIcon: () => (<Ionicons name="list-circle-outline" size={20} color="black" />), }}
        />
        <Drawer.Screen
          name="payment"
          options={{ drawerLabel: "Pagamentos", headerTitle: "Pagamentos", drawerIcon: () => (<Ionicons name="diamond-outline" size={20} color="black" />), }}
        />
        <Drawer.Screen
          name="details"
          options={{ unmountOnBlur: true, headerTitle: "Detalhes", drawerItemStyle: { display: "none" } }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

export default function Layout() {
  return DrawerLayout();
}
