import {CheckBox, Divider, Image, Input} from 'react-native-elements';
import React, {useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userLogin} from '../../redux/actions';

function Login({navigation, userInfo, userLogin}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const [isBio, setIsBio] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
      }}>
      <View
        style={{
          alignSelf: 'flex-start',
          paddingHorizontal: 25,
          marginVertical: 20,
        }}>
        <Image
          style={{width: 70, height: 70}}
          resizeMethod="scale"
          resizeMode="contain"
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <Input
        onChangeText={text => setUsername(text)}
        value={username}
        inputStyle={{
          color: '#3466c6',
          fontWeight: 'bold',
        }}
        inputContainerStyle={{
          borderRadius: 30,
          borderColor: '#f2f2f2',
          borderWidth: 0.5,
          paddingHorizontal: 10,
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
        label="Иргэний код"
        labelStyle={{fontWeight: 'normal', paddingHorizontal: 20}}
      />

      <Input
        value={password}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        label="Нууц үг"
        inputStyle={{
          color: '#3466c6',
          fontWeight: 'bold',
        }}
        inputContainerStyle={{
          borderRadius: 30,
          borderColor: '#f2f2f2',
          borderWidth: 0.5,
          paddingHorizontal: 10,
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
        labelStyle={{fontWeight: 'normal', paddingHorizontal: 20}}
      />

      <CheckBox
        center
        title="Сануулах"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={isRemember}
        containerStyle={{
          backgroundColor: 'white',
          alignSelf: 'flex-start',
          elevation: 0,
          borderColor: 'white',
          paddingVertical: 0,
          paddingHorizontal: 0,
          marginVertical: 0,
        }}
        onPress={() => setIsRemember(!isRemember)}
      />

      <CheckBox
        center
        title="Хурууны хээ/нүүрний хээгээр нэвтрэх"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={isBio}
        containerStyle={{
          backgroundColor: 'white',
          alignSelf: 'flex-start',
          elevation: 0,
          borderColor: 'white',
          paddingVertical: 0,
          paddingHorizontal: 0,
          marginVertical: 0,
        }}
        onPress={() => setIsBio(!isBio)}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignSelf: 'flex-end',
          marginVertical: 100,
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
            userLogin(username, password);
          }}>
          <Text
            style={{
              backgroundColor: '#3466c6',
              color: 'white',
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 15,
              fontSize: 15,
              fontWeight: 'bold',
              overflow: 'hidden',
            }}>
            Нэвтрэх
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="transparent"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => alert('Бүртгүүлэх цонх хийгдээгүй байна :)')}>
          <Text
            style={{
              color: '#3466c6',
              borderColor: '#3466c6',
              borderWidth: 1,
              backgroundColor: 'white',
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 15,
              fontSize: 15,
              fontWeight: 'bold',
              overflow: 'hidden',
              marginLeft: 20,
            }}>
            Бүртгүүлэх
          </Text>
        </TouchableHighlight>
      </View>

      <View
        style={{
          width: '100%',
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexDirection: 'row',
          borderTopWidth: 0.5,
          borderColor: 'lightgray',
        }}>
        <TouchableHighlight
          underlayColor="transparent"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {}}>
          <Text
            style={{
              color: '#3466c6',
              backgroundColor: 'white',
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 15,
              fontSize: 12,
              fontWeight: '500',
              overflow: 'hidden',
            }}>
            Нууц үг мартсан
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="transparent"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {}}>
          <Text
            style={{
              color: '#3466c6',
              backgroundColor: 'white',
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 15,
              fontSize: 12,
              fontWeight: '500',
              overflow: 'hidden',
            }}>
            QR нэвтрэлт
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="transparent"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {}}>
          <Text
            style={{
              color: '#3466c6',
              backgroundColor: 'white',
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 15,
              fontSize: 12,
              fontWeight: '500',
              overflow: 'hidden',
            }}>
            ebarimt 2.0
          </Text>
        </TouchableHighlight>
      </View>
      <Text style={{fontSize: 10, color: 'gray'}}>
        v1.0.0.0 @nmka55. Тус аппликейшныг ашиглахад дата үнэ төлбөргүй.
      </Text>
    </View>
  );
}

const mapStateToProps = state => {
  return {userInfo: state?.userInfo};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({userLogin}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
