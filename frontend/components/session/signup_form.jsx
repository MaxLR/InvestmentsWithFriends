import React from 'react';
import { connect } from 'react-redux';
import { range } from 'lodash';
import { signup, resetErrors } from '../../actions/session_actions';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = range(1,32);
const YEARS = range(1920, 2018);

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { f_name: "", l_name: "", sex: "", birthday: "",
       email: "", password: "", month: "", day: "", year: "" };
    this.handleSexChange = this.handleSexChange.bind(this);
    this.attemptSignup = this.attemptSignup.bind(this);
    this.populateUser = this.populateUser.bind(this);
  }

  populateUser() {
    let date;
    if ((this.state.month !== "") && (this.state.day !== "") && (this.state.year !== "")) {
      date = `${this.state.month}-${this.state.day}-${this.state.year}`;
    }
    return ({
      f_name: this.state.f_name,
      l_name: this.state.l_name,
      email: this.state.email,
      password: this.state.password,
      birthday: date,
      sex: this.state.sex
    });
  }

  attemptSignup() {
    this.props.signup(this.populateUser());
  }

  update(field) {
    return e => {
      return this.setState({[field]: e.currentTarget.value});
    };
  }

  generateMonthsFromArray() {
    return (
      MONTHS.map((el, idx) => {
        return <option key={idx} value={idx + 1}>{el}</option>;
      })
    );
  }

  generateOptionsFromArray(array) {
    return (
        array.map((el, idx) => {
          return <option key={idx} value={el}>{el}</option>;
        })
    );
  }

  fetchErrors(field) {
    let error = "";
    this.props.errors.forEach(currErr => {
      if(currErr.includes(field)) {
        error = currErr;
      }
    });

    return error;
  }

  handleSexChange(e) {
    this.setState({ sex: e.currentTarget.value });
  }

  render() {
    const fNameErrors = this.fetchErrors('F name');
    const lNameErrors = this.fetchErrors('L name');
    const emailErrors = this.fetchErrors('Email');
    const passwordErrors = this.fetchErrors('Password');
    const sexErrors = this.fetchErrors('Sex');
    const birthdayErrors = this.fetchErrors('Birthday');
    const monthOptions = this.generateMonthsFromArray(MONTHS);
    const dayOptions = this.generateOptionsFromArray(DAYS);
    const yearOptions = this.generateOptionsFromArray(YEARS).reverse();

    return(
      <div className="signup">
        <section className="home-details">
          <h3 className="site-description">Connect with friends and other
            investors around you on Investments With Friends</h3>
          <div className="product-desc">
            <p className="desc-header">See trades and updates</p>
            <p className="desc-body">from friends in News Feed</p>
          </div>
          <div className="product-desc">
            <p className="desc-header">Share what's new</p>
            <p className="desc-body">in your portfolio on your Timeline</p>
          </div>
          <div className="product-desc">
            <p className="desc-header">Find more</p>
            <p className="desc-body">relevant info using Investments With Friends</p>
          </div>
        </section>
        <section className="signup-form">
          <h2 className="signup-header">Sign Up</h2>
          <h3 className="signup-description">It's free and it always will be</h3>

          <div className="user-name">
            <div className="signup-name">
              <input type="text"
                className="signup-fname"
                value={this.state.f_name || ""}
                placeholder="First Name"
                onChange={this.update("f_name")}/>
              <div className="signup-error">{fNameErrors}</div>
            </div>

            <div className="signup-name">
              <input type="text"
                className="signup-lname"
                value={this.state.l_name || ""}
                placeholder="Last Name"
                onChange={this.update("l_name")}/>
              <div className="signup-error">{lNameErrors}</div>
            </div>
          </div>

          <input type="text"
            className="signup-input"
            value={this.state.email || ""}
            placeholder="Email Address"
            onChange={this.update("email")}/>
          <div className="signup-error">{emailErrors}</div>

          <input type="password"
            className="signup-input"
            value={this.state.password || ""}
            placeholder="Password"
            onChange={this.update("password")}/>
          <div className="signup-error">{passwordErrors}</div>

          <section className="birthday-form">
            <h4 className="birthday-title">Birthday</h4>
            <select className="birthday-selector" onChange={this.update("month")}>
              <option key='month' value=''>Month</option>
              {monthOptions}
            </select>
            <select className="birthday-selector" onChange={this.update("day")}>
              <option key='day' value=''>Day</option>
              {dayOptions}
            </select>
            <select className="birthday-selector" onChange={this.update("year")}>
              <option key='year' value=''>Year</option>
              {yearOptions}
            </select>
            <div className="signup-error abs-error">{birthdayErrors}</div>
          </section>

          <section className="sex-selector">
          <label className="sex-option">
            <input type="radio" value="F"
              className="sex-button"
              checked={this.state.sex === "F"}
              onChange={this.handleSexChange} />Female</label>
          <label className="sex-option">
            <input type="radio" value="M"
              className="sex-button"
              checked={this.state.sex === "M"}
              onChange={this.handleSexChange} />Male</label>
            <div className="signup-error abs-error">{sexErrors}</div>
          </section>

          <button className="signup-button"
            onClick={this.attemptSignup}>Sign Up</button>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.session.errors,
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
