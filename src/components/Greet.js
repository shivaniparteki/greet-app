import { Component } from "react";
import { Input_one } from "../widgets/Input_one";
import { Button } from "../widgets/Buttons";
import { Message } from "../widgets/Message";
import { InitCap } from "../utils/InitCap";

//Smart Component//Class Based component
export class Greet extends Component {
  constructor() {
    super();
    // this.firstName = 'a';
    // this.lastName = '';
    this.names = { first: '', last: '' };
    this.takeName = this.takeName.bind(this);
    this.state = { message: '' };

    // this.bindEvents();

  }
  // bindEvents(){
  //   this.takeFirstName = this.takeFirstName.bind(this);
  //   this.takeLastName = this.takeLastName.bind(this);
  // }
  // takeFirstName(event){
  //     console.log('First Name', event.target.value, 'this is',this);
  //     this.firstName = event.target.value;
  // }
  // takeLastName(event){
  //     console.log('Last Name', event.target.value, 'this is',this);
  //     this.lastName = event.target.value;
  // }
  takeName(event, name) {
    let value = event.target.value;
    this.names[name] = value;
    console.log('Names', this.names);
    this.setState({ message: this.message });
  }

  sayWelcome() {
    let fullName = InitCap(this.names.first) + " " + InitCap(this.names.last);
    let message = 'Welcome ' + fullName;
    this.setState({ message: message });

  }

  clearAll() {
    this.message = '';
    this.names = { first: '', last: '' };
    this.setState({ message: this.message })
  }

  render() {
    return (
      <div className="container">
        <Message message='Greet App' />
        <Message message={this.state.message} />
        {/* <Input_one lbl = 'First' input = {this.takeFirstName.bind(this)} />
            <Input_one lbl = 'Last' input = {this.takeLastName.bind(this)}/> */}
        {/* <Input_one lbl = 'First' input = {this.takeFirstName} />
            <Input_one lbl = 'Last' input = {this.takeLastName}/> */}
        {/* <Input_one lbl = 'First' input ={(event)=>this.takeFirstName(event)} />
            <Input_one lbl = 'Last' input = {(event)=>this.takeLastName(event)}/> */}
        <Input_one val={this.names.first} lbl='First' input={this.takeName.bind(this)} />
        <Input_one val={this.names.last} lbl='Last' input={this.takeName.bind(this)} />
        <Button cssClassName='primary mt-3' label='Greet' fn={this.sayWelcome.bind(this)} /> &nbsp;
        <Button cssClassName='secondary mt-3' label='Clear All' fn={this.clearAll.bind(this)} />
      </div>
    );
  }
}

// export const Greet = () => {
//   return (
//     <div className="container">
//       <Input_one lbl = 'First' />
//       <Input_one lbl = 'Last'/>
//     </div>
//   );
// }  