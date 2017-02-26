import { NgListPage } from './app.po';

describe('ng-list App', () => {
  let page: NgListPage;

  beforeEach(() => {
    page = new NgListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
