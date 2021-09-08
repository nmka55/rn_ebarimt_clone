import {Input, Switch} from 'react-native-elements';
import {Modal, Text, TouchableHighlight, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {receiptAddEdit} from '../redux/actions';

const initialData = {
  lotteryNumber: '',
  ddtd: '',
  amount: 0,
};

function AddReceiptModal({navigation, receiptAddEdit}) {
  const [modalVis, setModalVis] = useState(true);
  const [isDDTD, setIsDDTD] = useState(false);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setModalVis(true);
    setData(initialData);
  }, [modalVis]);

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
            paddingHorizontal: 30,
            paddingBottom: 20,
          }}>
          <Text
            style={{
              color: '#3466c6',
              alignSelf: 'center',
              marginVertical: 10,
              fontSize: 18,
            }}>
            БАРИМТ БҮРТГҮҮЛЭХ
          </Text>
          <View>
            <Text style={{fontSize: 10, color: 'gray', alignSelf: 'center'}}>
              Та ДДТД болон сугалааны дугаарын аль нэгийг оруулна уу!
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Switch
                style={{marginHorizontal: 10, marginVertical: 10}}
                value={isDDTD}
                color="#4b78ec"
                onChange={() => setIsDDTD(!isDDTD)}
              />
              <Text style={{color: 'gray'}}>Сугалаа дугаар / ДДТД</Text>
            </View>

            <Input
              onChangeText={text => setData({...data, lotteryNumber: text})}
              value={data?.lotteryNumber}
              inputStyle={{
                color: '#3466c6',
              }}
              inputContainerStyle={{
                borderRadius: 30,
                borderColor: '#f2f2f2',
                borderWidth: 0.5,
                paddingHorizontal: 10,
                backgroundColor: 'white',
                overflow: 'hidden',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
              }}
              placeholder={isDDTD ? 'ДДТД' : 'Сугалааны дугаар'}
            />

            <Input
              onChangeText={text =>
                setData({
                  ...data,
                  amount: parseFloat(text),
                })
              }
              value={data?.amount.toString()}
              inputStyle={{
                color: '#3466c6',
              }}
              inputContainerStyle={{
                borderRadius: 30,
                borderColor: '#f2f2f2',
                borderWidth: 0.5,
                paddingHorizontal: 10,
                backgroundColor: 'white',
                overflow: 'hidden',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
              }}
              placeholder="Дүн"
              keyboardType={'numeric'}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'flex-end',
                marginVertical: 10,
                paddingHorizontal: 10,
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
                  receiptAddEdit({
                    id: -1,
                    lotteryNumber: data?.lotteryNumber,
                    amount: data?.amount,
                    returnAmount: 690.91,
                    companyName: 'Tesla',
                    date: new Date().toISOString(),
                    status: 1,
                    category: 1,
                    details: [
                      {
                        name: 'Model X',
                        unitPrice: 15000,
                        quantity: 1,
                        nhat: 50,
                        nuat: 1500,
                        price: 15000,
                      },
                      {
                        name: 'Model S',
                        unitPrice: 25000,
                        quantity: 1,
                        nhat: 50,
                        nuat: 2500,
                        price: 25000,
                      },
                    ],
                  });
                  setModalVis(!modalVis);
                  navigation.navigate('Камер нээх');
                  alert('Амжилттай хадгаллаа!');
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
                  Илгээх
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                underlayColor="transparent"
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  navigation.navigate('Камер нээх');
                  setModalVis(!modalVis);
                }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddReceiptModal);

AddReceiptModal.propTypes = {
  data: PropTypes.object,
  modaVis: PropTypes.bool,
  setModalVis: PropTypes.func,
};
