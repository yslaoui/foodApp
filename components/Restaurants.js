import {React} from 'react';
import {  Text, View, Button, ScrollView, SafeAreaView, Image } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import styles from '../services/styles';
import HomeScreenCell from './HomeScreenCell';


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