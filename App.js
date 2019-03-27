import React, { Component } from 'react';
//import Slider from '@react-native-community/slider';
import { 
  Text, 
  View, 
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
  Slider} from 'react-native';

  import Icon from 'react-native-vector-icons/FontAwesome';

  type Props = {};

  const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
  };

  class SliderView_1 extends Component {
    constructor(props){
        super(props);
        this.state={
            value: 20
        }
    }

    _onChange =(value)=>{
        this.setState({
            value: value
        })
    };
    render(){
        return(
            <View style={styles.subView}>
                <Slider style={styles.slider}
                        minimumValue={0}
                        maximumValue={100}
                        value={this.state.value}
                        onValueChange={this._onChange}/>
                <Text style={styles.text}>
                    当前选择的value：{this.state.value}
                </Text>
            </View>
        )
    }
}

export default class HelloWorldApp extends Component<Props> {
  render() {
    Icon.getImageSource('user', 20, 'red').then((source) => this.setState({ userIcon: source }));
    return (
        <View>
                    
          <View style={styles.headcontainer}>
            <Text></Text>
          </View>

          <View style={styles.headcontainer}>
            <Text style={styles.title}>Welcome to Useless Tank</Text>
            <Image source={require('./src/tank.png')} style={{width: 40, height: 40, resizeMode: 'stretch'}}/>
          </View>

          <TouchableOpacity style={styles.button}>
            <View style={styles.arrowUp}></View>
          </TouchableOpacity>

          <View style={styles.arrowscontainer}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.arrowLeft}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.circle} ></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View style={styles.arrowRight}></View>
          </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button}>
            <View style={styles.arrowDown}></View>
          </TouchableOpacity>

          <View style={styles.mainView}>
            <SliderView_1/>
          </View>

          <TouchableOpacity>
            <View style={{marginTop:16, marginBottom:16}}>
            {/*Icon.Button Component*/}
              <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={()=>alert("Login with Facebook")}>
                Login with Facebook
              </Icon.Button>
            </View>
        </TouchableOpacity>


        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height: '100%',
  },
  headcontainer: {
      //flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center', 
      height:50,
  },
  arrowscontainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center', 
    height:50,
  },
  title:{
      fontWeight: 'bold',
      fontSize: 25,
  },
  button:{
    height:70,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'    
},
  triangle: {
    width: 0,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: 'transparent',
    borderStyle: 'solid',
  },
  arrowUp: {
    borderTopWidth: 0,
    borderRightWidth: 30,
    borderBottomWidth: 30,
    borderLeftWidth: 30,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: "#00BCD4",
    borderLeftColor: 'transparent',
  },
  arrowRight: {
    borderTopWidth: 30,
    borderRightWidth: 0,
    borderBottomWidth: 30,
    borderLeftWidth: 30,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: "#00BCD4",
  },
  arrowDown: {
    borderTopWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 0,
    borderLeftWidth: 30,
    borderTopColor: "#00BCD4",
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  arrowLeft: {
    borderTopWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 30,
    borderLeftWidth: 0,
    borderTopColor: 'transparent',
    borderRightColor: "#00BCD4",
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: 'red'
  },
  mainView:{
    flex: 1,
    backgroundColor: '#aaaaaa',
    alignItems: 'center'
},
  subView: {
      backgroundColor: '#ffffff',
      marginTop: 30,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      width: 320
  },
  slider: {
      width: 280,
      marginTop: 20
  },
  text: {
      marginTop: 20
  },
  arrow:{
    justifyContent: 'center',
    marginLeft:5,
    marginTop:1,
    width:3,
    height:3,
    borderStyle:'solid',
    borderWidth:6,
    borderTopColor:'#fff',//下箭头颜色
   //borderLeftColor:'#f76260',//右箭头颜色
   //borderBottomColor:'#fff',//上箭头颜色
   //borderRightColor:'#fff'//左箭头颜色
},
  upTriangleShapeCSS: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 0,
    height: 0,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 50,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#00BCD4'
  },
  downTriangleShapeCSS: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 0,
    height: 0,
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 50,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
    borderLeftColor: '#00BCD4',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent'
  },
});