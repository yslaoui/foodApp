import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      // alignItems: 'center',
      // justifyContent: 'center',
      // borderColor: 'red',
      // borderWidth: 5
    },
    restaurantView: 
    {
      height: 290, 
      padding: 20,  
    },
    image: 
    {
      width: "100%", 
      height: 190, 
      marginBottom: 10
    }, 
    eta : 
    {
      backgroundColor: "#ffffff",
      flex: 1, 
      justifyContent: 'center',
      height: "25%",
      width: "30%", 
      borderRadius: 50, 
      position: 'absolute', 
      marginLeft: "70%",
      marginTop: "55%"
    }, 
    etaText: 
    {
      textAlign: 'center',
      fontSize: 18, 
      fontWeight: 'bold'
    }, 
    restaurantHeader:  
    {
      fontWeight: 'bold', 
      fontSize: 20
    }, 
    restaurantTagline: 
    {
      color: '#8c8c8c', 
      marginTop: 5
    }
  });

export default styles;
  