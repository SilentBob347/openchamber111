import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  test,
  vi,
} from 'vitest';

const mock = Object.assign(
  <T extends (...args: never[]) => unknown>(implementation?: T) => vi.fn(implementation),
  {
    module: vi.mock,
  },
);
const spyOn = vi.spyOn;

// bun's `setSystemTime(date)` pins `Date` and `setSystemTime()` restores it.
// Only `Date` is faked, so timers and promises in the code under test keep
// running on the real clock.
const setSystemTime = (date?: Date | number) => {
  if (date === undefined) {
    vi.useRealTimers();
    return;
  }
  vi.useFakeTimers({ toFake: ['Date'] });
  vi.setSystemTime(date);
};

export {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  mock,
  setSystemTime,
  spyOn,
  test,
  vi,
};
