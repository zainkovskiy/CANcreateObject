import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { newValue, step } from 'actions/object';

import { Type } from 'components/Type';

class TypeContainer extends PureComponent {
  handle = (event) => {
    const { setValue } = this.props;
    setValue(event);
  }
  render() {
    const { object, step } = this.props;
    return (
      <Type
        object={object}
        handle={this.handle}
        step={step}
      />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    object: state.object.get('entries').toJS()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setValue: (value) => dispatch(newValue(value)),
    step: (value) => dispatch(step(value)),
  }
}

export const TypeRedux = connect(mapStateToProps, mapDispatchToProps)(TypeContainer);

