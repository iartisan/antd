import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native'
import { connect } from 'react-redux'

import {IconFont} from "../components";
// import { Button } from '../components'
import { WhiteSpace, WingBlank, Icon, Card, Button, Grid } from '@ant-design/react-native';
import { ECharts } from 'react-native-echarts-wrapper';

import { NavigationActions } from '../utils'
// "@bang88/china-city-data": "^1.0.0",

@connect()
class Home extends Component {
  static navigationOptions = {
    tabBarLabel: '6S服务',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/house.png')}
      />
    ),
  }

  // data = Array.from(new Array(9)).map((_val, i)=>({
  //   icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  //   text: `Name${i}`
  // }));

  LiveWeeklyOption = {
    title: {
      text: 'APP使用率周况',
      x:  'center',
      y: '5%',
      textStyle: {
        color: '#ccc'
      }
    },
    backgroundColor: '#2c343c',
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        splitLine: {
          show: false
        }
    },
    grid: {
      x: 0,
      y: 0,
      width: '100%',
      height: '100%'
    },
    series: [{
        data: [222, 123, 123, 123, 43, 532, 123],
        type: 'line',
        areaStyle: {}
    }]
  }
  surveyData = [
    {
      icon: <IconFont name='&#xe658;' size={70} style={{ color: '#ccc'}} /> ,
      data: 3,
      text: `下载量`
    },
    {
      icon: <Icon name={'bar-chart'} />,
      data: 3,
      text: `注册企业`
    },
    {
      icon: <Icon name={'bar-chart'} />,
      data: 3,
      text: `注册用户`
    },
    // {
    //   icon: <Icon name={'bar-chart'} />,
    //   data: 3,
    //   text: `日活跃度`
    // },
    // {
    //   icon: <Icon name={'bar-chart'} />,
    //   data: 3,
    //   text: `月活跃度`
    // },
    // {
    //   icon: <Icon name={'bar-chart'} />,
    //   data: 3,
    //   text: `年活跃度`
    // },
  ]


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

  menuFinaceData = [
    {
      icon: <Icon name={'bar-chart'} />,
      text: `浏览量`
    },
    {
      icon: <Icon name={'bar-chart'} />,
      text: `提交申请`
    },
    {
      icon: <Icon name={'bar-chart'} />,
      text: `合作成功`
    },
  ]

  menuNewsData = [
    {
      icon: <Icon name={'bar-chart'} />,
      text: `浏览量`
    },
    {
      icon: <Icon name={'bar-chart'} />,
      text: `点赞数`
    },
    {
      icon: <Icon name={'bar-chart'} />,
      text: `分享数`
    },
  ]

  option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }]
  }

  gotoScreen=(routeName) => {
    this.props.dispatch(NavigationActions.navigate({ routeName: routeName }))
  }


  render() {
    return (
      <ScrollView
       style={styles.container}
       contentContainerStyle={styles.containerContent}
      >
        <View style={styles.echartWrapper}>
                  <WhiteSpace />
                  <ECharts option={this.LiveWeeklyOption}></ECharts>
        </View>
        <View style={styles.surveyWrapper}>
          <WingBlank size={"lg"}>
          <WingBlank size={"lg"}>
          <View style={styles.surveyContainer}>
          {this.surveyData.map((_obj, i)=>
            {
              return (
              <View style={(i==this.surveyData.length-1)?styles.surveyLastItem: styles.surveyItem}>
                <Text style={{color: '#ccc'}}>{_obj.data}</Text>
                <Text style={{color: '#ccc'}}>{_obj.text}</Text>
              </View>
              );
            }
          )}
          </View>
          </WingBlank>
          </WingBlank>
        </View>
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
         <Card>
            <Card.Header
              title="投资昭化"
              // thumbStyle={{ width: 30, height: 30 }}
              // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              // extra="2019年4月20日"
            />
            <Card.Body>
              <View style={styles.echartWrapper}>
                        <ECharts option={this.option}></ECharts>
              </View>
              <View style={{}}>
                <Grid
                  data={this.menuFinaceData}
                  columnNum={3}
                  // isCarousel
                  onPress={(_el, index) => alert(index)}
                  hasLine={true}
                />
              </View>
            </Card.Body>
            {/* <Card.Footer
              content="月上线人数360人"
              extra="日上线人数45人"
            /> */}
          </Card>
          <WhiteSpace />
         <Card>
            <Card.Header
              title="昭化咨讯"
              // thumbStyle={{ width: 30, height: 30 }}
              // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              // extra="2019年4月20日"
            />
            <Card.Body>
              <View style={styles.echartWrapper}>
                        <ECharts option={this.option}></ECharts>
              </View>
              <View style={{}}>
                <Grid
                  data={this.menuNewsData}
                  columnNum={3}
                  // isCarousel
                  onPress={(_el, index) => alert(index)}
                  hasLine={false}
                />
              </View>
            </Card.Body>
            {/* <Card.Footer
              content="月上线人数360人"
              extra="日上线人数45人"
            /> */}
          </Card>

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
  echartWrapper: {
    height: 200,
    backgroundColor: '#2c343c',
    // paddingLeft: 20,
  },
  surveyWrapper:{
    backgroundColor: '#2c343c',
    // position: 'relative',
    // top: -100,
    // backgroundColor: '#fff',
    // width: 380,
    paddingBottom:20,
  },
  surveyContainer:{
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#c23531',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,


  },
  surveyItem: {
    backgroundColor: '#c23531',
    height: 50,
    flex:1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.3,
    borderRightColor: '#ccc'
  },
  surveyLastItem: {
    backgroundColor: '#c23531',
    height: 50,
    flex:1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default Home
