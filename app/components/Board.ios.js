var React = require('react-native');
var Circle = require('./Circle');

var {
  View,
  Text,
  StyleSheet
} = React;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 9,
      columns: 9,
      circles: []
    };
  }

  componentWillMount() {
    this.generateBoard();
  }

  render() {
    return (
      <View style={styles.board}>
        {this.state.circles.map((row, i) => {
          return (
            <View key={i}>
              {row.map((circle, j) => {
                return <Circle color={circle.color} active={circle.active} key={j} />
              })}
            </View>
          );
        })}
      </View>
    );
  }

  generateBoard() {
    var circles = this.state.circles;

    for(var i = 0; i < this.state.rows; i += 1) {
      circles.push([]);

      for(var j = 0; j < this.state.columns; j += 1) {
        circles[i].push({color: this.generateRandomColor(), active: false});
      }
    }

    circles[0][0].active = true;

    this.setState({circles});

    // Activate all touching neighbours that share the same color with the first circle
    this.paint(circles[0][0].color);
  }

  generateRandomColor() {
    var randomIndex = Math.floor(Math.random() * (this.props.colors.length));
    return randomIndex;
  }

  paint(color) {
    var circles = this.state.circles;

    for(var i = 0; i < this.state.rows; i += 1) {
      for(var j = 0; j < this.state.columns; j += 1) {
        if(circles[i][j].active) {
          // All actives get the new color
          circles[i][j].color = color;
          this.activateNeighboursWithIndex(i, j, color, circles);
        } // End if active
      } // End j loop
    } // End i loop

    this.setState({circles});
  }

  activateNeighboursWithIndex(i, j, color, circles) {
    var neighbours = {
      top: circles[i-1] && circles[i-1][j],
      right: circles[i][j+1],
      bottom: circles[i+1] && circles[i+1][j],
      left: circles[i][j-1]
    };

    for(var key in neighbours) {
      if(neighbours[key] && !neighbours[key].active && neighbours[key].color === color) {
        neighbours[key].active = true;
      }
    } // End neighbours loop
  }
}

var styles = StyleSheet.create({
  board: {
    // flex: 4,
    flexDirection: 'row',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#CCC'
  }
});

module.exports = Board;
