import React, { Component } from 'react'
import {withRoomConsumer} from "../context";
import {FaInfoCircle} from 'react-icons/fa';
import {withRouter} from 'react-router-dom';

class ReservationForm extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            fields: {roomname:this.props.name,checkin:this.props.checkin,checkout:this.props.checkout,nights:this.props.nights,price:this.props.price,guests:this.props.guests},
            errors: {},
            toast:""
        }
     }
 
     handleValidation(){
         let fields = this.state.fields;
         let errors = {};
         let formIsValid = true;

         //Title
         if(!fields["title"]){
            formIsValid = false;
            errors["title"] = "Required Title";
         }
 
         //country
         if(!fields["country"]){
            formIsValid = false;
            errors["country"] = "Required Country";
         }

         //FirstName
         if(!fields["firstname"]){
            formIsValid = false;
            errors["firstname"] = "Required Firstname";
         }
 
         if(typeof fields["firstname"] !== "undefined"){
            if(!fields["firstname"].match(/[a-zA-Z]+/g)){
               formIsValid = false;
               errors["firstname"] = "Only letters";
            }        
         }
         if(typeof fields["firstname"] !== "undefined"){
            if(fields["firstname"][0].match(/^\s+$/)){
               formIsValid = false;
               errors["firstname"] = "Required Firstname";
            }        
         }
         
         //LastName
         if(!fields["lastname"]){
            formIsValid = false;
            errors["lastname"] = "Required Lastname";
         }
 
         if(typeof fields["lastname"] !== "undefined"){
            if(!fields["lastname"].match(/[a-zA-Z]+/g)){
               formIsValid = false;
               errors["lastname"] = "Only letters";
            }        
         }
         if(typeof fields["lastname"] !== "undefined"){
            if(fields["lastname"][0].match(/^\s+$/)){
               formIsValid = false;
               errors["lastname"] = "Required Lastname";
            }        
         }
         
         //Address
         if(!fields["address"]){
            formIsValid = false;
            errors["address"] = "Required Address";
         }
         if(typeof fields["address"] !== "undefined"){
            if(fields["address"][0].match(/^\s+$/)){
               formIsValid = false;
               errors["address"] = "Required Address";
            }        
         }

        //PostalCode
          if(!fields["postalcode"]){
            formIsValid = false;
            errors["postalcode"] = "Required Postal Code";
         }
         if(typeof fields["postalcode"] !== "undefined"){
            if(fields["postalcode"][0].match(/^\s+$/)){
               formIsValid = false;
               errors["postalcode"] = "Required Postal Code";
            }        
         }

         //City
         if(!fields["city"]){
            formIsValid = false;
            errors["city"] = "Required City";
         }
         if(typeof fields["city"] !== "undefined"){
            if(fields["city"][0].match(/^\s+$/)){
               formIsValid = false;
               errors["city"] = "Required City";
            }        
         }

        //Telephone
        if(!fields["telephone"]){
            formIsValid = false;
            errors["telephone"] = "Required Telephone";
         }
 
         if(typeof fields["telephone"] !== "undefined"){
            if(!fields["telephone"].match(/^\d+$/)){
               formIsValid = false;
               errors["telephone"] = "Only digits";
            }        
         }

         if(typeof fields["telephone"] !== "undefined"){
            if(fields["telephone"][0].match(/^\s+$/)){
               formIsValid = false;
               errors["telephone"] = "Required Telephone";
            }        
         }
         
         
        //Email
        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Required Email";
         }
 
         if(typeof fields["email"] !== "undefined"){
            if(!fields["email"].match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
               formIsValid = false;
               errors["email"] = "Only emails";
            }        
         } 

         if(typeof fields["email"] !== "undefined"){
            if(fields["email"][0].match(/^\s+$/)){
               formIsValid = false;
               errors["email"] = "Required Email";
            }        
         }

        this.setState({errors: errors});
        return formIsValid;
    }
 
    reservationSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
           this.props.actions.reservation(this.state.fields).then(res => {
               if(res.status===200){
                  this.launch_toast("Everything went well!");
               }else{
                  this.launch_toast("Something went wrong!");
               }
           });
            setTimeout(function() {
               this.props.history.push('/');
            }.bind(this), 3500)
        }
     }
 
     handleChange(field, e){         
         let fields = this.state.fields;
         fields[field] = e.target.value;        
         this.setState({fields});
     }

     launch_toast(msg) {
      this.setState({
         toast:msg
      })
      var x = document.getElementById("toast")
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
     }
    render() {
        return (
            <div className="reservation-form">
                <div className="reservation-form-center">
                    <label>Personal Details</label>
                </div>              
                <div>
                    <form method="post" encType="text/plain" onSubmit= {this.reservationSubmit.bind(this)} >
                        <div>
                            <label>Title</label>
                            <select onChange={this.handleChange.bind(this, "title")} value={this.state.fields["title"]}>
                              <option defaultValue> -- Select a Title -- </option>
                                <option value="Dr">Dr</option>
                                <option value="Family">Family</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Ms">Ms</option>
                            </select>
                            <label>{this.state.errors["title"]}</label>
                        </div>
                        <div>
                            <label>FirstName</label>
                            <input type="text" name="FirstName" onChange={this.handleChange.bind(this, "firstname")} value={this.state.fields["firstname"]}/>
                            <label>{this.state.errors["firstname"]}</label>
                        </div>
                        <div>
                            <label>Lastname</label>
                            <input type="text" name="Lastname" onChange={this.handleChange.bind(this, "lastname")} value={this.state.fields["lastname"]}/>
                            <label>{this.state.errors["lastname"]}</label>
                        </div>
                        <div>
                            <label>Address</label>
                            <input type="text" name="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]}/>
                            <label>{this.state.errors["address"]}</label>
                        </div>
                        <div>
                            <label>Postal Code</label>
                            <input type="text" name="PostalCode" onChange={this.handleChange.bind(this, "postalcode")} value={this.state.fields["postalcode"]}/>
                            <label>{this.state.errors["postalcode"]}</label>
                        </div>
                        <div>
                            <label>City</label>
                            <input type="text" name="City" onChange={this.handleChange.bind(this, "city")} value={this.state.fields["city"]}/>
                            <label>{this.state.errors["city"]}</label>
                        </div>
                        <div>
                            <label>Country</label>
                            <select onChange={this.handleChange.bind(this, "country")} value={this.state.fields["country"]}>
                                <option defaultValue>-- Select a Country -- </option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Åland Islands">Åland Islands</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">Bouvet Island</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote D'ivoire">Cote D'ivoire</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern Territories">French Southern Territories</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guernsey">Guernsey</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-bissau">Guinea-bissau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                <option value="Korea, Republic of">Korea, Republic of</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macao">Macao</option>
                                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                <option value="Moldova, Republic of">Moldova, Republic of</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montenegro">Montenegro</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn">Pitcairn</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russian Federation">Russian Federation</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint Helena">Saint Helena</option>
                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                <option value="Saint Lucia">Saint Lucia</option>
                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Timor-leste">Timor-leste</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Viet Nam">Viet Nam</option>
                                <option value="Virgin Islands, British">Virgin Islands, British</option>
                                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                <option value="Western Sahara">Western Sahara</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                            <label>{this.state.errors["country"]}</label>
                        </div>
                        <div>
                            <label>Telephone</label>
                            <input type="text" name="Telephone" onChange={this.handleChange.bind(this, "telephone")} value={this.state.fields["telephone"]}/>
                            <label>{this.state.errors["telephone"]}</label>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" name="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                            <label>{this.state.errors["email"]}</label>
                        </div>
                        <div>
                            <label>Requests (Optional)</label>
                            <textarea type="text" name="Message" onChange={this.handleChange.bind(this, "message")} value={this.state.fields["message"]}/>
                        </div>
                        <div className="reservation-form-button">
                            <button  id="submit" value="Submit">Confirm Booking</button>
                        </div> 
                    </form>
                     <div id="toast">
                       <div id="img"><FaInfoCircle/></div>
                       <div id="desc">{this.state.toast}</div>
                     </div>
                </div>
            </div>
        )
    }
}
export default withRouter(withRoomConsumer(ReservationForm));