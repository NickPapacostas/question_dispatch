import { React, Component } from "react";
import connect from "react-redux";
import * as actions from "./actions";

class Home extends Component {
  render() {
    return <div className="home-container">Hey there{this.props.name}!</div>;
  }
}
const mapStateToProps = state => {
  return {
    basic: state.basic
  };
};
export default connect(mapStateToProps, actions)(Home);
