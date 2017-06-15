import { AngularMultiModulesPage } from './app.po';

describe('angular-multi-modules App', () => {
  let page: AngularMultiModulesPage;

  beforeEach(() => {
    page = new AngularMultiModulesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
