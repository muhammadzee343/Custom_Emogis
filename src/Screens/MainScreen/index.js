import React, {PureComponent} from 'react';
import {StatusBar, StyleSheet, View, Text} from 'react-native';

class EmojiScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewHeight: 0,
    };
  }
  find_dimesions(layout) {
    const {x, y, width, height} = layout;
    // console.warn(x);
    // console.warn(y);
    // console.warn(width);
    // console.warn(height);
    this.setState({
      viewHeight: height,
    });
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar />
        <View style={{flexDirection: 'row'}}>
          <View
            onLayout={event => {
              this.find_dimesions(event.nativeEvent.layout);
            }}
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#f0c129',
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: this.state.viewHeight / 2,
              marginLeft: 20,
              marginTop: 20,
              // alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View
                style={{
                  height: this.state.viewHeight / 6,
                  width: this.state.viewHeight / 6,
                  marginTop: '30%',
                  marginRight: '7%',
                  backgroundColor: 'black',
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: this.state.viewHeight / 8,
                  // marginBottom: '7%',
                  //   justifyContent: 'flex-end',
                }}
              />
              <View
                style={{
                  height: this.state.viewHeight / 6,
                  width: this.state.viewHeight / 6,
                  marginTop: '30%',
                  marginLeft: '7%',
                  backgroundColor: 'black',
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: this.state.viewHeight / 8,
                  //   justifyContent: 'flex-end',
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: this.state.viewHeight / 8,
                  width: this.state.viewHeight / 1,
                  marginTop: '18%',
                  borderColor: 'black',
                  borderWidth: 1,
                  backgroundColor: 'black',
                  // borderTopRightRadius: this.state.viewHeight / 10,
                  // borderTopLeftRadius: this.state.viewHeight / 10,
                  // borderBottomRightRadius: this.state.viewHeight / 3,
                  // borderBottomLeftRadius: this.state.viewHeight / 3,
                  // position: 'absolute',
                  borderRadius: this.state.viewHeight / 2,
                  transform: [
                    {rotateX: '30deg'},
                    {rotateY: '-60deg'},
                    {rotateZ: '20deg'},
                  ],
                }}
              />
            </View>
          </View>

          <View
            onLayout={event => {
              this.find_dimesions(event.nativeEvent.layout);
            }}
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'green',
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: this.state.viewHeight / 2,
              marginLeft: 20,
              marginTop: 20,
              // alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View
                style={{
                  height: this.state.viewHeight / 6,
                  width: this.state.viewHeight / 6,
                  marginTop: '30%',
                  marginRight: '7%',
                  backgroundColor: 'white',
                  borderColor: 'white',
                  borderWidth: 1,
                  borderRadius: this.state.viewHeight / 8,
                }}
              />
              <View
                style={{
                  height: this.state.viewHeight / 6,
                  width: this.state.viewHeight / 6,
                  marginTop: '30%',
                  marginLeft: '7%',
                  backgroundColor: 'white',
                  borderColor: 'white',
                  borderWidth: 1,
                  borderRadius: this.state.viewHeight / 8,
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: this.state.viewHeight / 3,
                  width: this.state.viewHeight / 1.7,
                  marginTop: '18%',
                  borderColor: 'white',
                  borderWidth: 3,
                  backgroundColor: 'transparent',
                  // borderTopRightRadius: this.state.viewHeight / 10,
                  // borderTopLeftRadius: this.state.viewHeight / 10,
                  // borderBottomRightRadius: this.state.viewHeight / 3,
                  // borderBottomLeftRadius: this.state.viewHeight / 3,
                  // position: 'absolute',
                  // borderRadius: this.state.viewHeight / 2,
                  // transform: [
                  //   {rotateX: '30deg'},
                  //   {rotateY: '-60deg'},
                  //   {rotateZ: '20deg'},
                  // ],
                }}
              />
            </View>
          </View>

          <View
            onLayout={event => {
              this.find_dimesions(event.nativeEvent.layout);
            }}
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'gray',
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: this.state.viewHeight / 2,
              marginLeft: 20,
              marginTop: 20,
              // alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View
                style={{
                  height: this.state.viewHeight / 6,
                  width: this.state.viewHeight / 6,
                  marginTop: '30%',
                  marginRight: '7%',
                  backgroundColor: 'white',
                  borderColor: 'white',
                  borderWidth: 1,
                  borderRadius: this.state.viewHeight / 8,
                  // marginBottom: '7%',
                  //   justifyContent: 'flex-end',
                }}
              />
              <View
                style={{
                  height: this.state.viewHeight / 6,
                  width: this.state.viewHeight / 6,
                  marginTop: '30%',
                  marginLeft: '7%',
                  backgroundColor: 'white',
                  borderColor: 'white',
                  borderWidth: 1,
                  borderRadius: this.state.viewHeight / 8,
                  //   justifyContent: 'flex-end',
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: this.state.viewHeight / 5,
                  width: this.state.viewHeight / 1.8,
                  marginTop: '18%',
                  borderColor: 'white',
                  borderWidth: 1,
                  backgroundColor: 'white',
                  // borderTopRightRadius: this.state.viewHeight / 10,
                  // borderTopLeftRadius: this.state.viewHeight / 10,
                  borderBottomRightRadius: this.state.viewHeight / 4,
                  borderBottomLeftRadius: this.state.viewHeight / 4,
                }}
              />
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View
            style={{
              marginLeft: 20,
              justifyContent: 'center',
              width: 100,
              alignItems: 'center',
            }}>
            <Text>Okay</Text>
          </View>
          <View
            style={{
              marginLeft: 20,
              justifyContent: 'center',
              width: 100,
              alignItems: 'center',
            }}>
            <Text>Good</Text>
          </View>
          <View
            style={{
              marginLeft: 20,
              justifyContent: 'center',
              width: 100,
              alignItems: 'center',
            }}>
            <Text>Great</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
export default EmojiScreen;
