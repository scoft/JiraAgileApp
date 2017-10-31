import React, { PureComponent } from 'react';
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux';
import LoadingView from './LoadingView';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/session';

class Launch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentWillMount() {
    AsyncStorage.getItem('session').then(data => {

      if (data) {
        this.props.onLogin(JSON.parse(data), () => {
          this.view && this.setState({ loading: false });
          Actions.home({ type: 'replace' });
        }, (e) => {
          this.view && this.setState({ loading: false });
          Actions.login();
        });
        return;
      }
      this.setState({ loading: false });
      Actions.login();
    });
  }
  render() {
    return (
      <LoadingView
        ref={(ref) => {
          this.view = ref;
        }}
        loading={this.state.loading}
      />
    );
  }
}



function mapDispatch2Props(dispatch) {
  const actions = bindActionCreators(actionCreators, dispatch);
  return {
    onLogin: actions.login
  };
}

export default connect(null, mapDispatch2Props)(Launch);
