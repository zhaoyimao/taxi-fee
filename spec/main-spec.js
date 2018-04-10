const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it("公里数等于两千米，没有等待时间",function(){
        spyOn(console,'log');
        let input={km:2,wait:0};//公里数为2,等待时间为0
        main(input);
        let text='尊敬的用户，此次您共消费6元';
        expect(console.log).toHaveBeenCalledWith(text);
    });
    it("公里数为6公里，等待时间为5分钟",function(){
        spyOn(console,'log');
        let input={km:6,wait:5};
        main(input);
        let text='尊敬的用户，此次您共消费10元';
        expect(console.log).toHaveBeenCalledWith(text);
    });
    it("公里数为10公里，等待时间为10分钟",function(){
        spyOn(console,'log');
        let input={km:10,wait:10};
        main(input);
        let text='尊敬的用户，此次您共消费16元';
        expect(console.log).toHaveBeenCalledWith(text);
    });
});
