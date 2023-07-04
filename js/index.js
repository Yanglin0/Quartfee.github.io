
    var the1 = document.getElementById('navigation1');
    var the2 = document.getElementById('navigation2');
window.addEventListener('wheel', function (event) {

        if (event.deltaY < 0) {
            // 向上移时怎么返回来
        } else {
            the1.classList.add('animate1')
            the2.classList.add('animate2')
        }
})
    
function setProgress(percent) {
    const indicator = document.querySelector('.progress-indicator');
    const circumference = 2 * Math.PI * (indicator.offsetWidth / 2);
    const offset = circumference - (percent / 100) * circumference;

    indicator.style.strokeDasharray = `${circumference} ${circumference}`;
    indicator.style.strokeDashoffset = offset;
}

// 获取按钮元素
var button = document.getElementById("");

// 添加按钮点击事件监听器
button.addEventListener("click", function () {
    // 修改页面的URL进行跳转
    window.location.href = "目标页面的URL";
});



