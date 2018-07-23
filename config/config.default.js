'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532154438794_2847';

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'graphql',
    host: '118.25.127.172',
    port: '3306',
    username: 'root',
    password: '123456',
  };

  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.security = {
    // domainWhiteList: [ 'http://localhost:8080' ],
    csrf: {
      ignore: () => true,
    },
  }

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true
  };

  // add your config here
  config.middleware = ['graphql'];

  return config;
};
