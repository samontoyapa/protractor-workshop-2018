import { browser } from 'protractor';

describe('Given a SDET learning protractor', () => {
  describe('when open Google Page', () => {
    beforeEach(() => {
      browser.get('http://www.google.com');
    });

    it('then should have a title', () => {
      expect(browser.getTitle()).toEqual('Google');
    });
describe('This is the first example of protractor', () => {
  it('should have a title', () => {
    browser.ignoreSynchronization = true;
    browser.get('http://www.google.com');
    expect(browser.getTitle()).toEqual('Google');
  });
});
