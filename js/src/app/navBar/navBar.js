/**
 * Created by Administrator on 2018/5/2.
 */
import React from 'react'
import styles from './navBar.css'

const ICON = 'http://img.hb.aicdn.com/882b528c914211c9df16734834f18fda9a34b43364cda-5IlszA_fw658'

const columns = [
  { icon: ICON, name: '活动' },
  { icon: ICON, name: '组局' },
  { icon: ICON, name: '我的' }
]

export default class NavBar extends React.Component {
  //static propTypes = {
  //  children: PropTypes.node
  //}

  renderColumns() {
    return columns.map((column, i) => {
      return (
        <div className={styles['column']} key={i}>
          <img src={ column.icon } className={styles['columnIcon']}/>
          <div className={styles['columnName']}>{ column.name }</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className={styles['container']}>
        <div className={styles['divider']}/>
        <div className={styles['columns']}>
          { this.renderColumns() }
        </div>
      </div>
    )
  }
}
