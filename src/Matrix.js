import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#fff'
    }
  }

  handleClick = (color) => {
    this.setState({
      selectedColor: color
    }) 
  }

  // selectedColorFunc = () => {               // another way to do this
  //   return this.state.selectedColor
  // }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell selectedColor={this.state.selectedColor} key={idx} color={val} />)
  )
                                             // {this.selectedColorFunc()}

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector handleClick={this.handleClick}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
