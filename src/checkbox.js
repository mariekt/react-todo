import React from 'react';

export default class Checkbox extends React.Component {

  constructor(){
    super();
    this.state = {
      checked: true
    };
  }

  onChange(){
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    return (
      <div>
        <input type="checkbox" id="abc" checked={this.state.checked} onChange={this.onChange.bind(this)}/>
        <label htmlFor="abc">Trykk her</label>
      </div>
    );
  }
}
