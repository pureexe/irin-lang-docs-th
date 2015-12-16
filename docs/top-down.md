---
title: บนลงล่าง
layout: docs
permalink: /เอกสาร/บนลงล่าง
---
สำหรับภาษาไอรินจะมีการเรียงลำดับความสัมพันธ์โดยการทำงานโค้ดจากบนลงล่าง หากโค้ดที่มีลำดับการเยื้องเดียวกันจะทำการเลือกโค้ดที่อยู่ด้านบนเสมอ
ตัวอย่างเช่น
{% highlight text %}
hello
  Good morning
hello
  Good bye
{% endhighlight %}

ถ้าหากเรากรอกคำว่า hello ระบบจะตอบกลับมาว่า Good morning เนื่องจาก hello ที่ตอบกลับ Good morning อยู่ก่อน Good bye นั่นเอง
