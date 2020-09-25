import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <Text style={{fontWeight:'bold',marginBottom:10,fontSize:20}}>Resource file</Text>
      <DropDownPicker
    items={[
        {label: 'PDF', value: 'item1'},
        {label: 'DOC', value: 'item2'},
    ]}
    containerStyle={{height: 60,width:'100%'}}
    style={styles.newStyle}
    placeholder="Search by file type"   
/>
</View>
<View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
      }}>
        <View style={{marginTop:50}}>
         <View style={styles.filesStyle} >
        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.innerFileLeft} >
        <Image source = {require('/Users/Waqar/Downloads/pic2.png')}
        style={{height:50,width:50,margin:10}}
        />
        </View>
        <View style={styles.innerFileRight} >
          <Text style={{fontWeight:'bold'}}>Our Affiliate policy.PDF</Text>
          <Text>{"\n"}By Admin {"\t"} Nov 3rd,2019 at 4:34 AM</Text>
        </View>
        </View> 
        </View>
        <View style={styles.filesStyle} >
        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.innerFileLeft} >
        <Image
        style={{height:50,width:50,margin:10}}
        source={require('/Users/Waqar/Downloads/pic2.png')}
        />
        </View>
        <View style={styles.innerFileRight} >
          <Text style={{fontWeight:'bold'}}>Our Affiliate policy.PDF</Text>
          <Text>{"\n"}By Admin {"\t"} Nov 3rd,2019 at 4:34 AM</Text>
        </View>
        </View> 
        </View>
        <View style={styles.filesStyle} >
        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.innerFileLeft} >
        <Image
        style={{height:50,width:50,margin:10}}
        source={require('/Users/Waqar/Downloads/pic2.png')}
        />
        </View>
        <View style={styles.innerFileRight} >
          <Text style={{fontWeight:'bold'}}>Our Affiliate policy.PDF</Text>
          <Text>{"\n"}By Admin {"\t"} Nov 3rd,2019 at 4:34 AM</Text>
        </View>
        </View> 
        </View>
        <View style={styles.filesStyle} >
        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.innerFileLeft} >
        <Image 
        style={{height:50,width:50,margin:10}}
        source={require('/Users/Waqar/Downloads/pic2.png')}
        />
        </View>
        <View style={styles.innerFileRight} >
          <Text style={{fontWeight:'bold'}}>Our Affiliate policy.PDF</Text>
          <Text>{"\n"}By Admin {"\t"} Nov 3rd,2019 at 4:34 AM</Text>
        </View>
        </View> 
        </View>
        
      </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5e1f5',      
  },
  innerContainer: {
    margin:10,
    marginTop:25
  },
  filesStyle: {
    height:90,
    backgroundColor:'white', 
    borderRadius:5,
    width:'98%',
    alignSelf:'center',
    marginTop:15
   
  },
  innerFileRight: {
    width:'70%',
    height: 70,
    backgroundColor: 'white',
    margin:10
  },
  innerFileLeft: {
    width: '20%', height: 70,
    margin:10,
    borderRadius:5,
    borderColor:'grey',
    borderWidth:1,
    
  }
});
