import {Text, TouchableOpacity, View} from 'react-native';

import {Overlay} from 'react-native-elements/dist/overlay/Overlay';
import PropTypes from 'prop-types';
import React from 'react';

export default function QuarterPicker({
  overlayVis,
  setOverlayVis,
  setCurrentQuarter,
}) {
  return (
    <Overlay
      isVisible={overlayVis}
      onBackdropPress={() => setOverlayVis(false)}>
      <View>
        {[1, 2, 3, 4].map(x => {
          return (
            <TouchableOpacity
              key={x}
              style={{
                width: '100%',
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                setCurrentQuarter(x);
                setOverlayVis(false);
              }}>
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
                {x}-р улирал
              </Text>
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity
          key={'5'}
          style={{
            width: '100%',
            marginVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => setOverlayVis(false)}>
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
            Хаах
          </Text>
        </TouchableOpacity>
      </View>
    </Overlay>
  );
}

QuarterPicker.propTypes = {
  overlayVis: PropTypes.bool,
  setOverlayVis: PropTypes.func,
  setCurrentQuarter: PropTypes.func,
};
