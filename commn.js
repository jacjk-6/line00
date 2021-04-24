
        function my$(id) {
    return document.getElementById(id);
}
        /**
 * Created by Xibin GU on 2020/2/12.
 */

        function setInnerText(element,text) {
            if (typeof element.textContent==undefined){
                element.innerText=text;
            }else {
                element.textContent=text;
            }
        }
        //获取任意标签中的文本内容
        function getInnerText(element) {
            if (typeof element.textContent==undefined){
                return element.innerText;
            }else {
                return element.textContent;
            }
        }
        
         //绑定事件兼容代码
        function addEventListener(element,type,fn){
            if (element.addEventListener){
                element.addEventListener(type,fn,false);
            }else if(element.attachEvent){
                element.attachEvent("on"+type,fn);
            }else {
                element["on"+type]=fn;
            }
        }
         // 解绑事件兼容代码
        // function removeEventListener(element,type,fnName){
        //     if (element.removeEventlistener){
        //         element.removeEventlistener(type,fnName,false);
        //     }else if(element.detachEvent){
        //         element.detachEvent("on"+type,fnName);
        //     }else {
        //         element["on"+type]=null;
        //     }
        // }
        // addEventListener(my$("btn"),"click",f1);
        // addEventListener(my$("btn2"),"click",f2);
        //匀速动画函数
        function animate(element,target) {
            clearInterval(timeId);
            var current=element.offsetLeft;
            var timeId=setInterval(function () {
                var step=10;
                step=current<target?step:-step;
                current+=step;
                if(Math.abs(target-current)>Math.abs(step)){
                    console.log("hhh");
                    element.style.left=current+"px";
                    console.log(current);
                    console.log(target);
                    console.log(step);
                }else {
                    clearInterval(timeId);
                    element.style.left=target+"px";
                }
            },20);

        }
       //缓动动画函数
        function hdAnimate(element,target) {
            clearInterval(timeId);
            var timeId=setInterval(function () {
                var current=element.offsetLeft;
                var step=(target-current)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style.left=current+"px";
                if(current==target){
                    clearInterval(timeId);
                }
                console.log("目标位置："+target+"，当前位置"+current+"，每次移动步数"+step);
            },20)
        }
        //getScroll函数
        function getScroll() {
            return{
                left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,
                top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0
            };
        }

        //获取任意元素的任意样式属性的值
        function getStyle(element,styleArr) {
            return  window.getComputedStyle?window.getComputedStyle(element,null)[styleArr]:element.currentStyle[styleArr];
        }