import { MathService } from "./math.service";

import { TriangleService } from "./triangle.service";

describe("TriangleService", () => {
  let triangleService = new TriangleService(new MathService());

  it("#pythagorean will return 13 when the other right angles sides are 5 and 12", async () => {
    const result = await triangleService.pythagorean(5, 12).toPromise();
    expect(result).toBe(13);
  });

  it("#pythagorean will return 17 when the other right angles sides are 8 and 15", (done: DoneFn) => {
    triangleService
      .pythagorean(8, 15)
      .toPromise()
      .then((result) => {
        expect(result).toBe(17);
        done();
      });
  });
  it("#pythagorean will return 5 when the other right angles sides are 3 and 4", (done: DoneFn) => {
    triangleService.pythagorean(3, 4).subscribe((result) => {
      expect(result).toBe(5);
      done();
    });
  });
});
