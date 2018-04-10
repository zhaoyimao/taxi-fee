module.exports = function main(input) {
    let result=Calculation(input);
    let str=print(result);
    return str;
};
function Calculation(input){
    let result;
    if(input.km<=2){
        console.log("wait"+input.wait);
        result=6+input.wait*0.25;
        console.log(result);
    }else if(input.km<=8){
        result=6+(input.km-2)*0.8+0.25*input.wait;
    }else{
        result=6+6*0.8+(input.km-8)*1.5+0.25*input.wait;
    }
    return result.toFixed(0);
}
function print(result){
    let str;
    str=`尊敬的用户，此次您共消费${result}元`;
    console.log(str);
    return str;
}

