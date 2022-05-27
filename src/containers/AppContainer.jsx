import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { App } from 'components/App/App';
import { Linear } from 'components/Linear/Linear';
import { Header } from "components/Header";
import { Title } from "components/Title";
import { requestServer } from 'actions/object';

class AppContainer extends PureComponent {
  componentDidMount() {
    const { download } = this.props;
    download();
  }
  render() {
    const { linear, object } = this.props;
    return (
      <>
        <Header />
        <Title />
        {
          linear ?
            <Linear /> :
            <App step={object.step} />
        }
      </>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    object: state.object.get('entries').toJS(),
    linear: state.object.get('isLinear'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    download: () => dispatch(requestServer()),
  }
}

export const AppRedux = connect(mapStateToProps, mapDispatchToProps)(AppContainer);
