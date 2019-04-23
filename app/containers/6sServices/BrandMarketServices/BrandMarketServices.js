import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from '../../../utils/dva';

@connect()
class BrandMarketServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> 品牌与市场促进服务 </Text>
      </View>
    );
  }
}

export default BrandMarketServices;
