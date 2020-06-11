import React from "react"


class RegForm extends React.Component {
    constructor(props){
        super()
        this.state ={
            ParentName: "",
            phoneNo: "",
            studentName: "",
            studentAge: "",
            gender: ""

        }
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        let age = this.state.studentAge;
        if (!Number(age)) {
          alert("Student age must be a number");
        }
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
        name="name"
        onChange={this.myChangeHandler}
      />
      <p>Phone Number:</p>
      <input
        type='text'
        name='phoneNo'
        onChange={this.myChangeHandler}
      />

      <p>Enter student name:</p>
      <input
        type='text'
        name='studentNme'
        onChange={this.myChangeHandler}
      />

      <p>Enter student age:</p> 
      <input
        type='text'
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
      <input 
      type='submit' />
      
      </form>

        )
    }

}
export default RegForm