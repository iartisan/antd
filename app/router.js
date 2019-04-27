import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationActions,
} from 'react-navigation'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import Loading from './containers/Loading'
import Login from './containers/Login'
import Home from './containers/Home'
import Account from './containers/Account'
import Detail from './containers/Detail'

import Finace from './containers/Finace'
import Coordinate from './containers/Coordinate';

//企业运行服务
import EnterpriseServices from './containers/6sServices/EnterpriseServices/EnterpriseServices';
import EnterpriseAnalyze  from "./containers/6sServices/EnterpriseServices/EnterpriseAnalyze";

//项目推送服务
import ProjectPushServices from './containers/6sServices/ProjectPushServices/ProjectPushServices';

//科技创新服务
import InnovationServices from './containers/6sServices/InnovationServices/InnovationServices';

//金融与证券服务
import FinanceServices from './containers/6sServices/FinanceServices/FinanceServices';

//品牌与市场促进服务
import BrandMarketServices from './containers/6sServices/BrandMarketServices/BrandMarketServices';

// 政策咨询服务
import PoliticsServices from './containers/6sServices/PoliticsServices/PoliticsServices';

// bottom Navigator start
const HomeNavigator = createBottomTabNavigator({
  '6S服务': { screen: Home },
  '企业分析': {screen: EnterpriseAnalyze},
  '投资合作': { screen: Finace},
  '项目推进': { screen: Coordinate },
  '关于': { screen: Account },
})

HomeNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index]

  return {
    headerTitle: routeName,
  }
}

//bottom Navigator end

// main navigator start
const MainNavigator = createStackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator },
    Detail: { screen: Detail },

    //项目运行服务
    EnterpriseServices: {screen: EnterpriseServices},
    // EnterpriseAnalyze: {screen: EnterpriseAnalyze},

    // 项目推送服务
    ProjectPushServices: {screen: ProjectPushServices},

    //科技创新服务
    InnovationServices: {screen: InnovationServices},

    //金融与证券服务
    FinanceServices: {screen: FinanceServices},

    //品牌与市场促进服务
    BrandMarketServices: {screen: BrandMarketServices},

    //政策咨询服务
    PoliticsServices: {screen: PoliticsServices}

  },
  {
    headerMode: 'float',
  }
)
// main navigator end


//login navigator start
const AppNavigator = createStackNavigator(
  {
    Main: { screen: MainNavigator },
    Login: { screen: Login },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
  }
)
//login navigator end

export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)

const App = reduxifyNavigator(AppNavigator, 'root')

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getActiveRouteName(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { app, dispatch, router } = this.props
    if (app.loading) return <Loading />

    return <App dispatch={dispatch} state={router} />
  }
}

export default Router
