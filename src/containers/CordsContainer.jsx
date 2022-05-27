import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Cords } from 'components/Cords';

import { form, step } from 'actions/object';

class CordsContainer extends PureComponent {
  render() {
    const { object, form, step } = this.props;
    return (
      <Cords
        object={ object }
        form={ form }
        step={ step }
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

export const CordsRedux = connect(mapStateToProps, mapDispatchToProps)(CordsContainer);