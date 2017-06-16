import { TerminalVelocityPage } from './app.po';

describe('terminal-velocity App', () => {
  let page: TerminalVelocityPage;

  beforeEach(() => {
    page = new TerminalVelocityPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
