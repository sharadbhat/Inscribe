import React, { Component } from 'react'
import { Descriptions, Popover, Switch, Tooltip } from 'antd'

// Utils
import { Context, Consumer } from '../utils/Context'

// Icons
import { SettingOutlined } from '@ant-design/icons'

class Settings extends Component {
  constructor(props) {
    super(props)

    this.content = (
      <Descriptions
        bordered
        column={1}
      >
        <Descriptions.Item label='Autosave'>
          <Consumer>
            {(props) => {
              return (
                <Switch onChange={this.setAutoSave} checked={props.state.autoSave} />
              )
            }}
          </Consumer>
        </Descriptions.Item>
      </Descriptions>
    )
  }

  setAutoSave = val => {
    this.context.setAutoSave(val)
  }

  render() {
    return (
      <div>
        <Popover trigger='click' content={this.content}>
          <Tooltip title='Settings' placement='left'>
            <SettingOutlined style={{ fontSize: '20px', color: 'white' }} />
          </Tooltip>
        </Popover>
      </div>
    )
  }
}

Settings.contextType = Context

export default Settings
