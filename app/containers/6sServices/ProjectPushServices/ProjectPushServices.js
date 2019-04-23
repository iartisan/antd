import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from '../../../utils/dva';

@connect()
class ProjectPushServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> 项目推送服务 </Text>
      </View>
    );
  }
}

export default ProjectPushServices;
