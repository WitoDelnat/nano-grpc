const path = require("path");
const Mali = require("mali");
const health = require("./health");
const greeter = require("./greeter");

const PROTO_GREETER = path.resolve(__dirname, "../proto/greeter.proto");
const PROTO_HEALTH = path.resolve(__dirname, "../proto/health.proto");

const app = new Mali();

app.addService(PROTO_HEALTH, "Health");
app.use("Health", "Check", health.check);
app.use("Health", "Watch", health.watch);

app.addService(PROTO_GREETER, "Greeter");
app.use("Greeter", "SayHello", greeter.sayHello);
app.use("Greeter", "SayHi", greeter.sayHi);

module.exports = {
  server: app,
};
