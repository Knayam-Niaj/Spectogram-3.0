import React, { Component, StyleSheet, FlatList, SafeAreaView, Image } from 'react';
import { Text, View } from 'react-native';

import posts from '../PostCard';

export default class Feed extends Component {
  render(){
    return(
      <View style = {styles.container}>
        <SafeAreaView style = {styles.droidSafeArea} />
        <View style = {styles.appTitle}>
          <View style = {styles.appIcon}>
            <Image
              source = {require("../assets/logo.png")}
              style = {styles.iconImage}
              ></Image>
          </View>

          <View style = {styles.appTitleTextContainer}>
            <Text style = {styles.appTitleText}> Spectagram </Text>
          </View>
        </View>

        <View style = {styles.cardContainer}>
          <FlatList
            keyExtractor = {this.keyExtractor}
            data = {posts}
            renderItem = {this.renderItem}
          />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  droidSafeArea: {
    marginTop: Platfron.OS === "android" ? StatusBar.currentHeight: RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height:"100%",
    resizeMode: "contain"
  },
  appTitleTextcontainer:{
    flex: 0.8,
    justifycontent:"center"
  },
  appTitleText:{
    color: "white",
    fontsize: RFValue(28),
  },
  cardContainer:{ 
    flex: 0.85
  }
});