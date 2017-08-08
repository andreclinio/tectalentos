import { TecTalentosPage } from './app.po';

describe('tec-talentos App', () => {
  let page: TecTalentosPage;

  beforeEach(() => {
    page = new TecTalentosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
