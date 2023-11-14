import {React} from 'react';
import {  Text, View, Button, ScrollView, Image, Switch, TextInput} from 'react-native';
import styles from '../services/styles';
import {Cell, Section, TableView} from 'react-native-tableview-simple'



const Menu = ({route, navigation}) => 
{
  const sectionData = route.params.items;
  return (
    <ScrollView>
      <TableView>
        {sectionData.map (section => (
             <Section header={section.header}>
                 {section.cell.map(row => (
                     <Cell 
                        title = {row.title}
                        cellStyle = 'RightDetail' 
                        detail = {row.price}
                        onPress = {() => alert(`${row.title} ordered. Enjoy !`)}></Cell>
                 ))
                 }             
                 </Section>
           ))}

      </TableView>
    </ScrollView>

  )
}

export default Menu;