---
title: วิธีการติดตั้งภาษาไอริน
layout: docs
permalink: /เอกสาร/ติดตั้ง
---

## ลองใช้งาน

สิ่งที่ง่ายที่สุดสำหรับการเริ่มต้นในการเรียนรู้ภาษาไอรินคือการทดลองเขียนภาษาไอรินผ่าน [ลองใช้](/ลองใช้) ก่อนที่จะตัดสินใจใช้ภาษาไอรินบนแอปพลิเคชั่นของคุณ

## ติดตั้ง
หลังจากคุณได้[ดาวน์โหลด](/ดาวน์โหลด)ภาษาไอรินแล้วคุณสามารถเขียน

ถ้าคุณเขียนให้ใช้งานกับเบราวเซอร์คุณสามารเขียนได้โดย
{% highlight html%}
<script src="path-to-irin-lang/irin-lang.js"></script>
{% endhighlight %}

ถ้าคุณเขียนในรูปแบบของ AMDjs หรือใช้งาน requireJS สามารถใช้งานได้โดย

ถ้าคุณเขียนให้ใช้งานกับ CommonJS หรือ Node.js คุณสามารถเขียนได้โดย
{% highlight javascript%}
var Irin = require("irin-lang");
{% endhighlight %}



## ทดสอบหลังติดตั้ง

สร้างไฟล์ชื่อ hello.irin ขึ้นมา
{% highlight text%}
hello
  Hello world!
{% endhighlight %}

หลังจากนั้นสร้างไฟล์ javascript ขึ้นมาเพื่อทดสอบว่าสามารถเรียกไฟล์ hello.irin ขึ้นมาทำงานได้หรือไม่

{% highlight js%}
var bot = new Irin("hello.irin",function(err){
  if(err){
    throw err;
  }
  console.log(bot.reply("hello"));
});
{% endhighlight %}

หากไม่มีอะไรผิดพลาดโปรแกรมจะตอลกลับมาว่า Hello world! แต่ถ้าหากมีข้อผิดพลาดเกิดขึ้นลองแก้ปัญหาด้วยตัวของท่านเองก่อน หากไม่สามารถทำได้กรุณารายงานข้อผิดพลาดของท่านมาที่ [Github issues](https://github.com/pureexe/irin-lang/issues)
