# ProjectDetail: SIT Hello World Hippo

## 1. ประเภทโปรเจกต์ (Project Category)
- **ประเภท:** Hackathon

---

## 2. Name Project
- **ชื่อโปรเจกต์:** SIT Hello World Hippo (SIT Room Reservation System)

---

## 3. Subject/Hackathon name
- **ชื่อการแข่งขัน:** SIT Hello World Hackathon (School of Information Technology - SIT, KMUTT)  
- **ทีม:** Group 1

---

## 4. Project duration: Month-day-year
- **ระยะเวลาการดำเนินงาน:** January – February 2025

---

## 5. Project overview
โครงการ Redesign และพัฒนาระบบจองห้องเรียนและห้องประชุมของคณะเทคโนโลยีสารสนเทศ (SIT KMUTT) ใหม่ทั้งหมด เพื่อแก้ปัญหาระบบเดิมที่มีหน้าตาการใช้งานซับซ้อน ค้นหาห้องยาก และไม่รองรับการตรวจสอบสถานะการจองแบบ Real-time ให้กลายเป็นแพลตฟอร์มที่ทันสมัย สะดวก รวดเร็ว และใช้งานได้จริง

### วัตถุประสงค์และฟีเจอร์หลัก (Key Goals & Features):
1. **MVP Quick Booking Flow (Hero Section):** ออกแบบให้สามารถจองได้ทันทีตั้งแต่หน้าแรก โดยเลือก:
   - ตึกเรียน (Building)
   - ห้องเรียน (Room)
   - วันที่ต้องการใช้งาน (Date)  
   แล้วกดไปยังขั้นตอนกรอกรายละเอียดการจองได้ทันที
2. **Role-based Access Management:** จัดการสิทธิ์การเข้าใช้งานอย่างชัดเจนตามสถานะ ได้แก่ อาจารย์, เจ้าหน้าที่, และนักศึกษา
3. **Real-time Status Tracking:** แจ้งสถานะการจองอย่างชัดเจน ได้แก่ `PENDING`, `CONFIRMED`, `CANCELLED`, และ `EXPIRED`
4. **Conflict Prevention & Security:** ระบบตรวจสอบเวลาเพื่อป้องกันการจองซ้ำซ้อน พร้อมระบบยืนยันผ่านอีเมลและจัดเก็บ Reservation Key
5. **Issue Reporting & Logging:** หน้ารายงานปัญหาการใช้งานพร้อมดูประวัติย้อนหลัง และระบบบันทึกประวัติการเปลี่ยนแปลงสถานะ

---

## 6. My Role
- **บทบาท:** UX/UI Designer / Web Designer

### ความรับผิดชอบหลัก (Responsibilities & Contributions):
- **MVP Interface Design (Figma):** ออกแบบหน้าจอเว็บไซต์หลักในระดับ MVP:
  - หน้าแรก (Landing Page) และ Hero Section คัดกรองห้องว่าง
  - หน้าแบบฟอร์มการจองห้อง (Reservation Flow)
  - หน้าแสดงสถานะและประวัติการจองห้อง (Booking Status & History)
- **Cross-functional Collaboration:** ทำงานร่วมกับสมาชิกในทีมหลากหลายสายงาน ได้แก่ ทีม Database (CS) และทีม Frontend/Backend (IT) เพื่อส่งมอบสเปกงานออกแบบและตรวจทานความเป็นไปได้ตามโครงสร้าง ERD และ API Specification

---

## 7. Key learnings
1. **การทำงานร่วมกันแบบ Cross-functional ในเวที Hackathon:**  
   ได้เรียนรู้การประสานงานระหว่างสายงานดีไซน์ (DSI) กับเพื่อนร่วมทีมสายพัฒนา (CS/IT) ทำให้เข้าใจมุมมองทางเทคนิค โครงสร้างฐานข้อมูล และข้อจำกัดของระบบ
2. **การออกแบบสำหรับ MVP (Minimum Viable Product):**  
   เรียนรู้การจัดลำดับความสำคัญของฟังก์ชันการทำงานภายใต้เวลาที่จำกัด โดยมุ่งเน้นไปที่ Core User Flow ของการจองห้องให้สำเร็จได้รวดเร็วที่สุด
3. **การออกแบบ UI ให้สอดคล้องกับ Data Model:**  
   เข้าใจกระบวนการแปลง Entity-Relationship Diagram (ERD) และสถานะในฐานข้อมูลให้ออกมาเป็น Visual Feedback ที่ผู้ใช้เข้าใจง่ายบนหน้าจอ

---

## 8. Tools
- **Design & Prototyping:** Figma
- **Database & Architecture Reference:** ER Diagram, API Documentation
- **Collaboration & Task Management:** Discord, GitHub, Canva
