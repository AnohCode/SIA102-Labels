import { Text, View, StyleSheet, Alert } from "react-native";
import { Button, TextInput, Portal, Modal, Provider } from "react-native-paper";
import React, { useState } from "react";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const handleCustomPress = () => {
    Alert.alert("Hello World!");
  };
  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.textInputLabelContainer}>
          <Text style={styles.label}>Label 1:</Text>
          <TextInput label="Label 1" mode="outlined" style={styles.textInput} />
        </View>
        <View style={styles.textInputLabelContainer}>
          <Text style={styles.label}>Label 2:</Text>
          <TextInput label="Label 2" mode="outlined" style={styles.textInput} />
        </View>
        <View style={styles.textInputLabelContainer}>
          <Text style={styles.label}>Label 3:</Text>
          <TextInput label="Label 3" mode="outlined" style={styles.textInput} />
        </View>
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={handleCustomPress} style={styles.button}>
            Submit
          </Button>
          <Button mode="contained" onPress={showModal} style={styles.button}>
            Submit
          </Button>
        </View>
        <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalContent}
          >
            <Text style={styles.modalText}>
              This is a window that pops up on button press!
            </Text>
            <Button mode="contained" onPress={hideModal} style={styles.modalButton}>
              Close
            </Button>
          </Modal>
        </Portal>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 70,
    flex: 1,
    gap: 10,
  },
  textInputLabelContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
  },
  label: {
    fontSize: 24,
    fontFamily: "sans-serif",
    fontWeight: "300",
  },
  textInput: {
    flex: 1,
    fontFamily: "sans-serif",
    backgroundColor: "white",
    outlineColor: "#ADD8E6",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    marginTop: 10,
    flex: 1,
    backgroundColor: "#ADD8E6",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
  },
  modalButton: {
    marginTop: 10,
  },
});
