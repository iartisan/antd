import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native'
import { connect } from 'react-redux'

// import { Button } from '../components'
import { WhiteSpace, WingBlank, Icon, Card, Button, Grid } from '@ant-design/react-native';
import { ECharts } from 'react-native-echarts-wrapper';

import { NavigationActions } from '../../../utils'

@connect()
class EnterpriseServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  gotoEnterpriseAnalyze = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'EnterpriseAnalyze' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.echartWrapper}>
        <Text>我是企业运行服务的列表页</Text>
        <Button onPress={this.gotoEnterpriseAnalyze}>去企业运行服务</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default EnterpriseServices
