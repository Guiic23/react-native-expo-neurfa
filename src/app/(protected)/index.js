import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Banner } from "../../components/Banner";

const products = [
  { id: 1, name: "Produto A", price: 49.99, image: require("../../assets/icon.png"), description: "Descrição detalhada do Produto A", rating: 4.5, isNew: true },
  { id: 2, name: "Produto B", price: 99.99, image: require("../../assets/icon.png"), description: "Descrição detalhada do Produto B", rating: 3.8, isNew: false },
  { id: 3, name: "Produto C", price: 29.99, image: require("../../assets/icon.png"), description: "Descrição detalhada do Produto C", rating: 4.2, isNew: false },
  { id: 4, name: "Produto D", price: 159.99, image: require("../../assets/icon.png"), description: "Descrição detalhada do Produto D", rating: 5, isNew: true },
  { id: 5, name: "Produto E", price: 79.99, image: require("../../assets/icon.png"), description: "Descrição detalhada do Produto E", rating: 4, isNew: false },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleSearchChange = (text) => setSearchQuery(text);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    alert(`${item.name} adicionado ao carrinho!`);
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      {item.isNew && (
        <View style={styles.newTag}>
          <Text style={styles.newTagText}>Novo</Text>
        </View>
      )}
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={18} color="#FFD700" />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>
      <TouchableOpacity
        style={styles.buyButton}
        onPress={() => addToCart(item)}
      >
        <Text style={styles.buyButtonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Barra de pesquisa */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#aaa" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar produtos..."
          value={searchQuery}
          onChangeText={handleSearchChange}
        />
      </View>
      <Banner />
     

      {/* Lista de produtos */}
      <FlatList
        data={products.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.catalog}
        scrollEnabled={false} // Desabilita a rolagem própria da FlatList
      />

      {/* Carrinho */}
      <View style={styles.cartContainer}>
        <Text style={styles.cartText}>
          {cartItems.length} item(s) no carrinho
        </Text>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => alert("Abrir Carrinho")}
        >
          <Text style={styles.cartButtonText}>Ir para o Carrinho</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  catalog: {
    paddingBottom: 20,
  },
  productCard: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  newTag: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#ff6347",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  newTagText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 14,
    color: "#1e90ff",
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#333",
  },
  buyButton: {
    backgroundColor: "#1e90ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cartContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cartText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  cartButton: {
    backgroundColor: "#1e90ff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
  },
  cartButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
