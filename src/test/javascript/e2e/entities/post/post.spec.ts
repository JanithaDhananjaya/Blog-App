import { browser, ExpectedConditions as ec } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { PostComponentsPage } from './post.page-object';

const expect = chai.expect;

describe('Post e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let postComponentsPage: PostComponentsPage;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Posts', async () => {
    await navBarPage.goToEntity('post');
    postComponentsPage = new PostComponentsPage();
    await browser.wait(ec.visibilityOf(postComponentsPage.title), 5000);
    expect(await postComponentsPage.getTitle()).to.eq('Posts');
    await browser.wait(ec.or(ec.visibilityOf(postComponentsPage.entities), ec.visibilityOf(postComponentsPage.noResult)), 1000);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
