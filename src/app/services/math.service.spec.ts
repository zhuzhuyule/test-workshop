import { MathService } from "./math.service";

describe("MathService", () => {
  let mathService: MathService;
  beforeEach(() => {
    mathService = new MathService();
  });

  it("#add should return 6 when the args are 1,2,3", () => {
    expect(mathService.add(1, 2, 3)).toBe(6);
  });

  it("#square should return 4 from a promise when the arg is 2 (use await)", async () => {
    const value = await mathService.square(2);
    expect(value).toBe(4);
  });

  it("#square should return 4 from a promise when the arg is 2 (use done function)", (done: DoneFn) => {
    mathService.square(2).then((value) => {
      expect(value).toBe(4);
      done();
    });
  });

  it("#square should return 4 from a promise when the arg is 2 (use return value)", () => {
    return mathService.square(2).then((value) => {
      return expect(value).toBe(4);
    });
  });
});