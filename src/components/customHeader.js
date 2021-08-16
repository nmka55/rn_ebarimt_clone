import React, {useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import {QuarterPicker} from '.';
import {connect} from 'react-redux';
import moment from 'moment';

const formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'MNT',
  currencyDisplay: 'narrowSymbol',
});

const thisYear = moment().get('year');
const lastYear = moment().subtract(1, 'year').get('year');

function CustomHeader({
  navigation,
  receipt,
  onTabChange,
  currentQuarter,
  setCurrentQuarter,
}) {
  const [activeTab, setActiveTab] = useState(0);

  const [overlayVis, setOverlayVis] = useState(false);
  const [tabNames] = useState([
    {id: 0, title: thisYear, sub: currentQuarter},
    {id: 1, title: lastYear},
    {id: 2, title: 'Буцаан олголт'},
    {id: 3, title: 'Сугалаа'},
  ]);
  return (
    <>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
          flexDirection: 'row',
        }}>
        {tabNames?.map(x => {
          return (
            <View key={x?.id} style={{flexDirection: 'row'}}>
              <TouchableHighlight
                underlayColor="transparent"
                style={{
                  overflow: 'hidden',
                  borderRadius: 30,
                  backgroundColor:
                    activeTab === x?.id ? 'white' : 'transparent',
                  paddingVertical: 10,
                  marginLeft: x?.id === 0 ? 0 : 10,
                }}
                onPress={() => {
                  onTabChange(x?.title);
                  setActiveTab(x?.id);
                }}>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: '500',
                    color: activeTab === x?.id ? '#3466c6' : 'white',
                    paddingHorizontal: 12,
                  }}>
                  {x?.title}
                </Text>
              </TouchableHighlight>
              {x?.sub && (
                <TouchableHighlight
                  underlayColor="transparent"
                  style={{
                    overflow: 'hidden',
                    borderTopRightRadius: 30,
                    borderBottomRightRadius: 30,
                    backgroundColor: 'white',
                    opacity: 0.3,
                    display: activeTab === 0 ? 'flex' : 'none',
                    paddingVertical: 10,
                    marginLeft: -10,
                  }}
                  onPress={() => setOverlayVis(true)}>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: '500',
                      paddingHorizontal: 12,
                    }}>
                    {currentQuarter}
                  </Text>
                </TouchableHighlight>
              )}
            </View>
          );
        })}
      </View>

      <View style={{paddingBottom: 10}}>
        <View
          style={{
            width: '100%',
            alignSelf: 'stretch',
            paddingHorizontal: 10,
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 16, color: 'white', fontWeight: '600'}}>
                  {receipt?.totalInfo?.registeredCount} баримт
                </Text>
                <Text style={{color: 'white', fontSize: 12}}>Бүртгэгдсэн</Text>
              </View>

              <View style={{flexDirection: 'column', marginTop: 10}}>
                <Text style={{fontSize: 16, color: 'white', fontWeight: '600'}}>
                  {formatter.format(receipt?.totalInfo?.promo)}
                </Text>
                <Text style={{color: 'white', fontSize: 12}}>Урамшуулал</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 16, color: 'white', fontWeight: '600'}}>
                {receipt?.totalInfo?.pendingCount} баримт
              </Text>
              <Text style={{color: 'white', fontSize: 12}}>Хүлээгдэж буй</Text>
            </View>

            <View style={{flexDirection: 'column', marginTop: 10}}>
              <Text style={{fontSize: 16, color: 'white', fontWeight: '600'}}>
                {formatter.format(receipt?.totalInfo?.lottery)}
              </Text>
              <Text style={{color: 'white', fontSize: 12}}>Хонжвор</Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="home-circle" size={35} color={'white'} />
          </View>
        </View>
      </View>
      <QuarterPicker
        overlayVis={overlayVis}
        setCurrentQuarter={setCurrentQuarter}
        setOverlayVis={setOverlayVis}
      />
    </>
  );
}

const mapStateToProps = state => {
  console.log(state?.receipt?.list);
  return {user: state?.user, receipt: state?.receipt};
};

export default connect(mapStateToProps)(CustomHeader);

CustomHeader.propTypes = {
  navigation: PropTypes.object,
  onTabChange: PropTypes.func,
  currentQuarter: PropTypes.number,
  setCurrentQuarter: PropTypes.func,
};
