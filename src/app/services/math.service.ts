import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }
  add(...args: number[]): number {
    return args.reduce((result,arg) => result + arg, 0);
  }

  square(num: number): Promise<number> {
    return Promise.resolve(num * num);
  }
}
