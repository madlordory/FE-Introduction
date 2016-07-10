// alert(123);
// var a =10;
// var c ='cjemjao';
// var arr=[1,2,3,4,5,6];
// var array= new Array(1,2,3,4,5);

// var obj = {
//     name:'chenhaijiao',
//     age:18,
//     salary:100000000,
//     eat:function(){
//         alert('吃饭');
//     },
//     drink:function(){
//         alert('喝水');
//     },
//     paoniu:function(){
//         alert('这样不行');
//     },
//     setSalary:function(value){
//         this.salary=value;
//     }
// }

// alert()

// console.log(obj.salary);
// obj.setSalary(50);
// console.log(obj.salary);

// function chuqu(){
//     alert('chuqule ');
// }
// function jinru(){
//     alert('jinlaile');
// }
// window.onload=function(){
//     var a = document.getElementById('shouye');
//     a.innerHTML = 'hah';
// }

//
// var list = document.getElementById('dropdown');

// function show(){
//     list.style.display = 'block';
// }
// function hide(){
//     list.style.display = 'none';
// }

/*
    重点：
    1、js要想操纵一个元素，首先要选中这个元素；
    2、

*/
// list.hide();
// var list = $('.dropdown');
// var list = $('p');

var list = $('#dropdown');
var li = $('.dropmenu');
li.mouseover(function(){
    list.show();
    list.css();
})
li.mouseout(function(){
    list.hide();
})

var data={};

$('#submit').click(function(){
    data.name=$('#name').val();
    
})

$.ajax({
        url:'./style.css',
        cache: false,
        contentType:'application/x-www-form-urlencoded',
        dataType:'style/text',
        type:'POST',
        success:function(data){
            console.log(data);
        },
        error:function(err){
            console.log(err);
            // alert('请求出错')
        }
    })





