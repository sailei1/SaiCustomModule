/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var { DeviceEventEmitter } = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

debugger;

var ToastAndroid = React.NativeModules.ToastAndroidSai;
ToastAndroid.show('Awesome', ToastAndroid.SHORT);

var sms = React.NativeModules.SmsModule;

sms.send(
  "12345678",
  "Message text",
  () => console.log('Message was sent!'),
  (err) => console.log('Could not send message', err)
);

var RNALocation = React.NativeModules.RNALocation;




var SaiCustomModule = React.createClass({
  // Create and Reset initial State Longitude (lng) and Latitude (lat)  
  getInitialState: function() { return { lng: 0.0, lat: 0.0}; },

  componentDidMount: function() {
      // Register Listener Callback !Important!
      DeviceEventEmitter.addListener('updateLocation', function(e: Event) {
          this.setState({lng: e.Longitude, lat: e.Latitude });
      }.bind(this));
      // Initialize RNALocation
      RNALocation.getLocation();
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.location}>
          Lng: {this.state.lng} Lat: {this.state.lat}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('SaiCustomModule', () => SaiCustomModule);
