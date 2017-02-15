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
       email: "", password: "", month: "1", day: "1", year: "2017" };
    this.handleSexChange = this.handleSexChange.bind(this);
    this.attemptSignup = this.attemptSignup.bind(this);
    this.populateUser = this.populateUser.bind(this);
  }

  populateUser() {
    const date = `${this.state.month}-${this.state.day}-${this.state.year}`;
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
            <input type="text"
              className="signup-input"
              value={this.state.f_name || ""}
              placeholder="First Name"
              onChange={this.update("f_name")}/>
            <div>{fNameErrors}</div>

            <input type="text"
              className="signup-input"
              value={this.state.l_name || ""}
              placeholder="Last Name"
              onChange={this.update("l_name")}/>
            <div>{lNameErrors}</div>
          </div>

          <input type="text"
            className="signup-input"
            value={this.state.email || ""}
            placeholder="Email Address"
            onChange={this.update("email")}/>
          <div>{emailErrors}</div>

          <input type="password"
            className="signup-input"
            value={this.state.password || ""}
            placeholder="Password"
            onChange={this.update("password")}/>
          <div>{passwordErrors}</div>

          <label><input type="radio" value="M" checked={this.state.sex === "M"}
            onChange={this.handleSexChange} />Male</label>
          <label><input type="radio" value="F" checked={this.state.sex === "F"}
            onChange={this.handleSexChange} />Female</label>

          <select name="month-selector" onChange={this.update("month")}>
            {monthOptions}
          </select>
          <select name="day-selector" onChange={this.update("day")}>
            {dayOptions}
          </select>
          <select name="year-selector" onChange={this.update("year")}>
            {yearOptions}
          </select>

          <button onClick={this.attemptSignup}>Sign Up</button>
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
