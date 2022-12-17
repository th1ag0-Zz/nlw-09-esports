import React from "react";
import { ActivityIndicator, View } from "react-native";

import { THEME } from "../../theme";

import styles from "./styles";

export const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} size="large" />
    </View>
  );
};
