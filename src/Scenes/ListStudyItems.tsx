import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { List, Headline } from "react-native-paper";
import { StudyItem } from "../types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    paddingLeft: 20,
    paddingRight: 20
  }
});

export default function ListStudyItems(props: { items: StudyItem[] }) {
  const { items: studyItems } = props;
  const onRenderItem = renderItem => (
    <List.Item
      title={renderItem.item.english}
      description={renderItem.item.description}
    />
  );
  return (
    <View style={styles.container}>
      <Headline>StudyItems</Headline>
      <FlatList data={studyItems} renderItem={onRenderItem} />
    </View>
  );
}
