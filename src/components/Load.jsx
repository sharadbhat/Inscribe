import React, { Component } from 'react'
import { Upload, message, Button, Popover, Tooltip } from 'antd'

// Utils
import { Context } from '../utils/Context'

// Icons
import { UploadOutlined } from '@ant-design/icons'

class Load extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isUploading: false
    }
  }

  beforeUpload = file => {
    const reader = new FileReader()

    reader.onload = e => {
      this.context.setContent(e.target.result)
      this.setState({
        isUploading: false
      })
      message.success('File uploaded successfully')
    }

    this.setState({
      isUploading: true
    })
    
    reader.readAsText(file)

    // Prevent upload
    return false
  }

  render() {
    return (
      <div>
        <Popover trigger='click' content={
          <Upload
          showUploadList={false}
          accept={['.txt']}
          name='file'
          beforeUpload={this.beforeUpload}
          >
            <Button
              icon={<UploadOutlined />}
              loading={this.state.isUploading}
            >
              {this.state.isUploading ? 'Uploading' : 'Upload'}
            </Button>
          </Upload>
        }>
          <Tooltip title='Load' placement='left'>
            <UploadOutlined style={{ fontSize: '20px', color: 'white' }} />
          </Tooltip>
        </Popover>
      </div>
    )
  }
}

Load.contextType = Context

export default Load
