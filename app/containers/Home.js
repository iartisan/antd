import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native'
import { connect } from 'react-redux'

// import { Button } from '../components'
import { WhiteSpace, WingBlank, Icon, Card, Button, Grid } from '@ant-design/react-native';

import { NavigationActions } from '../utils'
import {IconFont} from "../components";
import {ReadingStatus} from '../components';
// "@bang88/china-city-data": "^1.0.0",

@connect()
class Home extends Component {
  //Header
  static navigationOptions = {
    tabBarLabel: '6S服务',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/house.png')}
      />
    ),
  }

  //menu6s
  menu6sData = [
    {
      icon: <IconFont name='&#xe658;' size={70} style={{ color: '#ccc'}} /> ,
      routeName: 'EnterpriseServices',
      text: `企业运行服务`
    },
    {
      icon: <IconFont name='&#xe64f;' size={70} style={{ color: '#ccc'}} /> ,
      routeName: 'ProjectPushServices',
      text: `项目推送服务`
    },
    {
      icon: <IconFont name='&#xe653;' size={70} style={{ color: '#ccc'}} /> ,
      routeName: 'InnovationServices',
      text: `科技创新服务`
    },
    {
      icon: <IconFont name='&#xe651;' size={70} style={{ color: '#ccc'}} /> ,
      routeName: 'FinanceServices',
      text: `金融与证券服务`
    },
    {
      icon: <IconFont name='&#xe650;' size={70} style={{ color: '#ccc'}} /> ,
      routeName: 'BrandMarketServices',
      text: `品牌与市场促进服务`
    },
    {
      icon: <IconFont name='&#xe655;' size={70} style={{ color: '#ccc'}} /> ,
      routeName: 'PoliticsServices',
      text: `政策咨询服务`
    },
  ]

  //Finance Part
  echartFinance=[
    ['Mon', 1],
    ['Tue', 2],
    ['Wed', 3],
    ['Thu', 4],
    ['Fri', 5],
    ['Sat', 6],
    ['Sun', 7]
  ]
  menuFinanceData = [
    {
      text: `浏览量`,
      data: 1233
    },
    {
      text: `提交申请`,
      data: 233
    },
    {
      text: `合作成功`,
      data: 212
    },
  ]
  

  // News Part
  echartNews=[
    ['Mon', 7],
    ['Tue', 6],
    ['Wed', 5],
    ['Thu', 4],
    ['Fri', 3],
    ['Sat', 2],
    ['Sun', 1]

  ]
  menuNewsData = [
    {
      text: `浏览量`,
      data: 1233
    },
    {
      text: `点赞数`,
      data: 123
    },
    {
      text: `分享数`,
      data: 112
    },
  ]

  //Account Part wait to add

  gotoScreen=(routeName) => {
    this.props.dispatch(NavigationActions.navigate({ routeName: routeName }))
  }


  render() {
    return (
      <ScrollView
       style={styles.container}
       contentContainerStyle={styles.containerContent}
      >

      <ReadingStatus />
        <View style={{backgroundColor: '#fff'}}>


                <Button>6S服务</Button>
                <Grid
                  data={this.menu6sData}
                  columnNum={3}
                  // isCarousel
                  onPress={(_el, index) =>{ this.gotoScreen(_el.routeName) }}
                  hasLine={true}
                />
          </View>

          <WhiteSpace />
          <Button>投资昭化</Button>
          <ReadingStatus title="投资昭化点击率" surveyData={this.menuFinanceData} echartData={this.echartFinance} />

          <WhiteSpace />
          <Button>昭化资讯</Button>
          <ReadingStatus title='昭化资讯点击率' surveyData={this.menuNewsData}  echartData={this.echartNews} />

      </ScrollView>
    )
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

export default Home
