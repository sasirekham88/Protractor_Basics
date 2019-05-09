
describe('Enter name feature',function()
{
    it('should enter name as God',function()
    {
     browser.get('https://angularjs.org/');  
     element(by.model('yourName')).sendKeys('God');
     var text = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'))
     expect(text.getText()).toEqual('Hello God!');
    });
});

describe('free crm title test' ,function()
{
     it('get title test',function()
     {
         browser.manage().timeouts().pageLoadTimeout(40000)
         browser.manage().timeouts().implicitlyWait(25000)
         browser.get('https://juliemr.github.io/protractor-demo/');
         expect(browser.getTitle()).toEqual('Super Calculator');
         element(by.model('first')).sendKeys('Goddess');

     });

});
describe('multiple Scenarios' ,function()
{
    var firstNum = element(by.model('first'));
    var secondNum = element(by.model('second'));
    var gobutton = element(by.id('gobutton'));
    var result =element(by.className('ng-binding'));
    var history = element.all(by.repeater('result in memory'));

    beforeEach(function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
    });

    function add(a,b)
    {
        firstNum.sendKeys(a);
        secondNum.sendKeys(b);
        gobutton.click();
    }

     it('should have title',function()
     {
         browser.manage().timeouts().pageLoadTimeout(40000)
         browser.manage().timeouts().implicitlyWait(25000)
         browser.get('https://juliemr.github.io/protractor-demo/');
         expect(browser.getTitle()).toEqual('Super Calculator');
         element(by.model('first')).sendKeys('Goddess');

     });
     it('should have add four and six',function()
     {
        firstNum.sendKeys(4);
        secondNum.sendKeys(6);
        gobutton.click();
         expect(result.getText()).toEqual(10);
     });

     it('it should read the value from an input',function()
     {
        firstNum.sendKeys(5);
        expect(firstNum.getAttribute('value')).toEqual('5');
     });

     it('check the history',function()
     {
        add(5,6);
        add(7,8);
        add(9,10);
        add(11,12);
        expect(history.count()).toEqual(4);
      
     });

});
