import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from '../../../utils/dva';

@connect()
class FinanceServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> 金融与证券服务 </Text>
      </View>
    );
  }
}

export default FinanceServices;
