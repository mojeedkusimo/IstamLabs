import React from "react";
import QRCode from 'qrcode';
import './bootstrap.min.css';
import './qrcode.js';

class RegForm extends React.Component {
    constructor(props){
        super()
        this.state ={
            parentName: "",
            phoneNo: "",
            studentName: "",
            studentAge: "",
            gender: ""

        }
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        let str = `This is ${this.state.studentName} with Guardian ${this.state.parentName} whose phone number is ${this.state.phoneNo}`;

        QRCode.toCanvas(document.getElementById('canvas'), str, function (error) {
            if(error) {
                console.log(error);
            }
            else {
                console.log('success!');
            }
        })
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
    render(){
        return(
<form onSubmit={this.mySubmitHandler}>
           <p>Enter Parent/Guaidian Name:</p>
      <input
        type="text"
        name="parentName"
        onChange={this.myChangeHandler}
      />
      <p>Phone Number:</p>
      <input
        type='number'
        name='phoneNo'
        onChange={this.myChangeHandler}
      />

      <p>Enter student name:</p>
      <input
        type='text'
        name='studentName'
        onChange={this.myChangeHandler}
      />

      <p>Enter student age:</p> 
      <input
        type='number'
        name='age'
        onChange={this.myChangeHandler}
      />

       <p>Gender:</p>
      <select name = "gender">
        <option value = "-1" selected>[Select Gender]</option>
        <option value = "1">Male</option>
        <option value = "2">Female</option>
        onChange={this.myChangeHandler}
                            
     </select>
      
      <br/>
      <br/>
      <input type='submit' />
      <canvas id='canvas' className='text-center'/>
       </form>
        )
    }

}
export default RegForm