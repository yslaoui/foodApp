import {React} from 'react';
import {  Text, View,  Image } from 'react-native';
import { Cell } from 'react-native-tableview-simple';
import styles from '../services/styles';


const HomeScreenCell = (props) => {
    return (
      <Cell
      {...props}
      onPress = {props.action}
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

export default HomeScreenCell;