//This is an example code for ListItem//
import React from 'react';
//import react in our code.
import { StyleSheet, FlatList, Text, View, Alert } from 'react-native';
//import all the components we are going to use.
import { ListItem } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  list = [
    {
      name: 'Amy Farha',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
    },
  ];

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{ source: { uri: item.avatar_url } }}
      bottomDivider
      chevron
    />
  );

  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.list}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
});
