/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var App = require('./app/App');

var {
  AppRegistry
} = React;

var RoundPixels = React.createClass({
  render: function() {
    return (
      <App />
    );
  }
});

AppRegistry.registerComponent('RoundPixels', () => RoundPixels);
