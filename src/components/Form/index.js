import React from 'react';
import {
  Switch,
  MenuItem,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import formUtil from './formUtil';
import { FaExclamationCircle } from 'react-icons/fa';
import { TextValidator } from 'react-material-ui-form-validator';
import {
  Form,
  SubmitMessage,
  ErrorMessage,
  styles,
} from './styles';
import {
  Input,
  RequiredInput,
  ReqSelect,
} from './inputs';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactForm extends React.Component {
  defaultValues = {
    topic: '',
    salutation: '',
    title: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
    country: '',
    message: '',
    termsAndConditions: false,
    productRequest: {},
    jobInterest: {},
  }

  state = {
    labelWidth: 0,
    errors: false,
    ...this.defaultValues,
  }

  componentDidMount() {
    Form.addValidationRule('isTruthy', value => value);
    const { contactData } = this.props;
    if (contactData) {
      this.setContactData(contactData)
    }

    // this.setState({
    //   labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    // });
  }

  setContactData = (contactData) => {
    if (contactData.jobId) {
      this.setState({
        topic: "jobInterest",
        message: `Job Title:\n${contactData.jobTitle}`,
        jobInterest: {
          jobTitle: contactData.jobTitle,
          jobId: contactData.jobId,
        }
      })
    }

    if (contactData.productId) {
      this.setState({
        topic: "product",
        message: `Product Request:\n${contactData.productTitle}`,
        productRequest: {
          productSlug: contactData.productId,
          productName: contactData.productTitle,
        }
      })
    }
  }

  handleSubmit = e => {
    const {
      labelWidth,
      errors,
      termsAndConditions,
      errorMessage,
      submitMsg,
      checkedError,
      ...formBody
    } = this.state;
    const encodedForm = encode({
      "form-name": "contact-form",
      ...formBody,
    })
    this.submitForm(encodedForm)
  };

  submitForm = (encodedForm, form) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedForm,
    })
    .then(() => {
      const submitMsg = 'Thanks! We\'ll keep you updated.';
      const submitType = 'success';
      this.setState({ submitMsg, submitType, ...this.defaultValues });
    })
    .catch(() => {
      const submitMsg = 'There was a problem. Try again.';
      this.setState({ submitMsg });
    });
  }

  throwErrors = (errors) => {
    if (errors.length) {
      const errorMessage = "You must accept the terms and conditions before you can submit the form"
      this.setState({error: true, errorMessage, checkedError: true})
    }
  }

  handleSelect = e => this.setState({ [e.target.name]: e.target.value });

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleCheck = name => event => {
    this.setState((state) => (
      { termsAndConditions: !state.termsAndConditions,
        checkedError: !state.checkedError }
    ));
  };

  render() {
    const {
      topic,
      salutation,
      title,
      firstName,
      lastName,
      company,
      phone,
      email,
      country,
      message,
      termsAndConditions,
      submitMsg,
      errorMessage,
      checkedError,
    } = this.state;

    const { classes } = this.props;
    return (
      <Form
        name="contact-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        onError={errors => this.throwErrors(errors)}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact-form" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>
        <ReqSelect
          value={topic}
          name="topic"
          label="Topic *"
          onChange={this.handleSelect}
          validators={['required']}
          errorMessages={['This field is required']}
          classes={classes}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {
            formUtil.topics.map(({name, value}, i) => (
              <MenuItem key={i} value={value}>{name}</MenuItem>
            ))
          }
        </ReqSelect>
        <div className="contact-hint">
          <FaExclamationCircle />
          <div className="hint-text">No medical advice for patients. Please contact a specialist.</div>
        </div>
        <ReqSelect
          value={salutation}
          classes={classes}
          name="salutation"
          label="Salutation *"
          onChange={this.handleSelect}
          validators={['required']}
          errorMessages={['This field is required']}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="mr">Mr</MenuItem>
          <MenuItem value="ms">Ms</MenuItem>
        </ReqSelect>
        <Input
          classes={classes}
          label="Title"
          value={title}
          name="title"
          onChange={this.handleChange}
        />
        <Input
          classes={classes}
          label="First Name"
          value={firstName}
          name="firstName"
          onChange={this.handleChange}
        />
        <RequiredInput
          label="Last Name *"
          classes={classes}
          value={lastName}
          onChange={this.handleChange}
          name="lastName"
          validators={['required']}
          errorMessages={['This field is required']}
        />
        <Input
          classes={classes}
          label="Practice / Company"
          value={company}
          name="company"
          onChange={this.handleChange}
        />
        <Input
          classes={classes}
          label="Phone"
          value={phone}
          name="phone"
          onChange={this.handleChange}
        />
        <RequiredInput
          label="Email *"
          onChange={this.handleChange}
          name="email"
          classes={classes}
          value={email}
          validators={['required', 'isEmail']}
          errorMessages={['This field is required', 'Email is not valid']}
        />
        <Input
          classes={classes}
          label="Country"
          value={country}
          name="country"
          select
          onChange={this.handleSelect}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="AF">Afghanistan</MenuItem>
          <MenuItem value="AX">Åland Islands</MenuItem>
          <MenuItem value="AL">Albania</MenuItem>
          <MenuItem value="DZ">Algeria</MenuItem>
          <MenuItem value="AS">American Samoa</MenuItem>
          <MenuItem value="AD">Andorra</MenuItem>
          <MenuItem value="AO">Angola</MenuItem>
          <MenuItem value="AI">Anguilla</MenuItem>
          <MenuItem value="AQ">Antarctica</MenuItem>
          <MenuItem value="AG">Antigua &amp; Barbuda</MenuItem>
          <MenuItem value="AR">Argentina</MenuItem>
          <MenuItem value="AM">Armenia</MenuItem>
          <MenuItem value="AW">Aruba</MenuItem>
          <MenuItem value="AC">Ascension Island</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
          <MenuItem value="AT">Austria</MenuItem>
          <MenuItem value="AZ">Azerbaijan</MenuItem>
          <MenuItem value="BS">Bahamas</MenuItem>
          <MenuItem value="BH">Bahrain</MenuItem>
          <MenuItem value="BD">Bangladesh</MenuItem>
          <MenuItem value="BB">Barbados</MenuItem>
          <MenuItem value="BY">Belarus</MenuItem>
          <MenuItem value="BE">Belgium</MenuItem>
          <MenuItem value="BZ">Belize</MenuItem>
          <MenuItem value="BJ">Benin</MenuItem>
          <MenuItem value="BM">Bermuda</MenuItem>
          <MenuItem value="BT">Bhutan</MenuItem>
          <MenuItem value="BO">Bolivia</MenuItem>
          <MenuItem value="BA">Bosnia &amp; Herzegovina</MenuItem>
          <MenuItem value="BW">Botswana</MenuItem>
          <MenuItem value="BR">Brazil</MenuItem>
          <MenuItem value="IO">British Indian Ocean Territory</MenuItem>
          <MenuItem value="VG">British Virgin Islands</MenuItem>
          <MenuItem value="BN">Brunei</MenuItem>
          <MenuItem value="BG">Bulgaria</MenuItem>
          <MenuItem value="BF">Burkina Faso</MenuItem>
          <MenuItem value="BI">Burundi</MenuItem>
          <MenuItem value="KH">Cambodia</MenuItem>
          <MenuItem value="CM">Cameroon</MenuItem>
          <MenuItem value="CA">Canada</MenuItem>
          <MenuItem value="IC">Canary Islands</MenuItem>
          <MenuItem value="CV">Cape Verde</MenuItem>
          <MenuItem value="BQ">Caribbean Netherlands</MenuItem>
          <MenuItem value="KY">Cayman Islands</MenuItem>
          <MenuItem value="CF">Central African Republic</MenuItem>
          <MenuItem value="EA">Ceuta &amp; Melilla</MenuItem>
          <MenuItem value="TD">Chad</MenuItem>
          <MenuItem value="CL">Chile</MenuItem>
          <MenuItem value="CN">China</MenuItem>
          <MenuItem value="CX">Christmas Island</MenuItem>
          <MenuItem value="CC">Cocos (Keeling) Islands</MenuItem>
          <MenuItem value="CO">Colombia</MenuItem>
          <MenuItem value="KM">Comoros</MenuItem>
          <MenuItem value="CG">Congo - Brazzaville</MenuItem>
          <MenuItem value="CD">Congo - Kinshasa</MenuItem>
          <MenuItem value="CK">Cook Islands</MenuItem>
          <MenuItem value="CR">Costa Rica</MenuItem>
          <MenuItem value="CI">Côte d’Ivoire</MenuItem>
          <MenuItem value="HR">Croatia</MenuItem>
          <MenuItem value="CU">Cuba</MenuItem>
          <MenuItem value="CW">Curaçao</MenuItem>
          <MenuItem value="CY">Cyprus</MenuItem>
          <MenuItem value="CZ">Czechia</MenuItem>
          <MenuItem value="DK">Denmark</MenuItem>
          <MenuItem value="DG">Diego Garcia</MenuItem>
          <MenuItem value="DJ">Djibouti</MenuItem>
          <MenuItem value="DM">Dominica</MenuItem>
          <MenuItem value="DO">Dominican Republic</MenuItem>
          <MenuItem value="EC">Ecuador</MenuItem>
          <MenuItem value="EG">Egypt</MenuItem>
          <MenuItem value="SV">El Salvador</MenuItem>
          <MenuItem value="GQ">Equatorial Guinea</MenuItem>
          <MenuItem value="ER">Eritrea</MenuItem>
          <MenuItem value="EE">Estonia</MenuItem>
          <MenuItem value="ET">Ethiopia</MenuItem>
          <MenuItem value="EZ">Eurozone</MenuItem>
          <MenuItem value="FK">Falkland Islands</MenuItem>
          <MenuItem value="FO">Faroe Islands</MenuItem>
          <MenuItem value="FJ">Fiji</MenuItem>
          <MenuItem value="FI">Finland</MenuItem>
          <MenuItem value="FR">France</MenuItem>
          <MenuItem value="GF">French Guiana</MenuItem>
          <MenuItem value="PF">French Polynesia</MenuItem>
          <MenuItem value="TF">French Southern Territories</MenuItem>
          <MenuItem value="GA">Gabon</MenuItem>
          <MenuItem value="GM">Gambia</MenuItem>
          <MenuItem value="GE">Georgia</MenuItem>
          <MenuItem value="DE">Germany</MenuItem>
          <MenuItem value="GH">Ghana</MenuItem>
          <MenuItem value="GI">Gibraltar</MenuItem>
          <MenuItem value="GR">Greece</MenuItem>
          <MenuItem value="GL">Greenland</MenuItem>
          <MenuItem value="GD">Grenada</MenuItem>
          <MenuItem value="GP">Guadeloupe</MenuItem>
          <MenuItem value="GU">Guam</MenuItem>
          <MenuItem value="GT">Guatemala</MenuItem>
          <MenuItem value="GG">Guernsey</MenuItem>
          <MenuItem value="GN">Guinea</MenuItem>
          <MenuItem value="GW">Guinea-Bissau</MenuItem>
          <MenuItem value="GY">Guyana</MenuItem>
          <MenuItem value="HT">Haiti</MenuItem>
          <MenuItem value="HN">Honduras</MenuItem>
          <MenuItem value="HK">Hong Kong SAR China</MenuItem>
          <MenuItem value="HU">Hungary</MenuItem>
          <MenuItem value="IS">Iceland</MenuItem>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="ID">Indonesia</MenuItem>
          <MenuItem value="IR">Iran</MenuItem>
          <MenuItem value="IQ">Iraq</MenuItem>
          <MenuItem value="IE">Ireland</MenuItem>
          <MenuItem value="IM">Isle of Man</MenuItem>
          <MenuItem value="IL">Israel</MenuItem>
          <MenuItem value="IT">Italy</MenuItem>
          <MenuItem value="JM">Jamaica</MenuItem>
          <MenuItem value="JP">Japan</MenuItem>
          <MenuItem value="JE">Jersey</MenuItem>
          <MenuItem value="JO">Jordan</MenuItem>
          <MenuItem value="KZ">Kazakhstan</MenuItem>
          <MenuItem value="KE">Kenya</MenuItem>
          <MenuItem value="KI">Kiribati</MenuItem>
          <MenuItem value="XK">Kosovo</MenuItem>
          <MenuItem value="KW">Kuwait</MenuItem>
          <MenuItem value="KG">Kyrgyzstan</MenuItem>
          <MenuItem value="LA">Laos</MenuItem>
          <MenuItem value="LV">Latvia</MenuItem>
          <MenuItem value="LB">Lebanon</MenuItem>
          <MenuItem value="LS">Lesotho</MenuItem>
          <MenuItem value="LR">Liberia</MenuItem>
          <MenuItem value="LY">Libya</MenuItem>
          <MenuItem value="LI">Liechtenstein</MenuItem>
          <MenuItem value="LT">Lithuania</MenuItem>
          <MenuItem value="LU">Luxembourg</MenuItem>
          <MenuItem value="MO">Macau SAR China</MenuItem>
          <MenuItem value="MK">Macedonia</MenuItem>
          <MenuItem value="MG">Madagascar</MenuItem>
          <MenuItem value="MW">Malawi</MenuItem>
          <MenuItem value="MY">Malaysia</MenuItem>
          <MenuItem value="MV">Maldives</MenuItem>
          <MenuItem value="ML">Mali</MenuItem>
          <MenuItem value="MT">Malta</MenuItem>
          <MenuItem value="MH">Marshall Islands</MenuItem>
          <MenuItem value="MQ">Martinique</MenuItem>
          <MenuItem value="MR">Mauritania</MenuItem>
          <MenuItem value="MU">Mauritius</MenuItem>
          <MenuItem value="YT">Mayotte</MenuItem>
          <MenuItem value="MX">Mexico</MenuItem>
          <MenuItem value="FM">Micronesia</MenuItem>
          <MenuItem value="MD">Moldova</MenuItem>
          <MenuItem value="MC">Monaco</MenuItem>
          <MenuItem value="MN">Mongolia</MenuItem>
          <MenuItem value="ME">Montenegro</MenuItem>
          <MenuItem value="MS">Montserrat</MenuItem>
          <MenuItem value="MA">Morocco</MenuItem>
          <MenuItem value="MZ">Mozambique</MenuItem>
          <MenuItem value="MM">Myanmar (Burma)</MenuItem>
          <MenuItem value="NA">Namibia</MenuItem>
          <MenuItem value="NR">Nauru</MenuItem>
          <MenuItem value="NP">Nepal</MenuItem>
          <MenuItem value="NL">Netherlands</MenuItem>
          <MenuItem value="NC">New Caledonia</MenuItem>
          <MenuItem value="NZ">New Zealand</MenuItem>
          <MenuItem value="NI">Nicaragua</MenuItem>
          <MenuItem value="NE">Niger</MenuItem>
          <MenuItem value="NG">Nigeria</MenuItem>
          <MenuItem value="NU">Niue</MenuItem>
          <MenuItem value="NF">Norfolk Island</MenuItem>
          <MenuItem value="KP">North Korea</MenuItem>
          <MenuItem value="MP">Northern Mariana Islands</MenuItem>
          <MenuItem value="NO">Norway</MenuItem>
          <MenuItem value="OM">Oman</MenuItem>
          <MenuItem value="PK">Pakistan</MenuItem>
          <MenuItem value="PW">Palau</MenuItem>
          <MenuItem value="PS">Palestinian Territories</MenuItem>
          <MenuItem value="PA">Panama</MenuItem>
          <MenuItem value="PG">Papua New Guinea</MenuItem>
          <MenuItem value="PY">Paraguay</MenuItem>
          <MenuItem value="PE">Peru</MenuItem>
          <MenuItem value="PH">Philippines</MenuItem>
          <MenuItem value="PN">Pitcairn Islands</MenuItem>
          <MenuItem value="PL">Poland</MenuItem>
          <MenuItem value="PT">Portugal</MenuItem>
          <MenuItem value="PR">Puerto Rico</MenuItem>
          <MenuItem value="QA">Qatar</MenuItem>
          <MenuItem value="RE">Réunion</MenuItem>
          <MenuItem value="RO">Romania</MenuItem>
          <MenuItem value="RU">Russia</MenuItem>
          <MenuItem value="RW">Rwanda</MenuItem>
          <MenuItem value="WS">Samoa</MenuItem>
          <MenuItem value="SM">San Marino</MenuItem>
          <MenuItem value="ST">São Tomé &amp; Príncipe</MenuItem>
          <MenuItem value="SA">Saudi Arabia</MenuItem>
          <MenuItem value="SN">Senegal</MenuItem>
          <MenuItem value="RS">Serbia</MenuItem>
          <MenuItem value="SC">Seychelles</MenuItem>
          <MenuItem value="SL">Sierra Leone</MenuItem>
          <MenuItem value="SG">Singapore</MenuItem>
          <MenuItem value="SX">Sint Maarten</MenuItem>
          <MenuItem value="SK">Slovakia</MenuItem>
          <MenuItem value="SI">Slovenia</MenuItem>
          <MenuItem value="SB">Solomon Islands</MenuItem>
          <MenuItem value="SO">Somalia</MenuItem>
          <MenuItem value="ZA">South Africa</MenuItem>
          <MenuItem value="GS">South Georgia &amp; South Sandwich Islands</MenuItem>
          <MenuItem value="KR">South Korea</MenuItem>
          <MenuItem value="SS">South Sudan</MenuItem>
          <MenuItem value="ES">Spain</MenuItem>
          <MenuItem value="LK">Sri Lanka</MenuItem>
          <MenuItem value="BL">St. Barthélemy</MenuItem>
          <MenuItem value="SH">St. Helena</MenuItem>
          <MenuItem value="KN">St. Kitts &amp; Nevis</MenuItem>
          <MenuItem value="LC">St. Lucia</MenuItem>
          <MenuItem value="MF">St. Martin</MenuItem>
          <MenuItem value="PM">St. Pierre &amp; Miquelon</MenuItem>
          <MenuItem value="VC">St. Vincent &amp; Grenadines</MenuItem>
          <MenuItem value="SD">Sudan</MenuItem>
          <MenuItem value="SR">Suriname</MenuItem>
          <MenuItem value="SJ">Svalbard &amp; Jan Mayen</MenuItem>
          <MenuItem value="SZ">Swaziland</MenuItem>
          <MenuItem value="SE">Sweden</MenuItem>
          <MenuItem value="CH">Switzerland</MenuItem>
          <MenuItem value="SY">Syria</MenuItem>
          <MenuItem value="TW">Taiwan</MenuItem>
          <MenuItem value="TJ">Tajikistan</MenuItem>
          <MenuItem value="TZ">Tanzania</MenuItem>
          <MenuItem value="TH">Thailand</MenuItem>
          <MenuItem value="TL">Timor-Leste</MenuItem>
          <MenuItem value="TG">Togo</MenuItem>
          <MenuItem value="TK">Tokelau</MenuItem>
          <MenuItem value="TO">Tonga</MenuItem>
          <MenuItem value="TT">Trinidad &amp; Tobago</MenuItem>
          <MenuItem value="TA">Tristan da Cunha</MenuItem>
          <MenuItem value="TN">Tunisia</MenuItem>
          <MenuItem value="TR">Turkey</MenuItem>
          <MenuItem value="TM">Turkmenistan</MenuItem>
          <MenuItem value="TC">Turks &amp; Caicos Islands</MenuItem>
          <MenuItem value="TV">Tuvalu</MenuItem>
          <MenuItem value="UM">U.S. Outlying Islands</MenuItem>
          <MenuItem value="VI">U.S. Virgin Islands</MenuItem>
          <MenuItem value="UG">Uganda</MenuItem>
          <MenuItem value="UA">Ukraine</MenuItem>
          <MenuItem value="AE">United Arab Emirates</MenuItem>
          <MenuItem value="GB">United Kingdom</MenuItem>
          <MenuItem value="UN">United Nations</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="UY">Uruguay</MenuItem>
          <MenuItem value="UZ">Uzbekistan</MenuItem>
          <MenuItem value="VU">Vanuatu</MenuItem>
          <MenuItem value="VA">Vatican City</MenuItem>
          <MenuItem value="VE">Venezuela</MenuItem>
          <MenuItem value="VN">Vietnam</MenuItem>
          <MenuItem value="WF">Wallis &amp; Futuna</MenuItem>
          <MenuItem value="EH">Western Sahara</MenuItem>
          <MenuItem value="YE">Yemen</MenuItem>
          <MenuItem value="ZM">Zambia</MenuItem>
          <MenuItem value="ZW">Zimbabwe</MenuItem>
          </Input>
        <TextValidator
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
          variant="outlined"
          id="standard-multiline-flexible"
          label="Message *"
          className={classes.textField}
          multiline
          fullWidth
          value={message}
          onChange={this.handleChange('message')}
          margin="normal"
          rows="4"
          name="message"
          validators={['required']}
            errorMessages={['This field is required']}
        />
        <div className="terms-and-conditions">
          <Switch
            checked={termsAndConditions}
            onChange={this.handleCheck('termsAndConditions')}
            value={termsAndConditions}
            color="primary"
            name="termsAndConditions"
            classes={{
              switchBase: classes.colorSwitchBase,
              checked: classes.colorChecked,
              bar: classes.colorBar,
            }}
          />
          <p className="text">I agree that the data provided by me in the contact form may be used and stored by HWA-IN to answer my questions and for further communication, in particular also for sending information material and for advertising purposes for medical laser products by e-mail or telephone. I know that my consent can be withdrawn at any time in the future.</p>
        </div>
        { checkedError && <ErrorMessage className="message">{errorMessage}</ErrorMessage> }
        <SubmitMessage className="message">{submitMsg}</SubmitMessage>
        <div className="submit">
          <Button variant="contained" type="submit" color="primary" className="submit-btn">
            Submit
          </Button>
          <div className="required">
            <span className="required__star">*</span>Required
          </div>
        </div>
      </Form>
    );
  }
};

export default withStyles(styles)(ContactForm);