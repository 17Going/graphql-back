'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {

  // it('should assert', function* () {
  //   const pkg = require('../../../package.json');
  //   assert(app.config.keys.startsWith(pkg.name));

  //   // const ctx = app.mockContext({});
  //   // yield ctx.service.xx();
  // });

  // it('should GET /', () => {
  //   return app.httpRequest()
  //     .get('/')
  //     .expect('hi, egg')
  //     .expect(200);
  // });


  it('controller 创建公司 或 部门', () => {
    app.mockCsrf();
    return app.httpRequest()
      .post('/graphql')
      .send(
        {
          // operationName:"createUser2",
          "query": `($name: String!, $name_dd: String) {
              createUser( name: $name, name_dd:  $name_dd) {
                id
                name
              }
            }`,
          "variables": {
            name: 'zdluoa',
            name_dd: 'as'
          }
        }
      )
      // .expect(200)
      .then(res => {
        console.log(res)
        console.log(res.body.data);
      })
  });


});
