const { I, loginPage, mainPage, header, mySteps } = inject();

let accounts = new DataTable(['login', 'password']);
accounts.add(['long_name', '123Qqq']);
accounts.add(['rrrcen', '123Qqq']);
accounts.add(['_starts','QAl0vesQA']);

Feature('Тесты авторизации @smoke');

Before(({I}) => {
    I.clearCookie();
});

Data(accounts).Scenario('Успешная авторизация на странице /login.bml',({ I,loginPage,current}) => {
    I.amOnPage(loginPage.url);
    loginPage.fillLoginFormAndSubmit(current.login, current.password);
    I.see(current.login.toUpperCase());
});

Data(accounts).Scenario('Успешная авторизация на главной странице',({I,mainPage,header,current}) => {
    I.amOnPage(mainPage.url);
    header.openLoginFormAndSubmit(current.login, current.password);
    I.see(current.login.toUpperCase());
});

Data(accounts).Scenario('Успешная авторизация на домене @domain',async ({I, header, loginPage, current}) => {
    let domainUrl = await I.getRandomDomain();
    I.amOnPage(domainUrl);
    I.click(header.loginMenuItem);
    I.waitUrlEquals(loginPage.url);
    loginPage.fillLoginFormAndSubmit(current.login, current.password);
    I.waitUrlEquals(domainUrl);
    I.see(current.login.toUpperCase());
});