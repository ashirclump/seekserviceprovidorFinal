import React from 'react';
import { StyleSheet, View ,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme ,Button} from 'react-native-paper';

function Screen ({navigation}) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="This is Books Screen" />



        <Card.Content>
          <Button mode="outlined" onPress={() => navigation.navigate('Home')} color='black'>
            go to home
          </Button>
        </Card.Content>


      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: DefaultTheme.colors.background,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor:'red'
  },
  card: {
    width: '90%',
    backgroundColor:'red'
  }
});

export default Screen;
