import { NPipe } from './n.pipe';

describe('NPipe', () => {
  it('create an instance', () => {
    const pipe = new NPipe();
    expect(pipe).toBeTruthy();
  });
});
