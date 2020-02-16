import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BottomNavigation } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const ListRoute = () => (
  <View style={styles.container}>
    <Text>List UI</Text>
  </View>
);

const AddRoute = () => (
  <View style={styles.container}>
    <Text>Add UI</Text>
  </View>
);

export default function App() {
  const [navState, setNavState] = useState({
    index: 0,
    routes: [
      { key: "list", title: "List" },
      { key: "add", title: "Add" }
    ]
  });

  const handleIndexChange = index =>
    setNavState({
      ...navState,
      index
    });

  const renderScene = BottomNavigation.SceneMap({
    list: ListRoute,
    add: AddRoute
  });

  return (
    <BottomNavigation
      navigationState={navState}
      onIndexChange={handleIndexChange}
      renderScene={renderScene}
    />
  );
}
