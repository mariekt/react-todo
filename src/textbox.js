import React from 'react';

export default class Textbox extends React.Component {

  constructor(){
    super();
    this.state = {
      value: ""
    };
  }

  onChange(e){
    this.setState({
      value: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state.value)
    this.setState({
      value: ""
    })
  }

  render() {
    const placeholder = this.props.placeholder || "";
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input className="new-todo" placeholder={placeholder} type="text" value={this.state.value} onChange={this.onChange.bind(this)}/>
      </form>
    );
  }
}
