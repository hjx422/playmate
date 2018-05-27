/**
 * Created by Administrator on 2018/5/26.
 */
import React from 'react'
import styles from './index.css'

import Divider from '../divider/divider.js'

const CustomedDivider = (props) => {
  return (
    <div style={{ 'margin-left': '1rem', 'margin-right': '1rem' }}>
      <Divider/>
    </div>
  )
}

const InputBox = ({ title, content, showTopDivider, showBottomDivider }) => {
  return (
    <div className={styles['container']}>
      { showTopDivider ? <CustomedDivider /> : ''}
      <div className={styles['main']}>
        <div className={styles['title']}>{ title }</div>
        <input className={styles['content']} value={ content }></input>
      </div>
      { showBottomDivider ? <CustomedDivider /> : ''}
    </div>
  )
}

export default InputBox
