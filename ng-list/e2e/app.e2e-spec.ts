import { NgListPage } from './app.po';

describe('ng-list App', function() {
  let page: NgListPage;

  beforeEach(() => {
    page = new NgListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
