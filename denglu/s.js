let msg = [{
    name: '张三',
    age: 20,
    strengths: 'JavaScript',
    avatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.39mOMBjUfsK-HL9jUbv1MwHaE7?pid=ImgDet&rs=1',
    email: 'yunding@qq.com',
    password: 33333
},
{
    name: '李四',
    age: 19,
    strengths: 'python',
    avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.YlKimVo94OkaZDZCzPIDpAHaFh?pid=ImgDet&rs=1',
    email: '12345678@163.com',
    password: 11111
},
{
    name: '王五',
    age: 18,
    strengths: 'Java',
    avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.P2hK9SRjhFE8WM9N8tgWFAHaEQ?pid=ImgDet&rs=1',
    email: 'yundingshuyuan@qq.cn',
    password: 222222
},
]
function hclick() {
    let email = document.getElementById("email").value, password = document.getElementById("password").value,condition = document.getElementById("result");
    let Regex = /^[0-9a-zA-Z]+@(qq|163)\.(com|cn)$/
    let outcome = Regex.test(email)
    if (!outcome) {
        condition.innerHTML = `<p>邮箱格式不合法（合法邮箱格式结尾为.com或.cn;仅包含一个小数点；小数点前为@qq或@163）</p>`;
        return;
    }

    let found = 0, i = 0;
    for (i = 0; i < msg.length; i++) {
        if (msg[i].email === email && String(msg[i].password) === password) {
            condition.innerHTML = `
        <h3>登录成功<h3>
        <img alt="avatar" src="${msg[i].avatar}" style="width:50px;height:50px;border-radius:50%";>
        <p>姓名：${msg[i].name}<p>
        <p>年龄：${msg[i].age}<p>
        <p>特长：${msg[i].strengths}<p>
        `;
            found = 1;
            break;
        }
    }

    if (!found) {
        condition.innerHTML = `<p>邮箱和密码不匹配，请重新输入<p>`;
    }
}