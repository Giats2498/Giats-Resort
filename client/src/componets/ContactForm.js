import React, { Component } from 'react'

export default class ContactForm extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            fields: {},
            errors: {},
        }
     }
 
     handleValidation(){
         let fields = this.state.fields;
         let errors = {};
         let formIsValid = true;
 
         //FirstName
         if(!fields["firstname"]){
            formIsValid = false;
            errors["firstname"] = "Cannot be empty";
         }
 
         if(typeof fields["firstname"] !== "undefined"){
            if(!fields["firstname"].match(/[a-zA-Z]+/g)){
               formIsValid = false;
               errors["firstname"] = "Only letters";
            }        
         }
         
         //LastName
         if(!fields["lastname"]){
            formIsValid = false;
            errors["lastname"] = "Cannot be empty";
         }
 
         if(typeof fields["lastname"] !== "undefined"){
            if(!fields["lastname"].match(/[a-zA-Z]+/g)){
               formIsValid = false;
               errors["lastname"] = "Only letters";
            }        
         }
 

        //Message
        if(!fields["message"]){
            formIsValid = false;
            errors["message"] = "Cannot be empty";
         }

        this.setState({errors: errors});
        return formIsValid;
    }
 
    contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
            var link = "mailto:me@example.com"
                 + "?cc="
                 + "&subject=" +this.state.fields["firstname"] + " " + this.state.fields["lastname"] 
                 + "&body=" + this.state.fields["message"] ;
    
            window.location.href = link;
        }
     }
 
     handleChange(field, e){         
         let fields = this.state.fields;
         fields[field] = e.target.value;        
         this.setState({fields});
     }
    render() {
        return (
            <div className="contactus-formvalidation">
                    <form method="post" encType="text/plain" onSubmit= {this.contactSubmit.bind(this)} >
                        <div className="form-names">
                            <div>
                                <span>First Name</span>  
                                <span className="contactus-error">{this.state.errors["firstname"]}</span>
                            </div>
                            <div>
                                <span>Last Name</span>
                                <span className="contactus-error">{this.state.errors["lastname"]}</span>
                            </div>
                        </div> 
                        <div className="form-names">
                            <input type="text" name="FirstName" onChange={this.handleChange.bind(this, "firstname")} value={this.state.fields["firstname"]}/>
                            <input type="text" name="LastName"  onChange={this.handleChange.bind(this, "lastname")} value={this.state.fields["lastname"]}/>
                        </div>
                        <div className="form-message">
                            <div>
                                <span>Message</span> 
                                <span className="contactus-error">{this.state.errors["message"]}</span>
                            </div>
                        </div>
                        <div className="form-message">
                            <textarea type="text" name="Message"  onChange={this.handleChange.bind(this, "message")}>{this.state.fields["message"]}</textarea>
                        </div>    
                        <div className="form-button">
                            <button  id="submit" value="Submit">Send Message</button>
                        </div>  
                    </form>
            </div>
        )
    }
}
