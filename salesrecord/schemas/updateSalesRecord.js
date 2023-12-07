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
  required: ["concept", "amount"],
  additionalProperties: false,
};
