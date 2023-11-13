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
              separatorTintColor='#ccc' 
              hideSurroundingSeparators={true}
              >
                <HomeScreenCell
                  title= "Joe's Gelato"
                  tagline="Desert, Ice cream, £££"
                  eta="10-30"
                  imgUri = {require('../assets/images/gelato.jpg')}
                  action = {() => navigation.navigate('Menu')}
 
                />
                <HomeScreenCell
                  title= "Joe's Pizza"
                  tagline="Italian, Pizza, ££"
                  eta="10-30"
                  imgUri = {require('../assets/images/pizza.jpg')} 
                />
                <HomeScreenCell
                  title= "Joe's Mediteranean"
                  tagline="Mediteranean, Fine dining, ££££"
                  eta="10-30"
                  imgUri = {require('../assets/images/mediteranean.jpg')} 
                />
                <HomeScreenCell
                  title= "Joe's Asian"
                  tagline="Asian, Sushis, £££"
                  eta="10-30"
                  imgUri = {require('../assets/images/asian.jpg')} 
                />
            </Section>
          </TableView>
        </ScrollView>
      </View>
  )
}
 export default Restaurants;