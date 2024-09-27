
import {
  
  
  StyleSheet,
  Text,
  
  View,
} from "react-native";


export default  UserData =(props)=>{
    const item = props.item;
    return(
      <View style={styles.box}>
         
          <Text style={styles.item}>{item.name}</Text>
          <Text style={styles.item}>{item.email}</Text>
        </View>
    )
  
  }
  
  const styles = StyleSheet.create({
    text: {
      marginTop: 40,
      textAlign: "center",
      fontSize: 22,
      marginBottom: 20,
    },
  
    item: {
      fontSize:15,
      color:"black",
      flex:1,
      margin:2,
      backgroundColor:"skyblue"
    },
    box:{
      flexDirection:"row",
      borderWidth:2,
      marginBottom:10,
      borderColor:"darkgreen"
    }
  });
  