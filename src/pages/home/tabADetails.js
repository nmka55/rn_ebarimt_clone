import {Linking, Text, TouchableOpacity, View} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import React from 'react';
import {connect} from 'react-redux';

const onSuccess = e => {
  Linking.openURL(e.data).catch(err => console.error('An error occured', err));
};

export function TabADetails() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tab A Details</Text>
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text>
            Go to <Text>wikipedia.org/wiki/QR_code</Text> on your computer and
            scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity>
            <Text>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {userInfo: state?.userInfo};
};

export default connect(mapStateToProps)(TabADetails);
