import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  ScrollView, Text, SectionList
} from 'react-native';

import {
  Container
} from './styles';

import Header from '~/components/Header';
import List from '~/components/List';

export default class Main extends React.Component {

  constructor (props){
    super(props);

    this.setselectedItem = this.setselectedItem.bind(this);

    this.state = {
      selectedItem:{id: 0, name : ''},
      nomeSselecionado: '', 
      names: [
        {
           id: 0,
           name: 'Opção 1',
        },
        {
           id: 1,
           name: 'Opção 2',
        },
        {
           id: 2,
           name: 'Opção 3',
        },
        {
           id: 3,
           name: 'Opção 4',
        }
     ]

    }

  }

  setselectedItem(item){
    this.setState({nomeSselecionado:item.name});

    alert(item.name);
  }

  render() {
    return (
  // 
  <Container>

    <ScrollView>
      <Header title={'Heder da Aplicação'} />

      <ScrollView>
        <List names = {this.state.names} setselectedItem = {this.setselectedItem} />
      </ScrollView>
      <Text>Selecionado</Text>
      <Text>{this.state.nomeSselecionado == "" ? "":this.state.nomeSselecionado} </Text>
      
    </ScrollView>
  </Container>
  )

  }
}
