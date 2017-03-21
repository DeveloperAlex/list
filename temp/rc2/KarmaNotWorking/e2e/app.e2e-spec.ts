import { KarmaNotWorkingPage } from './app.po';

describe('karma-not-working App', () => {
  let page: KarmaNotWorkingPage;

  beforeEach(() => {
    page = new KarmaNotWorkingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
