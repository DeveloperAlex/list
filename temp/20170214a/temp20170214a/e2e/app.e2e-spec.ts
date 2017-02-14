import { Temp20170214aPage } from './app.po';

describe('temp20170214a App', function() {
  let page: Temp20170214aPage;

  beforeEach(() => {
    page = new Temp20170214aPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
