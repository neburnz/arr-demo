import { ArrDemoPage } from './app.po';

describe('arr-demo App', () => {
  let page: ArrDemoPage;

  beforeEach(() => {
    page = new ArrDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
