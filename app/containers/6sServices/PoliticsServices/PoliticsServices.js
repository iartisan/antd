import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from '../../../utils/dva';

@connect()
class PoliticsServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> 政策咨询服务 </Text>
      </View>
    );
  }
}

export default PoliticsServices;
