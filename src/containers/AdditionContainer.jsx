import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { form, step, newValue } from 'actions/object';

import { Addition } from 'components/Addition';

class AdditionContainer extends PureComponent {
  render() {
    const { object, form, step, newValue } = this.props;
    return (
      <Addition
        object={object}
        form={form}
        step={step}
        newValue={newValue}
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
    newValue: (value) => dispatch(newValue(value)), 
  }
}

export const AdditionRedux = connect(mapStateToProps, mapDispatchToProps)(AdditionContainer);