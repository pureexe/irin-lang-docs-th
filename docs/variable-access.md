---
title: การเข้าถึงตัวแปร
layout: docs
permalink: /เอกสาร/เข้าถึงตัวแปร
---
การเรียกค่าในตัวแปรสามารถทำได้โดยการใช้เครื่องหมาย `{}` โดยตัวแปรแบ่งออกเป็น 2 ประเภทได้แก่ ตัวแปรทั่วไป และตัวแปรตามเหตุการณ์

## ตัวแปรทั่วไป

คือตัวแปรที่ประกาศไว้บนส่วนหัวของไฟล์ สามารถเรียกใช้งานได้โดยเขียนว่า `{ชื่อตัวแปร}` แล้วตัวแปลภาษาจะทำการแทนค่าของตัวแปรไปยังบริเวณที่ `{ชื่อตัวแปร}` ปรากฏอยู่ ตัวอย่างเช่น

{% highlight text %}
---
name <- ไอริน
---
ชื่ออะไร
  ดิฉันชื่อ{name}ค่ะ
{% endhighlight %}

 ได้ว่าตัวแปลภาษาจะนำค่าของตัวแปรไปแทนที่บริเวณที่เขียนว่า `{ชื่อตัวแปร}` ดังนั้น เมื่อถามว่าชื่ออะไร ระบบจะตอบว่า ดิฉันชื่อไอรินค่ะ

## ตัวแปรตามเหตุการณ์
ตัวแปรตามเหตุการณ์จะเกิดขึ้นเมื่อมีการใช้นิพจน์ `()` และ `*` เนื่องจากนิพจน์ 2 ตัวนี้จะต้องมีค่าใดค่าหนึ่งแน่นอน โดยการเข้าถึงจะใช้ `{ตำแหน่งของนิพจน์}` โดยนับเป็นเลขเริ่มต้นจาก 1 ตัวอย่างเช่น

{% highlight text %}
ผม(ชอบ|เกลียด)*
  ทำไมคุณถึงได้{1}พวก{2}ละ
{% endhighlight %}
เมื่อบอกกับระบบว่า ผมชอบแมว ระบบจะตอบกลับมาว่า ทำไมคุณถึงได้ชอบพวกแมวละ