import { AimappPage } from './app.po';

describe('aimapp App', function() {
  let page: AimappPage;

  beforeEach(() => {
    page = new AimappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
