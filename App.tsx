import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { BottomNavigation } from "react-native-paper";
import AddStudyItem from "./src/Scenes/AddStudyItem";
import ListStudyItems from "./src/Scenes/ListStudyItems";
import { StudyItem } from "./src/types";

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
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

export default function App() {
  const [navState, setNavState] = useState({
    index: 0,
    routes: [
      { key: "list", title: "List" },
      { key: "add", title: "Add" }
    ]
  });
  const [studyItems, setStudyItems] = useState<StudyItem[]>([]);

  const handleIndexChange = index =>
    setNavState({
      ...navState,
      index
    });

  const handleStudyItems = item => setStudyItems([item, ...studyItems]);

  const renderScene2 = ({ route }) => {
    switch (route.key) {
      case "list":
        return <ListStudyItems items={studyItems} />;
      case "add":
        return <AddStudyItem addStudyItem={handleStudyItems} />;
      default:
        throw new Error("Invalid route key");
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <BottomNavigation
        navigationState={navState}
        onIndexChange={handleIndexChange}
        renderScene={renderScene2}
      />
    </SafeAreaView>
  );
}
