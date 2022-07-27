

import React, { useState } from 'react'
import { View ,Text,ScrollView, TextInput, Touchable, Button, TouchableOpacity} from 'react-native'
import { StyleSheet } from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const App = () => {
  const [onchageDataa, setonchageDataa] = useState([])
  const [allTodos,setAllTodos]=useState([])

//  console.log(onchageDataa)
 const add=()=>{
  setAllTodos([...allTodos,onchageDataa])
  // suno yrr ye batao ye icons kase lgao m     check whatsappp ao 
  console.log(allTodos);
 }
 const deletee=(id)=>{
console.log(id)
const abc=allTodos.filter((e,ind)=>{

  return(
  ind!==id
)

})
setAllTodos(abc)
 }
const deleteall=()=>{
  setAllTodos([])
}

 return (
    // <div>App</div>
    <View style={styles.main}>
     {/* <ScrollView>  */}
       <Text
           style={styles.heading} >
            Todo App
          </Text>
      <View style={styles.inputt}>
<TextInput placeholder='Enter You Todo Here' style={styles.allinputs} value={onchageDataa} onChangeText={(e)=>setonchageDataa(e)}/>
 <TouchableOpacity onPress={add}>
  <Text>
   <FontAwesome5 style={styles.iconn}   name='plus' size={30}/>
  </Text>

 </TouchableOpacity>
      </View>
          <View style={styles.inner}>
 <ScrollView>
  <Text style={styles.heading2}>Your Todos</Text>

  {allTodos.map((e,id)=>{
    
    return(
   <>   
      <Text style={styles.myinnerData}>
  {e}
<TouchableOpacity onPress={(e)=>{deletee(id)}}>
  <FontAwesome5 name='trash' style={{marginLeft:15}} size={20}/>
</TouchableOpacity>
</Text>

 </>
    )
  })}
 </ScrollView>
<View style={{backgroundColor:"rgba(255,255,255,.04)",borderRadius:30}}>
  <TouchableOpacity onPress={deleteall}>
<Text style={{fontSize:30,padding:20}}>
<FontAwesome5 name="trash" color="red" size={30}/>
  Delete All Todos
</Text>
</TouchableOpacity>
</View>
 </View>
        </View>
    )
  }
    const styles = StyleSheet.create({
    
      main:{
        flex:1,
        backgroundColor:"rgba(52,81,161,255)",
        color:"white",
  
      },
      heading:{
        flex:1,
        fontSize:30,
      //   backgroundColor:"lightCyan",
      // color:"black",
      textAlign:"center",
      
    },
    inner:{
      alignItems:'center',
      padding:10,
      // paddingBottom:20,
      flex:10,
      // backgroundColor:"white",
      // color:"white",

    },
    inputt:{
// flex:1,
// backgroundColor:"rgba(212, 243, 247, 0)",
// color:"black",
// paddingHorizontal:"20px",
marginHorizontal:20,
flexDirection:'row',
textAlign:"center"
    },
    allinputs:{
      // color:"black",
      // textAlign:'center',
      flex:1,
      
    },
    iconn:{
flex:1,
textAlign:"right",

},
    heading2:{
      textAlign:"center",
      paddingBottom:30,
      color:"rgba(255, 255, 255, 0.5)",
fontSize:20,
    },
    myinnerData:{
backgroundColor:"rgba(5,25,86,255)",
paddingVertical:15,
paddingHorizontal:10,
textAlign:"center",
borderRadius:25,
marginBottom:10
    },
    })
  
    


export default App