function extractR() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('r');
}
//   从URL中截取等号后面的值
function extractAdClickId() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('fbclid');
}


// 从URL中截取等号后面的值
function extractThirdAdId() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('thirdAdId');
}

// 获取全部
let url = document.location.toString();
let para = url.split("?")[1];

function hasUTMParameters(url) {
const urlParams = new URLSearchParams(url);
return urlParams.has('utm_source') || urlParams.has('utm_medium') || urlParams.has('utm_campaign') || urlParams.has('utm_term') || urlParams.has('utm_content') || urlParams.has('utm_id');
    }

// 判断是否包含UTM参数
const currentURL = window.location.href;
     
function sendData() {
if(extractAdClickId() && extractR()){
       // 创建一个新的XMLHttpRequest对象
var xhr = new XMLHttpRequest();
// 配置请求，包括URL和HTTP方法
xhr.open('POST', 'https://www.loterias365.com/lottery-api/adClickInfo/addAdClickInfo', true);
// 设置请求头部，可以在这里添加自定义的参数
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('platformId', '9022');
// 监听请求状态的变化
xhr.onreadystatechange = function() {
    const  JumpUrl = 'https://www.loterias365.com/?r='+extractR()+'&channelCode=facebook'+ '&adDomain='+window.location.hostname+ '&adClickId='+extractAdClickId()+"&adType=1"
    if(extractThirdAdId()){
        window.location.href=JumpUrl+'&thirdAdId='+extractThirdAdId()
    }else{
        window.location.href=JumpUrl+'&thirdAdId='+extractR()
    }
};

// 创建要发送的数据对象
var data = {
    body:{
        "adClickId": extractAdClickId(),
        "channelCode": "facebook",
        "adDomain": window.location.hostname,
        "thirdAdId": extractThirdAdId()?extractThirdAdId():extractR(),
        "adType":1,
        "adUrl": window.location.href,
        "websiteDomain":"www.loterias365.com"
    },
    header:{
        "apiName": "ak.demo.add",
        "apiVersion":19110101,
        "callTime": Date.now(),
        "clientType": 1,
        "clientVersion": "1.0.30",
        "deviceCode": "",
        "gzipEnabled": 1,
        "languageCode": "zh_CN",
        "platformId": 3614,
        "sign": "sign001",
        "token": "token001"
    }
  
};
// 将数据对象转换为JSON字符串
var jsonData = JSON.stringify(data);
// 发送请求并传递数据
xhr.send(jsonData);
}

else if (hasUTMParameters(currentURL)) {
    var xhr = new XMLHttpRequest();
// 配置请求，包括URL和HTTP方法
xhr.open('POST', 'https://www.loterias365.com/lottery-api/adClickInfo/addAdClickInfo', true);
// 设置请求头部，可以在这里添加自定义的参数
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('platformId', '9022');
// 监听请求状态的变化
xhr.onreadystatechange = function() {
    window.location.href='https://www.loterias365.com/?'+para+'&channelCode=facebook'+ '&adDomain='+window.location.hostname+ '&adClickId='+extractAdClickId()+"&adType=1"
};

// 创建要发送的数据对象
var data = {
    body:{
        "adClickId": extractAdClickId(),
        "channelCode": "facebook",
        "adDomain": window.location.hostname,
        "thirdAdId": extractThirdAdId()?extractThirdAdId():extractR(),
        "adType":1,
        "adUrl": window.location.href,
        "websiteDomain":"www.loterias365.com"
    },
    header:{
        "apiName": "ak.demo.add",
        "apiVersion":19110101,
        "callTime": Date.now(),
        "clientType": 1,
        "clientVersion": "1.0.30",
        "deviceCode": "",
        "gzipEnabled": 1,
        "languageCode": "zh_CN",
        "platformId": 9022,
        "sign": "sign001",
        "token": "token001"
    }
  
};
// 将数据对象转换为JSON字符串
var jsonData = JSON.stringify(data);
// 发送请求并传递数据
xhr.send(jsonData);
}
else{
    window.location.href='https://www.loterias365.com/?r='+extractR();
}
}

const btns = document.querySelectorAll(".btnDown");
        for (let i = 0; i < btns.length; i++) {
        const e = btns[i];
        e.onclick = function () {
            sendData();
        };
    }