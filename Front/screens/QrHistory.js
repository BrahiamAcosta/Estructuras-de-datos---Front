import { Text, View, StyleSheet} from 'react-native';
import { Button } from '@rneui/base';
import { getAllUserQrs , getFavoriteUserQrs} from '../utils/api';
import { getAuthData } from '../utils/authStorage';
import { useState, useEffect } from 'react';
import { ListItem, Avatar } from '@rneui/themed'
import ListItemOverlay from '../Components/ListItemOverlay';

export default function QrHistory({ navigation }) {
    const [userName, setUserName] = useState('')
    const [data, setData] = useState([])
    const [showList, setShowList] = useState(false)
    const [showOverlay, setShowOverlay] = useState(false)
    const [selectedResources, setselectedResources] = useState({})

    useEffect(()=>{
        const fetchAuthData = async () => {
            const { userName } = await getAuthData();
            setUserName(userName);
       };
       fetchAuthData();
    },[])

    const handleAll = async ()=>{
        const response = await getAllUserQrs(userName)
        console.log(response)
        setData(response)
        setShowList(!showList)
    }

    const handleFavorites = async ()=>{
        const response = await getFavoriteUserQrs(userName)
        setData(response)
        setShowList(!showList)
    }

    const handleItemPressed = (qr)=>{
        setselectedResources(qr);
        setShowOverlay(!showOverlay)
        console.log(qr)
    }

    const toggleOverlay = ()=>{
        setShowOverlay(!showOverlay)
    }
    
    return(
    <>
    {showList ? (
        <View style={styles.background}>
            {
                data.map((qr,index)=>(
                    <ListItem style={{width:"100%",alignItems:"flex-start",
                     justifyContent:"center"}}key={index} 
                     bottomDivider 
                     onPress={()=>handleItemPressed(qr)}>
                        <Avatar source={{uri:qr.resources[2].toString()}}/>
                        <ListItem.Content>
                            <ListItem.Title style={{fontWeight:'bold'}}>{qr.primaryName}</ListItem.Title>
                            <ListItem.Title >{`Tags: ${qr.tags.join(', ')}`}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </View>
    ):(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{ fontSize: 20,
          fontWeight: 'bold', }}>Selecciona que Qrs quieres visualizar:</Text>
            <Button
                buttonStyle={{
                  backgroundColor: '#3F4145',
                  width: 235,
                  borderRadius: 30,
                  margin:20
                }}
                title="Todos"
                onPress={handleAll}
              />
              <Button
                buttonStyle={{
                  backgroundColor: '#3F4145',
                  width: 235,
                  borderRadius: 30,
                }}
                title="Favoritos"
                onPress={handleFavorites}
              />
        </View>
    )}
    <ListItemOverlay visible={showOverlay} toggleOverlay={toggleOverlay} qr={selectedResources}/>
    </>)
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
