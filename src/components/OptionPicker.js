import React, { Component } from 'react'

class OptionPicker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      option: 'single-page applications',
      className: '',
      i: 1
    }
  }

  setOption() {
    let options = [
      'single-page applications',
      'UI/UX',
      'React.js',
      'jQuery',
      'webpack',
      'Bootstrap',
      'Photoshop',
    ]

    this.setState({
      option: options[this.state.i],
    })

    if(this.state.className === 'animated bounceIn') {
      this.setState({
        className: 'animated pulse'
      })
    } else {
      this.setState({
        className: 'animated bounceIn'
      })
    }

    if(this.state.i > 5){
      this.setState({
        i: 0
      })
    } else {
      this.setState({
        i: this.state.i + 1
      })
    }
  }

  componentDidMount() {
    setInterval(this.setOption.bind(this), 3000)
  }

  render() {
    return (
      <span className={this.state.className} style={{display: "inline-block"}}>{this.state.option}</span>
    )
  }
}

export default OptionPicker
