var React = require('react-native');
var Circle = require('./Circle');
var config = require('../config');

var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = React;

class Controls extends React.Component {
  render() {
    return (
      <View style={styles.controls}>
        {config.colors.map((color, i) => {
          return (
            <TouchableHighlight
              key={i}
              onPress={this.onColorSelected.bind(this, i)}
              underlayColor="#88D4F5"
              style={styles.button}>
              <Text>{color.name}</Text>
            </TouchableHighlight>
          );
        })}
      </View>
    );
  }

  onColorSelected(color) {
    // TODO: Research how to better communicate components (Flux, Redux, Relay...)
    this.props.onColorSelected(color);
  }
}

var styles = StyleSheet.create({
  controls: {
    flexDirection: 'row'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  }
});

module.exports = Controls;
