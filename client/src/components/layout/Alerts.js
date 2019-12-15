import React from 'react';
import { connect } from 'react-redux';

import './Alerts.css';

const Alerts = ({ alert }) => {
  const { alerts } = alert;
  return (
    alerts.length > 0 && (
      <>
        {alerts.map((alert, index) => (
          <div className={`alert alert-${alert.type}`} key={index}>
            {alert.msg}
          </div>
        ))}
      </>
    )
  );
};

const mapStateToProps = state => ({
  alert: state.alert
});

export default connect(mapStateToProps, null)(Alerts);
