import { TransferNamePipe } from './transfer-name.pipe';

describe('TransferNamePipe', () => {

  const pipe = new TransferNamePipe();

  const originStrings = [
    'component name',
    'component Name',
    'component-name',
    'component-Name',
    'Component-Name',
    'Component Name',
    'componentName',
    'ComponentName'
  ];

  for (const name of originStrings) {
    it(`#transfer will transfer the '${name}' to 'component-name'`, () => {
      expect(pipe.transform(name)).toBe('component-name');
    });
  }

  for (const name of originStrings) {
    it(`#transfer will transfer the '${name}' to 'ComponentName' when it with 'class' param`, () => {
      expect(pipe.transform(name, 'class')).toBe('ComponentName');
    });
  }
});
