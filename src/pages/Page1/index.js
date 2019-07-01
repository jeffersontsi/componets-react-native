import React from 'react';

import { ScrollView, Text } from 'react-native';

import { Container } from './styles';
import MarqueeText from 'react-native-marquee';
import { TextInputMask } from 'react-native-masked-text';

import Header from '~/components/Header';
import List from '~/components/List';
// import Marquee from '~/components/Marquee';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.setselectedItem = this.setselectedItem.bind(this);

    this.state = {
      nomeSelecionado: '',
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
        },
      ],
    };
  }

  setselectedItem(item) {
    this.setState({ nomeSelecionado: item.name });
  }

  render() {
    return (
      //
      <Container>
        <ScrollView>
          <Header title="Jefferson Silva de Souza" />
          <ScrollView>
            <List names={this.state.names} setselectedItem={this.setselectedItem} />
          </ScrollView>
          <Text>Selecionado</Text>
          <Text>{this.state.nomeSelecionado == '' ? '' : this.state.nomeSelecionado} </Text>
          {/* <Marquee title="Testando texto rolante" /> */}

          <TextInputMask
            type="money"
            value={this.state.simple}
            onChangeText={(text) => {
              this.setState({
                simple: text,
              });
            }}
          />
          <TextInputMask
            type="money"
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$',
              suffixUnit: '',
            }}
            value={this.state.advanced}
            onChangeText={(text) => {
              this.setState({
                advanced: text,
              });
            }}
          />
          <MarqueeText
            style={{ fontSize: 36 }}
            duration={10000}
            marqueeOnStart
            loop
            marqueeDelay={1000}
            marqueeResetDelay={1000}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is
            simply dummy text of the printing and typesetting industry
          </MarqueeText>
        </ScrollView>
      </Container>
    );
  }
}
