module.exports = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    comments: {
      type: "string",
    },
    date: {
      type: "string",
    },
    user: {
      type: "string",
    },
    dailyExpenses: {
      type: "integer",
    },
    sales: {
      type: "integer",
    },
    cashBox: {
      type: "integer",
    },
  },
  additionalProperties: false,
};
