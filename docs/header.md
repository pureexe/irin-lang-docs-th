---
title: ส่วนหัว
layout: docs
permalink: /เอกสาร/ส่วนหัว/
---
ส่วนหัวมีไว้สำหรับการประกาศตัวแปรและนำเข้าไฟล์โค้ดโดยส่วนหัวจะเริ่มต้นด้วยขีดกลาง `-` 3 ขีด และปิดด้วยขีดกลางอีก 3 ขีด
โดยส่วนหัวใช้เพื่อประกาศตัวแปรและเรียกหัวข้อเรื่องจากไฟล์อื่นเข้ามาใช้งาน
{% highlight text %}
---
-> brain/main.irin
-> brain/everyday.irin
name <- ไอริน
gender <- หญิง
---
{% endhighlight %}

โดยหน้าที่ของส่วนหัวแบ่งเป็น 2 หน้าที่ได้แก่

## กำหนดค่าตัวแปร

เราสามารถกำหนดค่าตัวแปนได้โดยการใช้เครื่องหมาย `<-` ใส่ไว้ที่บริเวณส่วนหัวของไฟล์ ตังอย่างเช่น

{% highlight text %}
---
name <- ไอริน
gender <- หญิง
---
{% endhighlight %}

เป็นการกำหนดตัวแปรชื่อ name มีค่าเป็น ไอริน และตัวแปรชื่อ gender มีค่าเป็น หญิง

## นำเข้าไฟล์

**คำเตือน:** การนำเข้าไฟล์ผ่านทางส่วนหัวถูกยกเลิกการใช้งานในรุ่น 0.0.1 เป็นต้นไป เพื่อลดการผิดพลาดจากการประมวลผลบนลงล่าง แตเราให้ท่านยังสามารถการนำเข้าไฟล์ผ่านทางส่วนหัวได้อยู่เพื่อรองรับกับการใช้งานโค้ดภาษาไอรินก่อนหน้านี้ ดังนั้นจึงควรใช้ด้วยความระมัดระวัง

เราสามารถนำเข้าไฟล์อื่นได้โดยใช้เครื่องหมาย `->` เมื่อไฟล์นั้นลงท้ายด้วยนามสกุล `.irin` ไฟล์นั้นก็จะถูกนำเข้ามาและแทนที่ไปยังส่วนที่เครื่องหมาย `->` ปรากฏ ตัวอย่างเช่น

{% highlight text %}
---
-> main.irin
-> everyday.irin
---
{% endhighlight %}

คือการนำเข้าไฟล์ชื่อ main.irin และ everyday.irin เข้ามา
