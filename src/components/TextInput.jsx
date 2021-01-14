import React, { Component } from 'react'
import { Input, message } from 'antd'

// CSS
import '../App.css';

const { TextArea } = Input;

class TextInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  componentDidMount = () => {
    let cachedText = localStorage.getItem('inscribe.cachedText')
    if (cachedText !== undefined && cachedText !== null && cachedText !== '') {
      this.setState({
        text: cachedText
      })
      message.success('Content restored from browser storage!')
    }
    window.addEventListener('beforeunload', this.componentCleanup);
  }

  componentCleanup = () => {
    localStorage.setItem('inscribe.cachedText', this.state.text)
  }

  componentWillUnmount = () => {
    this.componentCleanup();
    window.removeEventListener('beforeunload', this.componentCleanup);
  }

  updateText = newText => {
    this.setState({
      text: newText.target.value
    })
  }

  render() {
    return (
      <div>
        <TextArea
          placeholder='Start typing...'
          allowClear
          autoSize={{minRows: 26}}
          value={this.state.text}
          onChange={this.updateText}
        />
      </div>
    )
  }
}

export default TextInput
