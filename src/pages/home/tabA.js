import {CustomHeader, CustomListItem, QuarterPicker} from '../../components';
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import moment from 'moment';
import {userLogout} from '../../redux/actions';

function TabA({navigation, user, userLogout, receipt}) {
  const [listData, setListData] = useState(receipt?.list);
  const [overlayVis, setOverlayVis] = useState(false);
  const [currentQuarter, setCurrentQuarter] = useState(moment().get('quarter'));

  useEffect(() => {
    setListData(receipt?.list);
  }, [receipt]);

  const onTabChange = tabName => {
    alert(tabName + ' руу шилжив');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#4b78ec'}}>
      <StatusBar barStyle="light-content" backgroundColor="#4b78ec" />

      <CustomHeader
        navigation={navigation}
        currentQuarter={currentQuarter}
        onTabChange={onTabChange}
        setCurrentQuarter={setCurrentQuarter}
      />
      <View
        style={{
          width: '100%',
          flex: 1,
          paddingVertical: 5,
          alignSelf: 'center',
          alignItems: 'center',
          backgroundColor: '#f2f2f2',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}>
        <TouchableHighlight
          underlayColor="transparent"
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => setOverlayVis(true)}>
          <Text
            style={{
              color: '#3466c6',
              borderColor: '#3466c6',
              borderWidth: 1,
              backgroundColor: 'white',
              paddingVertical: 5,
              paddingHorizontal: 50,
              borderRadius: 15,
              fontSize: 12,
              fontWeight: '500',
              overflow: 'hidden',
            }}>
            {currentQuarter}-р улирал
          </Text>
        </TouchableHighlight>
        <FlatList
          style={{width: '100%'}}
          data={listData}
          keyExtractor={item => item?.lotteryNumber}
          renderItem={({item}) => (
            <CustomListItem navigation={navigation} data={item} />
          )}
        />
      </View>
      <QuarterPicker
        overlayVis={overlayVis}
        setCurrentQuarter={setCurrentQuarter}
        setOverlayVis={setOverlayVis}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  return {user: state?.user, receipt: state?.receipt};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({userLogout}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabA);
