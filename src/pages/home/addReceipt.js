import {CheckBox, Divider, Image, Input} from 'react-native-elements';
import React, {useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {receiptAddEdit} from '../../redux/actions';

function AddReceipt({navigation, userInfo, userLogin}) {
  const [data, setDAta] = useState({});

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
      }}></View>
  );
}

const mapStateToProps = state => {
  return {userInfo: state?.userInfo};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({receiptAddEdit}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddReceipt);
