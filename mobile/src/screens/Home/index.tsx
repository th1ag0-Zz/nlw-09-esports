import React from "react";
import { Text, View, Image, FlatList } from "react-native";

import logoImage from "../../assets/logo-nlw-esports.png";
import { GameCard, Heading } from "../../components";
import { GameCardProps } from "../../components/GameCard";
import { GAMES } from "../../utils/games";

import styles from "./styles";

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />

      <Heading
        title="Encontre seu duo"
        subtitle="Selecione o game que deseja jogar"
      />

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <GameCard data={item} />}
      />
    </View>
  );
};
