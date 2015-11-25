/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var NativeRNShare = require('NativeModules').SaiModule;
var Share = {
  test: function() {
    NativeRNShare.test();
  },
  open: function(options) {
    NativeRNShare.open(options);
  }
};

var Mailer = require('NativeModules').RNMail;

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var TouchableHighlight = require('TouchableHighlight');
var example = React.createClass({
  onShare: function() {
    Share.open({
      share_text: "Hola mundo",
      share_URL: "http://google.cl",
      title: "Share Link"
    },function(e) {
      console.log(e);
    });
    /*
    // in iOS without callback
    Share.open({
      share_text: "Hola mundo",
      share_URL: "http://google.cl",
      title: "Share Link"
    });
    */
  }, 
  onMail:function(){

    Mailer.mail({
      subject: 'need help',
      recipients: ['sailei1@163.com'],
      body: '',
      attachment: {
        path: '',  // The absolute path of the file from which to read data.
        type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf
        name: '',   // Optional: Custom filename for attachment
      }
    }, (error, event) => {
        if(error) {
          AlertIOS.alert('Error', 'Could not send mail. Please send a mail to support@example.com');
        }
    });
  }, 
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onMail}>
          <Text  style={styles.instructions}>
            Share
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
});
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SaiCustomModule', () => example);
