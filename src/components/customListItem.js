import React, {useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import {ReceiptDetailModal} from '.';
import moment from 'moment';

const formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'MNT',
  currencyDisplay: 'narrowSymbol',
});

export default function CustomListItem({data}) {
  const [modalVis, setModalVis] = useState(false);

  const [categoryList] = useState([
    {id: 0, title: 'Орон сууц', icon: 'office-building'},
    {id: 1, title: 'Тээврийн хэрэгсэл', icon: 'car'},
    {id: 2, title: 'Хүнсний хэрэглээ', icon: 'baguette'},
    {id: 3, title: 'Ахуйн хэрэглээ', icon: 'washing-machine'},
    {id: 4, title: 'Харилцаа холбоо', icon: 'tablet-cellphone'},
    {id: 5, title: 'Амралт зугаалга', icon: 'coffee'},
  ]);

  console.log(
    data?.category,
    // categoryList?.find(x => x?.id === data?.category)?.icon,
  );
  return (
    <>
      <TouchableHighlight
        style={{width: '100%', paddingVertical: 10}}
        underlayColor="white"
        activeOpacity={0.2}
        onPress={() => {
          setModalVis(!modalVis);
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
            }}>
            <Icon
              name={
                data?.category
                  ? categoryList?.find(x => x?.id === data?.category)?.icon
                  : 'plus-circle-outline'
              }
              size={30}
              color={'lightgray'}
            />
          </View>

          <View
            style={{flex: 1, flexDirection: 'column', paddingHorizontal: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 15}}>{data?.lotteryNumber}</Text>
                <Text style={{color: 'gray', marginTop: 5}}>Сугалаа</Text>
              </View>

              <View style={{flexDirection: 'column', marginTop: 5}}>
                <Text style={{fontSize: 15}}>
                  {formatter.format(data?.amount)}
                </Text>
                <Text style={{color: 'gray', marginTop: 5}}>Дүн</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  backgroundColor: '#3466c6',
                  color: 'white',
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  fontSize: 11,
                  overflow: 'hidden',
                }}>
                +{data?.returnAmount}
              </Text>

              <Text style={{marginLeft: 10, fontSize: 12}}>
                {data?.companyName} |{' '}
                {moment(data?.date)?.format('YYYY/MM/DD HH:mm')}
              </Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Icon
              name="circle"
              size={18}
              color={data?.status === 1 ? 'green' : 'orange'}
            />
          </View>
        </View>
      </TouchableHighlight>
      <ReceiptDetailModal
        data={data}
        modalVis={modalVis}
        setModalVis={setModalVis}
      />
    </>
  );
}

CustomListItem.propTypes = {
  navigation: PropTypes.object,
  data: PropTypes.object,
  tagData: PropTypes.array,
};
