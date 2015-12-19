var React = require('react-native');
var config = require('../config');

var {
  View,
  Text,
  StyleSheet
} = React;

class Circle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var color = config.colors[this.props.color].name;
    var separators;

    if(this.props.active) {
      separators = (
        <View>
          <View style={[styles.separatorRight, colorStyles[color]]}></View>
          <View style={[styles.separatorBottom, colorStyles[color]]}></View>
        </View>
      );
    }

    return (
      <View>
        <View style={[styles.circle, colorStyles[color]]}></View>
        {separators}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: .5,
    shadowRadius: 5,
    marginRight: 7,
    marginBottom: 7
  },

  separatorRight: {
    position: 'absolute',
    width: 10,
    height: 7,
    top: -25,
    right: -40,
    opacity: .5
  },

  separatorBottom: {
    position: 'absolute',
    width: 7,
    height: 10,
    bottom: 0,
    left: 12,
    opacity: .5
  }
});

var colorsObject = {};
config.colors.forEach((color) => {
  colorsObject[color.name] = {backgroundColor: color.hex};
});

var colorStyles = StyleSheet.create(colorsObject);

module.exports = Circle;
