import { FooService } from '../src';

describe('FooService', () => {
  it('works', async () => {
    // Test will fail unless values are provided for defaultProvider keys and getLoanFoo(poolAddress)
    const earn = new FooService({
      network: 'kovan',
      defaultProviderKeys: '111',
    });
    console.log('earn', earn);

    const value = await earn.getLoanFoo('0x');
    console.log('value', value);

    expect(earn).toBeDefined();
  });
});
