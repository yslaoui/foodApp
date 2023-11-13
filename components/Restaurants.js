import {React} from 'react';
import {  Text, View, Button, ScrollView, SafeAreaView, Image } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import styles from '../services/styles';

const HomeScreenCell = (props) => {
  return (
    <Cell
    {...props}
    cellContentView = {
        <View style={[styles.restaurantView, styles.container]}>
          <Image
            source={props.imgUri}
            style={styles.image}
          >
          </Image>
          <View style={styles.eta}>
            <Text style={styles.etaText}>{props.eta} {'\n'} mins </Text>
          </View>
          <Text style={styles.restaurantHeader}>{props.title}</Text>
          <Text style={styles.restaurantTagline}>{props.tagline}</Text>
        </View>
    }


  ></Cell>
  )
}

const Restaurants = ({navigation}) => 
{
  return (      
      <View style={styles.container}>
        <ScrollView>
          <TableView>
            <Section 
              header='firstSection' 
              separatorTintColor='#ccc' 
              hideSurroundingSeparators={true}
              >
                <HomeScreenCell
                  title= "Joe's Gelato"
                  tagline="Desert, Ice cream, £££"
                  eta="10-30"
                  imgUri = {require('../assets/images/gelato.jpg')} 
                />
            </Section>
          </TableView>
        </ScrollView>
      </View>
  )
}
 export default Restaurants;