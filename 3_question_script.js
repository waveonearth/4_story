function passWord() {
    var testV = 1;
    var pass1 = prompt('すべてカタカナで回答してください','謎の答えを入力してください'); //input
    while (testV < 100) {
        if (pass1.toLowerCase() == "ポリスクラス") { //password
        location.href ='3_answer.html'; //window
        break;
        } 
        testV+=1;
        var pass1 = 
        prompt('答えをもう一度確認してください！','謎の答えを入力してください'); //wrong
    }
    return " ";
}