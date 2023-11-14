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
                     <Cell title = {row.title} onPress = {() => alert(`Hi ${row.title} :)`)}></Cell>
                 ))
                 }             
                 </Section>
           ))}

      </TableView>
    </ScrollView>

  )
}

export default Menu;