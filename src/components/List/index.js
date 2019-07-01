import React from 'react';
import {
  Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';

const List = (props) => {
  const { setselectedItem, names } = props;

  return (
    <View>
      {names.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={styles.container}
          onPress={() => setselectedItem(item)}
        >
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default List;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
  text: {
    color: '#4f603c',
  },
});
