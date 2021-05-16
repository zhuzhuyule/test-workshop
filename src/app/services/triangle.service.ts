import { MathService } from "./math.service";
import { Injectable } from "@angular/core";
import { forkJoin, from, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TriangleService {
  constructor(private math: MathService) {}

  pythagorean(sideLength: number, otherSideLength: number): Observable<number> {
    return new Observable<number>((observer) => {
      const { add, square } = this.math;
      forkJoin(
        from(square(sideLength)),
        from(square(otherSideLength))
      ).subscribe(([sideLengthSquare, otherSideLengthSquare]) => {
        const hypoternuseSquare = add(sideLengthSquare, otherSideLengthSquare);
        observer.next(Math.sqrt(hypoternuseSquare));
        observer.complete();
      });
    });
  }
}
