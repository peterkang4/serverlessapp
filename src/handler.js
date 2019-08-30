'use strict';

module.exports.hello = (event, context, callback) => {
  
  const response = {
    body: JSON.stringify({
      message: 'Automation for the People',
      timestamp: `${new Date().getTime()}`,
    }),
  };

  callback(null, response);
};