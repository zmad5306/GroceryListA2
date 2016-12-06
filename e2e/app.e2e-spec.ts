import { GroceryListPage } from './app.po';

describe('grocery-list App', function() {
  let page: GroceryListPage;

  beforeEach(() => {
    page = new GroceryListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
