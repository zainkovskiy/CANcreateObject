import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { form, step } from 'actions/object';

import { About } from 'components/About';

class AboutContainer extends PureComponent {
  render() {
    const { object, form, step } = this.props;
    return (
      <About
        object={object}
        form={form}
        step={step}
      />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    object: state.object.get('entries').toJS(),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    form: (data) => dispatch(form(data)), 
    step: (value) => dispatch(step(value)), 
  }
}

export const AboutRedux = connect(mapStateToProps, mapDispatchToProps)(AboutContainer);