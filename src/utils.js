exports = {
  middleware: async (ctx, next) => {
    try {
      await next();
      console.log(ctx.fullName);
      return;
    } catch (error) {
      console.error(ctx.fullName, JSON.stringify(ctx.req.toObject()));
      throw error;
    }
  },
};
