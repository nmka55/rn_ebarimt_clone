import {FlatList, Modal, Text, TouchableHighlight, View} from 'react-native';
import React, {useState} from 'react';

import {Divider} from 'react-native-elements/dist/divider/Divider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import moment from 'moment';
import {receiptAddEdit} from '../redux/actions';

const formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'MNT',
  currencyDisplay: 'narrowSymbol',
});

const ReceiptDetailItem = ({data, index}) => {
  return (
    <View style={{width: '100%'}}>
      <Text style={{marginVertical: 10, fontSize: 12}}>
        Бараа үйлчилгээ #{index}
      </Text>
      <View style={{paddingHorizontal: 10}}>
        <Text style={{fontWeight: 'bold', marginVertical: 5}}>
          {data?.name}
        </Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Нэгжийн үнэ</Text>
          <Text style={{color: 'gray'}}>
            {formatter.format(data?.unitPrice)}
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Тоо хэмжээ</Text>
          <Text style={{color: 'gray'}}>{data?.quantity}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>НХАТ</Text>
          <Text style={{color: 'gray'}}>{formatter.format(data?.nhat)}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>НӨАТ</Text>
          <Text style={{color: 'gray'}}>{formatter.format(data?.nuat)}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Үнэ</Text>
          <Text style={{color: 'gray'}}>{formatter.format(data?.price)}</Text>
        </View>
        <Divider />
      </View>
    </View>
  );
};

function ReceiptDetailModal({data, modalVis, setModalVis, receiptAddEdit}) {
  const [currentCat, setCurrentCat] = useState(data?.category ?? 1);
  const [categoryList] = useState([
    {id: 0, title: 'Орон сууц', icon: 'office-building'},
    {id: 1, title: 'Тээврийн хэрэгсэл', icon: 'car'},
    {id: 2, title: 'Хүнсний хэрэглээ', icon: 'baguette'},
    {id: 3, title: 'Ахуйн хэрэглээ', icon: 'washing-machine'},
    {id: 4, title: 'Харилцаа холбоо', icon: 'tablet-cellphone'},
    {id: 5, title: 'Амралт зугаалга', icon: 'coffee'},
  ]);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        presentationStyle={'pageSheet'}
        visible={modalVis}
        onRequestClose={() => {
          setModalVis(!modalVis);
        }}>
        <View
          style={{
            backgroundColor: '#f2f2f2',
            height: '100%',
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}>
          <Text
            style={{
              color: '#3466c6',
              alignSelf: 'center',
              marginVertical: 10,
              fontSize: 18,
            }}>
            БАРИМТЫН МЭДЭЭЛЭЛ
          </Text>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text style={{color: 'gray'}}>Хаанаас:</Text>
              <Text style={{color: '#3466c6'}}>{data?.companyName}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text style={{color: 'gray'}}>Хэзээ:</Text>
              <Text style={{color: '#3466c6'}}>
                {moment(data?.date)?.format('YYYY/MM/DD HH:mm')}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text style={{color: 'gray'}}>Дүн:</Text>
              <Text style={{color: '#3466c6'}}>
                {formatter.format(data?.amount)}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text style={{color: 'gray'}}>Сугалаа:</Text>
              <Text style={{color: '#3466c6'}}>{data?.lotteryNumber}</Text>
            </View>

            <View
              style={{
                justifyContent: 'space-between',
                marginTop: 10,
                maxHeight: '45%',
              }}>
              <Text style={{alignSelf: 'center'}}>Баримтын ангилал сонгох</Text>
              {categoryList?.map(x => {
                return (
                  <TouchableHighlight
                    key={x?.id}
                    underlayColor="transparent"
                    style={{
                      backgroundColor:
                        currentCat === x?.id ? '#3466c6' : 'white',
                      justifyContent: 'center',
                      margin: 5,
                      overflow: 'hidden',
                      borderRadius: 15,
                    }}
                    onPress={() => setCurrentCat(x?.id)}>
                    <>
                      <Text
                        style={{
                          padding: 10,

                          color: currentCat === x?.id ? 'white' : 'black',
                          fontSize: 12,
                          fontWeight: '500',
                        }}>
                        <Icon name={x?.icon} size={16} color={'lightgray'} />
                        {x?.title}
                      </Text>
                    </>
                  </TouchableHighlight>
                );
              })}
            </View>

            <FlatList
              style={{
                width: '100%',
                maxHeight: '35%',
                marginVertical: 10,
                backgroundColor: 'white',
              }}
              data={data?.details ?? []}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) => (
                <ReceiptDetailItem data={item} index={index} />
              )}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'flex-end',
                marginVertical: 10,
                width: '100%',
              }}>
              <TouchableHighlight
                underlayColor="transparent"
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  setModalVis(!modalVis);
                  receiptAddEdit({...data, category: currentCat});
                  alert('Амжилттай ангиллаа!');
                }}>
                <Text
                  style={{
                    backgroundColor: '#3466c6',
                    color: 'white',
                    paddingVertical: 10,
                    paddingHorizontal: 50,
                    borderRadius: 15,
                    fontSize: 15,
                    fontWeight: '500',
                    overflow: 'hidden',
                  }}>
                  Ангилах
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                underlayColor="transparent"
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setModalVis(!modalVis)}>
                <Text
                  style={{
                    color: '#3466c6',
                    backgroundColor: 'white',
                    paddingVertical: 10,
                    paddingHorizontal: 50,
                    borderRadius: 15,
                    fontSize: 15,
                    fontWeight: '500',
                    overflow: 'hidden',
                  }}>
                  Хаах
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const mapStateToProps = state => {
  return {userInfo: state?.userInfo};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({receiptAddEdit}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptDetailModal);

ReceiptDetailModal.propTypes = {
  data: PropTypes.object,
  modaVis: PropTypes.bool,
  setModalVis: PropTypes.func,
};
