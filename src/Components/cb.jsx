import {View, StyleSheet, TouchableOpacity} from 'react-native';
const CheckBox = ({set, rem}) => {
  return (
    <View style={style.base}>
      <View style={[style.btn, rem == true ? style.btnActive : '']}>
        <TouchableOpacity
          style={[style.circle, rem == true ? style.circleActive : '']}
          onPress={() => set(true)}></TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  base: {
    height: 25,
    width: 40,
    paddingHorizontal: 5,
    paddingVertical: 4,
  },
  btn: {
    width: '100%',
    height: '100%',
    borderColor: '#f0f4fe',
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  btnActive: {
    backgroundColor: 'green',
  },
  circle: {
    width: '50%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 50,
    elevation: 5,
  },
  circleActive: {
    transform: [{translateX: 14}],
  },
});
export default CheckBox;
