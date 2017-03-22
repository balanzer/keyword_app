import { KeywordAppPage } from './app.po';

describe('keyword-app App', function() {
  let page: KeywordAppPage;

  beforeEach(() => {
    page = new KeywordAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
