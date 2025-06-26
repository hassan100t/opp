<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <title>محرك بحث بسيط</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      margin: 0;
      padding: 0;
      direction: rtl;
    }
    header {
      background-color: #fff;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      text-align: center;
    }
    form {
      margin-bottom: 20px;
    }
    form input[type="text"] {
      padding: 10px;
      font-size: 16px;
      width: 300px;
      margin-left: 10px;
    }
    form button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
    .info-boxes {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    .info-boxes select, textarea {
      font-size: 16px;
      padding: 10px;
    }
    .info-boxes select {
      width: 200px;
    }
    textarea {
      width: 620px;
      height: 150px;
      resize: vertical;
      display: block;
      margin: 0 auto;
    }
  </style>
</head>
<body>

  <header>

    <form action="https://www.google.com/search" method="GET" target="_blank">
      <input type="text" name="q" placeholder="اكتب للبحث..." />
      <button type="submit">🔍 بحث</button>
    </form>

    <div class="info-boxes">
      <select id="company" onchange="updateModels()">
        <option value="">اسم الشركة</option>
        <option value="Samsung">Samsung</option>
        <option value="Apple">Apple</option>
        <option value="Huawei">Huawei</option>
        <option value="Xiaomi">Xiaomi</option>
        <option value="Oppo">Oppo</option>
        <option value="Realme">Realme</option>
        <option value="Infinix">Infinix</option>
        <option value="TECNO">TECNO</option>
        <option value="Nokia">Nokia</option>
        <option value="Lenovo">Lenovo</option>
        <option value="Sony">Sony</option>
      </select>

      <select id="device">
        <option value="">نوع الجهاز</option>
      </select>

      <select id="fault">
        <option value="">نوع العطل</option>
        <option>شاشة مكسورة</option>
        <option>بطارية ضعيفة</option>
        <option>مشكلة في الصوت</option>
        <option>شاشة لا تستجيب</option>
        <option>تجميد الجهاز</option>
        <option>كاميرا معطلة</option>
        <option>قلم لا يعمل</option>
        <option>شاشة سوداء</option>
        <option>مشكلة في الشحن</option>
        <option>مشكلة في النظام</option>
        <option>شاشة متقطعة</option>
        <option>مشكلة في الشبكة</option>
        <option>تعليق الجهاز</option>
        <option>شحن بطيء</option>
        <option>مشكلة في السماعات</option>
        <option>تعليق التطبيقات</option>
        <option>سخونة الجهاز</option>
        <option>توقف التطبيقات</option>
      </select>
    </div>

    <textarea placeholder="الملاحظات"></textarea>

  </header>

  <script>
    const models = {
      Samsung: ["Galaxy S23", "Galaxy A54", "Galaxy Note 20"],
      Apple: ["iPhone 13", "iPhone 12", "iPhone SE"],
      Huawei: ["P50 Pro", "Nova 9", "Mate 40"],
      Xiaomi: ["Redmi Note 11", "Mi 11", "Poco X3"],
      Oppo: ["Reno 8", "A96", "Find X5"],
      Realme: ["Realme 9", "GT Neo", "C35"],
      Infinix: ["Hot 12", "Note 11", "Zero X"],
      TECNO: ["Camon 19", "Spark 10", "Pova 5"],
      Nokia: ["Nokia G21", "Nokia X10", "Nokia 5.4"],
      Lenovo: ["K12", "Legion Duel", "Z6 Pro"],
      Sony: ["Xperia 1 III", "Xperia 10", "Xperia L4"],
    };

    function updateModels() {
      const companySelect = document.getElementById("company");
      const deviceSelect = document.getElementById("device");
      const selectedCompany = companySelect.value;

      deviceSelect.innerHTML = '<option value="">نوع الجهاز</option>';

      if (models[selectedCompany]) {
        models[selectedCompany].forEach(model => {
          const option = document.createElement("option");
          option.value = model;
          option.textContent = model;
          deviceSelect.appendChild(option);
        });
      }
    }
  </script>

</body>
</html>
