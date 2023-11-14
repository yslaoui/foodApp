import {React} from 'react';
import {  Text, View, Button, ScrollView, SafeAreaView, Image } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import styles from '../services/styles';
import HomeScreenCell from './HomeScreenCell';
import menuData from '../services/menuData';

const {gelatoData, pizzaData, asianData} = menuData

const Restaurants = ({ navigation}) => 
{
  return (      
      <View style={styles.container}>
        <ScrollView>
          <TableView>
            <Section 
              separatorTintColor='#ccc' 
              hideSeparator={true}
              >
                <HomeScreenCell
                  title= "Gelato Garden"
                  tagline="Desert, Ice cream, £££"
                  eta="10-30"
                  imgUri = {require('../assets/images/gelato.jpg')}
                  action = {() => {
                    navigation.navigate('Menu', 
                                        {items: gelatoData})}}
                />
                <HomeScreenCell
                  title= "Pizza Fresco"
                  tagline="Italian, Pizza, ££"
                  eta="5-10"
                  imgUri = {require('../assets/images/pizza.jpg')}
                  action = {() => {
                    navigation.navigate('Menu', 
                                        {items: pizzaData})}}
                />
                <HomeScreenCell
                  title= "Lotus Blossom Bistro"
                  tagline="Asian, Fusion, £££"
                  eta="40+"
                  imgUri = {require('../assets/images/asian.jpg')}
                  action = {() => {
                    navigation.navigate('Menu', 
                                        {items: asianData})}}
                />
            </Section>
          </TableView>
        </ScrollView>
      </View>
  )
}
 export default Restaurants;