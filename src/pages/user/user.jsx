/* eslint-disable react/sort-comp */
/* eslint-disable react/react-in-jsx-scope */

import { Component } from '@tarojs/taro'
import { View, Input,Button } from '@tarojs/components'
import './user.less'
import Head from '../../components/head/head';

class User extends Component {

  config = {
    navigationBarTitleText: '用户中心'
  }

  componentWillReceiveProps() {
  }

  componentWillUnmount() { }

  componentDidMount() {
  }
  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View >
        <Head />
        <View>
          <Input placeholder='请输入accesstoken' />
          <Button>登陆</Button>
        </View>
      </View>
    )
  }
}

export default User