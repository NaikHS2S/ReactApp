import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';

export default class ListWithIcon extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [
         {id:1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name: "avatar 1", like: 10, love: 11},
         {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name: "avatar 2", like: 20, love: 18},
         {id:3, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name: "avatar 3", like: 30, love: 21},
         {id:4, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name: "avatar 4", like: 14, love: 51},
         {id:5, image: "https://bootdey.com/img/Content/avatar/avatar4.png", name: "avatar 5", like: 18, love: 41},
         {id:6, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name: "avatar 6", like: 22, love: 61},
         {id:7, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name: "avatar 7", like: 19, love: 11},
      ],
    };
  }

  render() {
    return (
      <FlatList 
        style={styles.container} 
        enableEmptySections={true}
        data={this.state.data}
        keyExtractor= {(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <View style={styles.box}>
                <Image style={styles.image} source={{uri:item.image}} />
                <View style={styles.info}>
                  <Text  style={styles.name}>{item.name}</Text>
                  
                  <View style={styles.row}>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity onPress={this.handlePress}>
                        <Image style={styles.icon} source={{uri: "https://img.icons8.com/color/70/000000/facebook-like.png"}} />
                      </TouchableOpacity>
                      <Text style={styles.iconFonts}>{item.like}</Text>
                    </View>
                    
                    <View style={styles.iconContainer}>
                      <Image style={styles.icon} source={{uri: "https://img.icons8.com/color/70/000000/filled-like.png"}} />
                      <Text style={styles.iconFonts}>{item.love}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingTop:50,
  },
  icon:{
    width:30,
    height:30,
  },
  image: {
    width: 100,
    height:100
  },
  box: {
    marginTop:10,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  info: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize:20,
    marginTop:10,
    color: '#333'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop:10
  },
  iconContainer: {
    flex: 1,
    alignItems:'center'
  },
  iconFonts: {
    color: 'gray',
  },
  red: {
    color: '#FF4500',
  }
});
