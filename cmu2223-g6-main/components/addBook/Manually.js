
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ToastAndroid } from "react-native";
import Input from './Input';
import { addBook } from '../../api/books';

const Manually = ({updateBook}) => {
  const [code, setCode] = useState(["", "", "", ""]);

  async function newBook() {
    const response = await addBook(code.join(""))
    if (response.success == 'true') {
      setCode(["", "", "", ""])
      showToastWithGravityAndOffset(response.msg)
      updateBook()
      
    }
    else{
      showToastWithGravityAndOffset(response.msg)
    }
  }

  const showToastWithGravityAndOffset = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  return (
    <View style={styles.body}>
      <Text style={styles.mainText}>Por favor insira o código que foi atribuido ao seu livro.</Text>
      <View style={styles.dirRow}>
        <Input
          val={code[0]}
          setVal={val => setCode(code.map((number, index) => index === 0 ? val : number))}
        />
        <Input
          val={code[1]}
          setVal={val => setCode(code.map((number, index) => index === 1 ? val : number))}
        />
        <Input
          val={code[2]}
          setVal={val => setCode(code.map((number, index) => index === 2 ? val : number))}
        />
        <Input
          val={code[3]}
          setVal={val => setCode(code.map((number, index) => index === 3 ? val : number))}
        />
      </View>
      {code.filter(item => item == '').length == 0 &&
        <Pressable style={styles.pressable} onPress={() => { newBook() }}>
          <Text style={styles.textPressable}>Adicionar Livro</Text>
        </Pressable>}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  mainText: {
    marginVertical: 40,
    maxWidth: 300,
    textAlign: "center",
    fontSize: 16,
    color: 'black',
    fontFamily: 'Sora-Regular'
  },
  dirRow: {
    flexDirection: 'row'
  },
  pressable: {
    backgroundColor: "#3E4553",
    width: '85%',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 15
  },
  textPressable: {
    color: 'white',
    fontFamily: 'Sora-SemiBold',
    textAlign: 'center',
    fontSize: 17
  }
});

export default Manually;