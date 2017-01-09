import React from 'react';
import DefaultLayout from './layouts/default.jsx';

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>PAGE ONE</div>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;