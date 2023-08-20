import {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import tslogo from './src/Image/ts-logo.png';
import user from './src/Image/user.png';
import keys from './src/Image/key.png';
import mc from './src/Image/mc.png';
import CheckBox from './src/Components/cb';

const w = Dimensions.get('window').width;

const App = () => {
  const [lang, setLang] = useState('I');
  const [tLang, setTLang] = useState('Bahasa Indonesia (id)');
  const [showL, setShowL] = useState(false);
  const [remember, setRemember] = useState(false);
  const [l, setL] = useState();
  const [ps, setPs] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const HandleLogin = () => {
    console.log({username: username, password: password});
  };

  useEffect(() => {
    if (lang == 'I') {
      setL('i');
      setTLang('Bahasa Indonesia (id)');
    } else {
      setL('e');
      setTLang('English (en)');
    }
    console.log({Remember_Username: remember});
  }, [lang, remember]);
  const handleLang = letter => {
    setLang(letter);
    setShowL(false);
  };
  return (
    <View style={style.main}>
      <StatusBar backgroundColor={'white'} />
      <View style={style.bbc}>
        <TouchableOpacity style={style.btnb} onPress={() => setShowL(!showL)}>
          <Text style={{color: 'black', fontWeight: '600'}}>{tLang}</Text>
        </TouchableOpacity>
        {showL ? (
          <View style={style.floatLang}>
            <TouchableOpacity
              style={[style.setBah, l == 'e' ? '' : style.setSelect]}
              onPress={() => handleLang('I')}>
              <Text style={style.tsetba}>Bahasa Indonesia (id)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.setBah, l == 'e' ? style.setSelect : '']}
              onPress={() => handleLang('E')}>
              <Text style={style.tsetba}>English (en)</Text>
            </TouchableOpacity>
          </View>
        ) : (
          ''
        )}
      </View>
      <View style={style.tsLogo}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={tslogo}
            style={{width: '60%', height: '60%', aspectRatio: '3/1'}}
          />
        </TouchableOpacity>
      </View>
      <View style={style.form}>
        <View style={style.formInputSec}>
          {ps ? (
            <View style={[style.formInputSecBase, style.errorLogin]}>
              <Text>
                {lang == 'I'
                  ? 'Galat saat log masuk, silahkan ulang lagi'
                  : 'Invalid login, please try again'}
              </Text>
            </View>
          ) : (
            ''
          )}
          <View style={style.formInputSecBase}>
            <TextInput
              placeholder={lang == 'I' ? 'Nama pengguna' : 'Username'}
              style={style.formInput}
              placeholderTextColor={'#171717'}
              value={username}
              onChangeText={e => setUsername(e)}
            />
            <View style={style.inputLabel}>
              <Image source={user} style={{width: '30%', height: '30%'}} />
            </View>
          </View>
          <View style={style.formInputSecBase}>
            <TextInput
              placeholder={lang == 'I' ? 'Kata sandi' : 'Password'}
              style={style.formInput}
              placeholderTextColor={'#171717'}
              value={password}
              onChangeText={e => setPassword(e)}
              secureTextEntry={true}
            />
            <View style={style.inputLabel}>
              <Image source={keys} style={{width: '30%', height: '30%'}} />
            </View>
          </View>
        </View>
        <View style={style.formButtonSec}>
          <TouchableOpacity style={style.formForgot}>
            <Text style={{color: '#9b9b9b', fontSize: 12}}>
              {lang == 'I'
                ? 'Lupa nama pengguna dan kata sandi?'
                : 'Forgotten your username or password?'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.formButton} onPress={HandleLogin}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {lang == 'I' ? 'Masuk' : 'Login'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.formRemember}
            onPress={() => setRemember(!remember)}>
            <CheckBox set={setRemember} rem={remember} />
            <Text style={{color: '#f01e1e', fontSize: 12}}>Ingat username</Text>
          </TouchableOpacity>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#e8e8e8',
            }}></View>
        </View>
      </View>
      <View style={style.oauth}>
        <View style={style.dir}>
          <Text style={{color: 'black', fontSize: 14}}>
            {lang == 'I'
              ? 'Masuk menggunakan akun Anda pada:'
              : 'Log in using your account on:'}
          </Text>
        </View>
        <TouchableOpacity style={style.oaButton}>
          <Image
            source={mc}
            style={{width: '30', height: '35%', aspectRatio: '1/1'}}
          />
          <Text style={{color: 'black'}}>Office 365</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e8e8e8',
            marginTop: 20,
          }}></View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    width: w,
  },
  bbc: {
    width: '100%',
    height: 60,
    backgroundColor: '#f0f4fe',
    padding: 10,
    position: 'relative',
    zIndex: 10,
  },
  btnb: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderRadius: 4,
    elevation: 3,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatLang: {
    position: 'absolute',
    backgroundColor: '#171717',
    width: 150,
    height: 80,
    left: 10,
    top: 50,
    borderRadius: 5,
    elevation: 10,
    padding: 5,
    zIndex: 10,
  },
  setBah: {
    width: '100%',
    height: '50%',
    borderColor: '#171717',
    borderWidth: 2,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  setSelect: {
    borderColor: 'red',
  },
  tsetba: {
    color: 'white',
    fontFamily: 'arial',
  },
  tsLogo: {
    width: '100%',
    height: 120,
  },
  form: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  formInputSec: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  formInputSecBase: {
    width: '100%',
    height: 'auto',
    borderRadius: 5,
    position: 'relative',
  },
  inputLabel: {
    position: 'absolute',
    height: '100%',
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formInput: {
    paddingLeft: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#e8e8e8',
    borderWidth: 2,
    color: '#171717',
  },
  formButtonSec: {
    width: '100%',
    height: 125,
    paddingVertical: 5,
    display: 'flex',
    alignItems: 'flex-end',
    gap: 13,
  },
  formButton: {
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: '100%',
    borderRadius: 5,
    elevation: 5,
  },
  formRemember: {
    width: 130,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 5,
  },
  oauth: {
    width: '100%',
    height: 170,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    paddingTop: 10,
  },
  dir: {
    width: '100%',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  oaButton: {
    height: 45,
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 2,
    borderRadius: 4,
    gap: 10,
  },
  errorLogin: {
    height: 53,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#e8e8e8',
    borderRadius: 5,
    paddingHorizontal: 20
  }
});
export default App;
