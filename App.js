
import { FlatList, Text, View,} from "react-native";
import UserData from "./UserData";


export default function App() {
  const users=[
    {
      id:1,
      name:"Mujtaba",
      email:"mujtaba@gmail.com"
    },
    {
      id:2,
      name:"Ibtsam",
      email:"ab@gmail.com"
    }, {
      id:3,
      name:"Moiz",
      email:"moiz@gmail.com"
    },  ]
    
    
  return (
    <View>
      <Text style={{  marginTop: 40, textAlign: "center", fontSize: 22,marginBottom: 20,}}>
        Components in Loop with FlatList
        </Text>
      <FlatList
      data={users}
      renderItem={({item})=> <UserData item={item}/> }/>
      
    </View>
  );
}

