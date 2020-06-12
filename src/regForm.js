import React from "react";
import QRCode from 'qrcode';
import './bootstrap.min.css';

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
        document.getElementById('canvas').style.display = 'inline-block';
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
          <div>
            <h1 className='logo mt-5'><span className='istemlabs'>iStemLabs.</span><span className='text-danger africa'><i>Africa</i></span></h1>
            <div className='container-fluid' onSubmit={this.mySubmitHandler}>
              <div className='row'>
                <div className='col-4'></div>
                <div className='col-4 shadow-lg rounded my-5 p-5'>
                  <h3 className='text-center py-'>Register</h3>
                  <form>
                    <div class="form-group" className='text-left'>
                      <input type="text" class="form-control p-2 my-3" placeholder='Parent Name' name="parentName" onChange={this.myChangeHandler}/>
                    </div>
                    <div class="form-group" className='text-left'>
                      <input type="number" class="form-control p-2 my-3" placeholder='Phone Number' name='phoneNo' onChange={this.myChangeHandler}/>
                    </div>
                    <div class="form-group" className='text-left'>
                      <input type="text" class="form-control p-2 my-3" placeholder='Student Name' name='studentName' onChange={this.myChangeHandler}/>
                    </div>
                    <div class="form-group" className='text-left'>
                      <input type="number" class="form-control p-2 my-3" placeholder='Student Age' name='age' onChange={this.myChangeHandler}/>
                    </div>
                    <div class="form-group" className='text-left'>
                      <input list='gender' type="text" class="form-control p-2 my-3" placeholder='Gender' onChange={this.myChangeHandler}/>
                      <datalist id="gender">
                        <option value="Male"/>
                        <option value="Female"/>
                       </datalist>
                    </div>
                    <div className='text-right '>
                      <button type="submit" class="btn btn-danger my-2 h1 p-2 button inline-block"><span className='button'>Submit</span></button>
                    </div>
                    <canvas id='canvas' className='text-center'/>
                  </form>
                </div>
                <div className='col-4'></div>
              </div>
            </div>
          </div>
        )
    }

}
export default RegForm