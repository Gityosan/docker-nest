import { TestObject } from './test-object';

describe('TestObject', () => {
  it('should be defined', () => {
    expect(new TestObject()).toBeDefined();
  });
});
