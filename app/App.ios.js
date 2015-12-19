var React = require('react-native');
var Board = require('./components/Board');
var Controls = require('./components/Controls');

var config = require('./config');

var {
  View,
  Text,
  StyleSheet
} = React;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Round Pixels'
    };
  }

  render() {
    return (
      <View style={styles.app}>
        <Text>{this.state.title}</Text>
        <Board colors={config.colors} ref="board" />
        <Controls onColorSelected={this.onColorSelected.bind(this)} />
      </View>
    );
  }

  onColorSelected(color) {
    this.refs.board.paint(color);
  }
}

var styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#31495A'
  }
});

module.exports = App;
