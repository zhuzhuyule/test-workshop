import { MathService } from "./math.service";

describe("MathService", () => {
  let mathService: MathService;
  beforeEach(() => {
    mathService = new MathService();
  });

  it("#add should return 6 when the args are 1,2,3", () => {
    expect(mathService.add()).toBe(6);
  });

  it("#square should return 4 from a promise when the arg is 2", async () => {
    const value = await mathService.square(2);
    expect(value).toBe(4);
  });

  // 另外一种做法
  it("#square should return 4 from a promise when the arg is 2", (done: DoneFn) => {
    mathService.square(2).then((value) => {
      expect(value).toBe(4);
      done();
    });
  });
});
