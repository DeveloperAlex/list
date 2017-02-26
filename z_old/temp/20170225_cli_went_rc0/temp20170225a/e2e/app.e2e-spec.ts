import { Temp20170225aPage } from './app.po';

describe('temp20170225a App', () => {
  let page: Temp20170225aPage;

  beforeEach(() => {
    page = new Temp20170225aPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
