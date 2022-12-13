import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [customInterval, setCustomInterval] = useState();

  const startTimer = () => {
    setCustomInterval(
      setInterval(() => {
        changeTime();
      },1000)
    )
  };

  const stopTimer = () => {
    if(customInterval){
      clearInterval(customInterval);
    }
  };

  const clear = () => {
    stopTimer();
    setSeconds(0);
    setMinutes(0);
  }

  const changeTime = () => {
    setSeconds((prevState) => {
      if (prevState +1 == 60){
        setMinutes(minutes + 1);
        return 0;
      }
      return prevState + 1;
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTimer}>
        {minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </Text>
      <View style={styles.button}>
        <Button title='START' onPress={startTimer}></Button>
        <Button title='STOP' onPress={stopTimer}></Button>
        <Button title='CLEAR' onPress={clear}></Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTimer:{
    fontSize:'20rem'
  },
  button:{
    width:'65%',
    flexDirection:'row',
    justifyContent: 'space-around',
    marginTop: 30
  }
});
