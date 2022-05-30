import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { FinalPage } from 'components/FinalPage';

class FinalPageContainer extends PureComponent {
  render() {
    const { object } = this.props;
    return (
      <FinalPage
        object={object}
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
  }
}

export const FinalPageRedux = connect(mapStateToProps, mapDispatchToProps)(FinalPageContainer);