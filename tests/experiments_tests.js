const {I} = inject();

Feature('Эксперименты @test');

Scenario('Запуск тестируемого кода',async ({I}) => {
    let a = await I.getRandomDomain();
    I.amOnPage(a);
})
