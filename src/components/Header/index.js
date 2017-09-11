import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setInitialState } from '../../redux/actions/templateActions';

import './style.scss';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setInitialState();
  }

  render() {
    const { title, subTitle } = this.props.template;
    return (
      <header>
        <h1>{ title }</h1><span>{ subTitle }</span>
      </header>
    );
  }
};

const mapStateToProps = state => ({ template: state.template });
const mapDispatchToProps = dispatch => bindActionCreators({ setInitialState }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
