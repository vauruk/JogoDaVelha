import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const Position = ({ value, onPress }) => {
  return (
    <View style={styles.col}>
      <TouchableOpacity onPress={onPress} style={styles.bottonChange}>
        <View>
          <Text style={styles.textPos}>{value}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const App = () => {
  const startPos = '-';
  const posicoes = [
    startPos,
    startPos,
    startPos,
    startPos,
    startPos,
    startPos,
    startPos,
    startPos,
    startPos,
  ];
  const ONE = 'O';
  const TWO = 'X';
  const [jogador, setJogador] = React.useState(ONE);
  const [gridGame, setGridGame] = React.useState(posicoes);

  const returnWinner = () => {
    if (jogador === ONE) {
      return 'Jogador 1 Ganhou! => ' + ONE;
    }
    return 'Jogador 2 Ganhou! => ' + TWO;
  };
  const verifyWinner = () => {
    if (
      (gridGame[0] === ONE && gridGame[1] === ONE && gridGame[2] === ONE) ||
      (gridGame[3] === ONE && gridGame[4] === ONE && gridGame[5] === ONE) ||
      (gridGame[6] === ONE && gridGame[7] === ONE && gridGame[8] === ONE) ||
      (gridGame[0] === ONE && gridGame[4] === ONE && gridGame[8] === ONE) ||
      (gridGame[0] === ONE && gridGame[3] === ONE && gridGame[6] === ONE) ||
      (gridGame[1] === ONE && gridGame[4] === ONE && gridGame[7] === ONE) ||
      (gridGame[2] === ONE && gridGame[5] === ONE && gridGame[8] === ONE) ||
      (gridGame[2] === ONE && gridGame[4] === ONE && gridGame[6] === ONE)
    ) {
      Alert.alert('Ganhador', returnWinner(), [
        { text: 'OK', onPress: () => restartGame() },
      ]);
    } else if (
      (gridGame[0] === TWO && gridGame[1] === TWO && gridGame[2] === TWO) ||
      (gridGame[3] === TWO && gridGame[4] === TWO && gridGame[5] === TWO) ||
      (gridGame[6] === TWO && gridGame[7] === TWO && gridGame[8] === TWO) ||
      (gridGame[0] === TWO && gridGame[4] === TWO && gridGame[8] === TWO) ||
      (gridGame[0] === TWO && gridGame[3] === TWO && gridGame[6] === TWO) ||
      (gridGame[1] === TWO && gridGame[4] === TWO && gridGame[7] === TWO) ||
      (gridGame[2] === TWO && gridGame[5] === TWO && gridGame[8] === TWO) ||
      (gridGame[2] === TWO && gridGame[4] === TWO && gridGame[6] === TWO)
    ) {
      Alert.alert('Ganhador', returnWinner(), [
        { text: 'OK', onPress: () => restartGame() },
      ]);
    }
  };

  const restartGame = () => {
    setGridGame(posicoes);
    setJogador(ONE);
  };

  const checkPlayed = (item, index) => {
    setJogador(jogador === ONE ? TWO : ONE);
    let pos = gridGame[index];
    pos = jogador === ONE ? ONE : TWO;
    gridGame[index] = pos;
    setGridGame(gridGame);

    verifyWinner();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Jogo Da Velha</Text>
      <Text style={styles.player}>Jogador "{jogador}"</Text>
      <View style={styles.row}>
        {gridGame.map((item, index) => (
          <Position
            key={index}
            value={item}
            onPress={() => checkPlayed(item, index)}
          />
        ))}
      </View>
      <View style={styles.viewRestart}>
        <TouchableOpacity
          onPress={() => restartGame()}
          style={styles.viewRestart}>
          <Text style={styles.buttonRestart}>Reiniciar Jogo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  col: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 0.2,
    borderWidth: 0.5,
    borderColor: 'gray',
    height: 100,
    flexBasis: '33%',
    backgroundColor: '#bdbdbd',
  },
  buttonRestart: {
    fontSize: 30,
    color: '#207231',
  },
  viewRestart: {
    margin: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textPos: {
    fontSize: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 30,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  player: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 20,
  },
  bottonChange: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default App;
