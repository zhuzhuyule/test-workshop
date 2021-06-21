### 1. 不引入 NoopAnimationsModule 报错
```javascript
TestBed.configureTestingModule({
    imports: [NoopAnimationsModule, ComponentModule]
}).compileComponents();
```
> As the name noop ("no operation") says, that module doesn't do anything. It is a utility module that mocks the real animation module but doesn't actually animate.
Link: https://stackoverflow.com/questions/43362898/whats-the-difference-between-browseranimationsmodule-and-noopanimationsmodule

### 2. 私有变量测试
不推荐
```javascript
class Tool {
  private add(a, b) {
    return a + b
  }
}
```
```javascript
describe("test private case", function () {
    it("#add should return 5 when the param is 2 and 3", function () {
      const tool = new Tool();
      expect(tool['add'](2, 3)).toBe(5);
    });
});
```



### 3. 异步测试
```javascript
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
```

### 4. 事件
```javascript
selector = document.querySelector('.class-name');
selector.dispatchEvent(new Event('click'));
```

