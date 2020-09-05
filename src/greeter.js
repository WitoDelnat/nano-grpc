module.exports = {
  sayHello: (ctx) => {
    ctx.res = { message: "Hello " + ctx.req.name };
  },
  sayHi: (ctx) => {
    ctx.res = { message: "Hi " + ctx.req.name };
  },
};
