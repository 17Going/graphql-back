'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/graphql/user.test.js', () => {
  let user;

  before(async () => {
    user = await app.model.User.create({
      name: 'test-name',
      password: 'test-password',
    });
  });

  it('user', async () => {
    const ctx = app.mockContext();
    
    const query = JSON.stringify({
      query: `{ user(id: ${user.id}) { id name } }`,
    });

    const data = await ctx.service.graphql.query(query);
    console.log(data);
    // assert.equal(data.data.user.id, user.id);
    // assert.equal(data.data.user.name, user.name);
  });

  after(async () => {
    await app.model.User.destroy({ where: { id: user.id } });
  });
});
