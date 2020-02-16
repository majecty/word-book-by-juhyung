import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput, Headline, Snackbar } from "react-native-paper";
import { StudyItem } from "../types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  consistent: {
    paddingLeft: 20,
    paddingRight: 20
  },
  textInput: {
    marginBottom: 10
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default function AddStudyItem(props: {
  addStudyItem: (item: StudyItem) => void;
}) {
  const [english, setEnglish] = useState("");
  const [description, setDescription] = useState("");
  const [snackbarState, setSnackbarState] = useState({
    visible: false,
    description: ""
  });

  let englishRef = null;
  let descriptionRef = null;

  const handlePress = () => {
    setEnglish("");
    setDescription("");
    setSnackbarState({
      visible: true,
      description: "Item added"
    });
    props.addStudyItem({
      english,
      description
    });
    englishRef.blur();
    descriptionRef.blur();
  };

  return (
    <View style={styles.container}>
      <View style={styles.consistent}>
        <Headline>Add Study Item</Headline>
        <TextInput
          ref={input => {
            englishRef = input;
          }}
          style={styles.textInput}
          mode="outlined"
          label="english"
          value={english}
          onChangeText={text => setEnglish(text)}
        />
        <TextInput
          ref={input => {
            descriptionRef = input;
          }}
          style={styles.textInput}
          mode="outlined"
          label="description"
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <Button mode="outlined" style={styles.button} onPress={handlePress}>
          Add
        </Button>
      </View>

      <Snackbar
        visible={snackbarState.visible}
        onDismiss={() =>
          setSnackbarState({
            visible: false,
            description: ""
          })
        }
      >
        {snackbarState.description}
      </Snackbar>
    </View>
  );
}
