export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  create: () => this,
  defaults: {
    adapter: {},
  },
};
