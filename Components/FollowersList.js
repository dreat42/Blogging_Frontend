import React from 'react';
import {View, Text, Image, TouchableOpacity,FlatList,useState} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const FollowersList = ({ route, navigation}) => {
  // const navigation = useNavigation();
  const {followersData,following} = route.params;



  const renderItem = ({ item }) => (

    <View>
       <View
         style={{
           margin: '2%',
         }}>

       <View
           style={{
             margin: '4%',
             marginTop:'15%'
           }}>
            
            

           <Text
             style={{
               padding: '1%',
               paddingLeft: '2%',
               color: '#1C1C1C',
               fontFamily: 'SF-Pro-Display-Semibold',
               fontSize: 36,
               
               
             }}>
             Followers
           </Text>
           
         <View>
         </View>
   
   
 
     </View>

       </View>
   
       <TouchableOpacity
      key={item.key}
      // activeOpacity={1}
      // onPress={() => navigation.navigate('UserProfile',{followersData,following:"followersScreen"})}
      onPress={() => navigation.navigate('UserProfile', { followingData: followersData, following: "followersScreen" })}

      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#f2f3f0',
        borderRadius: 15,
        padding: '5%',
        width: '100%',
        marginBottom: '2%',
        backgroundColor:'#e2e2e2'
      }}>
      <Image
        source={{uri: item.profilePhoto}}
        style={{
          height: 50,
          width: 50,
          borderRadius: 50,
        }}
      />
      <View style={{flexDirection: 'column', marginLeft: '5%'}}>
        <Text
          style={{
            fontFamily: 'SF-Pro-Display-Medium',
            fontSize: 16,
            color: '#2b2b2e',
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            color: '#3e3f3f',
            fontFamily: 'SF-Pro-Display-Regular',
            fontSize: 15,
          }}>
          {item.email}
        </Text>
      </View>
    </TouchableOpacity>
    </View>
  );


  return (
    <FlatList
      data={followersData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default FollowersList;
