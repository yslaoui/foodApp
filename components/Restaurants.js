import {React} from 'react';
import {  Text, View, Button, ScrollView, SafeAreaView, Image } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import styles from '../services/styles';
import HomeScreenCell from './HomeScreenCell';

const gelatoData = [
  {header: "Gelato", cell: [{title: "Gelato"}, {title: "Chocolate"}, {title: "Mint"}]},
  {header: "Coffee", cell: [{title: "Flat White"}, {title: "Latte"}, {title: "Caffe Americano"}]},
];

const pizzaData = [
  {header: "Pizza", cell: [{title: "Margherita"}, {title: "Prosciutto Fungi"}, {title: "Emiliana"}]},
  {header: "Pasta", cell: [{title: "Pomodoro"}, {title: "Carbonara"}, {title: "Marinara"}]},
];

const asianData = [
  {header: "Small Bites", cell: [{title: "Chicken Satay"}, {title: "Prosciutto Fungi"}, {title: "Duck Dumplings"}]},
  {header: "Mains", cell: [{title: "Szechuan"}, {title: "Mee Goreng"}, {title: "Nasi Lemak"}]},
];

const Restaurants = ({ navigation}) => 
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
                  title= "Gelateria"
                  tagline="Desert, Ice cream, £££"
                  eta="10-30"
                  imgUri = {require('../assets/images/gelato.jpg')}
                  action = {() => {
                    navigation.navigate('Menu', {items: gelatoData})}}
                />
                <HomeScreenCell
                  title= "Pizza Fresco"
                  tagline="Italian, Pizza, ££"
                  eta="10-30"
                  imgUri = {require('../assets/images/pizza.jpg')}
                  action = {() => {
                    navigation.navigate('Menu', {items: pizzaData})}}
                />
                <HomeScreenCell
                  title= "Lotus Blossom Bistro"
                  tagline="Asian, Sushis, £££"
                  eta="10-30"
                  imgUri = {require('../assets/images/asian.jpg')}
                  action = {() => {
                    navigation.navigate('Menu', {items: asianData})}}
                />
            </Section>
          </TableView>
        </ScrollView>
      </View>
  )
}
 export default Restaurants;