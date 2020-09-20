let html = document.querySelector('#html');
let style = document.querySelector('#style');
// 注意：注释里最后的*和/有空格的话表示没结束，注意看空格问题
let string = `
/* 你好，我是一名前端新人
 * 接下来我演示一下我的前端功底
 * 我要加的样式是
 * 首先我要准备一个div
**/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好咯
 * 首先，把一个 div 变成一个圆
**/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/* 八卦是阴阳形成
 * 一白一黑
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球**/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    left: 50%;
    bottom: 0;
    transform: translate(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

`;
// string = string.replace(/\n/g, "<br>")
let string2 = "";
let n = 0;


let step = () => {
    setTimeout(() => {
        // string2 += string[n] === "\n" ? "<br>" : string[n]
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if(string[n] === " ") {
            string2 += "&nbsp"
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0,9999)
        html.scrollTo(0, 9999)
        if(n < string.length - 1){
            n += 1;
            step();
        } else {}
    },10);
};

step()

// setTimeout(() => {
//     style.innerHTML = `
// body{
//     color: red;
// }
// `;
// }, 3000);


