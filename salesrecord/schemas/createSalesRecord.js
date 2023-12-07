module.exports = {
  type: "object",
  properties: {
    date: {
      type: "string",
    },
    concept: {
      type: "string",
    },
    amount: {
      type: "integer",
    },
    payMethod: {
      type: "string",
    },
  },
  required: ["date", "concept", "amount", "payMethod"],
  additionalProperties: false,
};
