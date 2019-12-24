/* eslint-disable react/sort-comp */
/* eslint-disable react/react-in-jsx-scope */

import { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'


class Index extends Component {

  config = {
    navigationBarTitleText: 'user'
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
      <View className='index'>
       user
      </View>
    )
  }
}

export default Index
