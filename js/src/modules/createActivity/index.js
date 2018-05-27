/**
 * Created by Administrator on 2018/5/26.
 */
import React, { Component } from 'react'

import styles from './index.css'
import Divider from '../../components/divider/divider.js'
import InputBox from '../../components/inputBox/index.js'

export default class CreateActivity extends React.Component {

  render() {
    return (
      <div className={styles['container']}>
        <div>
          <InputBox title={'活动名称'} content={'这里是活动名称'} showTopDivider />
          <InputBox title={'活动类型'} content={'聚餐'} showTopDivider />
          <InputBox title={'时间'} content={'2018-06-01'} showTopDivider />
          <InputBox title={'地点'} content={'嘉庚公园'} showTopDivider />
          <InputBox title={'限制人数'} content={'10人'} showTopDivider />
          <InputBox title={'活动内容'} content={'请输入活动内容'} showTopDivider />
        </div>
      </div>
    )
  }
}
