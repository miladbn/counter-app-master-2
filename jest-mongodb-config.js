module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: "4.4.6", // ورژن MongoDB
      skipMD5: true,
    },
    autoStart: false,
    instance: {
      dbName: "jest",
    },
  },
};
