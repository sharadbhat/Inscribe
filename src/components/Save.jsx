import React, { Component } from 'react'
import { Button, Input, Popover, Tooltip } from 'antd'

// Utils
import { Context } from '../utils/Context'

// Icons
import { SaveOutlined } from '@ant-design/icons'

class Save extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filename: '',
      extension: '.txt'
    }
  }

  download = () => {
    const a = document.createElement('a')
    const file = new Blob([this.context.state.content], {type: 'text/plain'})
    a.href= URL.createObjectURL(file)
    a.download = this.state.filename + this.state.extension
    a.click()

	  URL.revokeObjectURL(a.href)
  }

  render() {
    return (
      <div>
        <Popover trigger='click' content={
          <div style={{
            height: 100,
            width: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              Enter filename:
              <Input onChange={(e) => this.setState({ filename: e.target.value })} addonAfter={'.txt'} />
            </div>
            <Tooltip
              title={this.state.filename === '' ? 'Filename cannot be empty' : ''}
              placement='bottom'
            >
              <Button
                style={{ width: '100%' }}
                disabled={this.state.filename === ''}
                type='primary'
                onClick={this.download}
              >
                Save
              </Button>
            </Tooltip>
          </div>
        }>
          <Tooltip title='Save' placement='left'>
            <SaveOutlined style={{ fontSize: '20px', color: 'white' }} />
          </Tooltip>
        </Popover>
      </div>
    )
  }
}

Save.contextType = Context

export default Save
