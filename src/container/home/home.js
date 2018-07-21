import React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import styles from './home.styl'

@withRouter
class Home extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  componentDidMount() {
    // todo
  }

  render() {
    return (
      <div className={styles.home}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar
        </NavBar>
        <h1>home</h1>
        <button onClick={() => this.props.history.push({
            pathname: '/user',
            state: { from: 'home' },
          })}
        >user
        </button>
      </div>
    )
  }
}

export default Home
