import {Button, Text, View} from 'react-native';

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userLogout} from '../../redux/actions';

function TabB({navigation, user, userLogout}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('TabBDetails')}
        title={`Hello, ${user?.userData?.username}. Go to Tab B Details`}
      />
      <Button onPress={() => userLogout()} title={`Logout`} />
    </View>
  );
}

const mapStateToProps = state => {
  return {user: state?.user};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({userLogout}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabB);

export function TabBDetails() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tab B Details</Text>
    </View>
  );
}
