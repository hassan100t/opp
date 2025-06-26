
const companies = {
  "Samsung": ["Galaxy S23", "Galaxy A54", "Galaxy Note 20"],
  "Apple": ["iPhone 13", "iPhone 12", "iPhone SE"],
  "Huawei": ["P50 Pro", "Nova 9", "Mate 40"],
  "Xiaomi": ["Redmi Note 11", "Mi 11", "Poco X3"],
  "Oppo": ["Reno 8", "A96", "Find X5"],
  "Realme": ["Realme 9", "GT Neo", "C35"],
  "Infinix": ["Hot 12", "Note 11", "Zero X"],
  "TECNO": ["Camon 19", "Spark 10", "Pova 5"],
  "Nokia": ["Nokia G21", "Nokia X10", "Nokia 5.4"],
  "Lenovo": ["K12", "Legion Duel", "Z6 Pro"],
  "Sony": ["Xperia 1 III", "Xperia 10", "Xperia L4"]
};

const faults = {
  "Galaxy S23": ["شاشة مكسورة", "بطارية ضعيفة", "مشكلة في الصوت"],
  "Galaxy A54": ["شاشة لا تستجيب", "تجميد الجهاز", "كاميرا معطلة"],
  "Galaxy Note 20": ["قلم لا يعمل", "شاشة سوداء", "مشكلة في الشحن"],
  "iPhone 13": ["شاشة مكسورة", "مشكلة في البطارية", "تعليق الجهاز"],
  "iPhone 12": ["مشكلة في الكاميرا", "شاشة سوداء", "سخونة الجهاز"],
  "iPhone SE": ["مشكلة في السماعات", "تعليق التطبيقات", "شحن بطيء"],
  "P50 Pro": ["مشكلة في النظام", "شاشة متقطعة", "مشكلة في الكاميرا"],
  "Nova 9": ["شحن بطيء", "مشكلة في الصوت", "بطارية ضعيفة"],
  "Mate 40": ["تجميد الجهاز", "شاشة مكسورة", "مشكلة في الشبكة"],
  "Redmi Note 11": ["بطارية ضعيفة", "شاشة لا تستجيب", "توقف التطبيقات"],
  "Mi 11": ["مشكلة في الصوت", "تجميد الجهاز", "شحن بطيء"],
  "Poco X3": ["شاشة مكسورة", "مشكلة في الكاميرا", "بطارية متعبة"],
  "Reno 8": ["مشكلة في الشاشة", "تعليق الجهاز", "شحن بطيء"],
  "A96": ["مشكلة في الصوت", "شاشة سوداء", "توقف التطبيقات"],
  "Find X5": ["بطارية ضعيفة", "مشكلة في الكاميرا", "مشكلة في الشبكة"],
  "Realme 9": ["شاشة مكسورة", "مشكلة في البطارية", "تعليق الجهاز"],
  "GT Neo": ["مشكلة في الصوت", "شاشة لا تستجيب", "تجميد الجهاز"],
  "C35": ["شحن بطيء", "مشكلة في الكاميرا", "بطارية ضعيفة"],
  "Hot 12": ["مشكلة في الشاشة", "توقف التطبيقات", "شحن بطيء"],
  "Note 11": ["مشكلة في الصوت", "شاشة مكسورة", "تعليق الجهاز"],
  "Zero X": ["بطارية ضعيفة", "مشكلة في الشبكة", "شاشة سوداء"],
  "Camon 19": ["شاشة لا تستجيب", "مشكلة في الصوت", "شحن بطيء"],
  "Spark 10": ["تجميد الجهاز", "مشكلة في الكاميرا", "بطارية ضعيفة"],
  "Pova 5": ["مشكلة في الشبكة", "شاشة مكسورة", "مشكلة في الصوت"],
  "Nokia G21": ["تعليق الجهاز", "شاشة سوداء", "مشكلة في البطارية"],
  "Nokia X10": ["شاشة مكسورة", "مشكلة في الصوت", "شحن بطيء"],
  "Nokia 5.4": ["مشكلة في الكاميرا", "تجميد الجهاز", "بطارية ضعيفة"],
  "K12": ["شاشة لا تستجيب", "مشكلة في الشبكة", "شحن بطيء"],
  "Legion Duel": ["مشكلة في الصوت", "شاشة مكسورة", "تعليق الجهاز"],
  "Z6 Pro": ["بطارية ضعيفة", "مشكلة في الكاميرا", "شاشة سوداء"],
  "Xperia 1 III": ["شحن بطيء", "مشكلة في الشبكة", "شاشة مكسورة"],
  "Xperia 10": ["مشكلة في الصوت", "تعليق الجهاز", "مشكلة في البطارية"],
  "Xperia L4": ["شاشة سوداء", "مشكلة في الكاميرا", "تجميد الجهاز"]
};

const companySelect = document.getElementById('company');
const deviceSelect = document.getElementById('device');
const faultSelect = document.getElementById('fault');

function clearOptions(select) {
  select.innerHTML = '';
}

function fillSelect(select, options, placeholder) {
  clearOptions(select);
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = placeholder;
  select.appendChild(defaultOption);

  options.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option;
    opt.textContent = option;
    select.appendChild(opt);
  });
}

companySelect.addEventListener('change', () => {
  const company = companySelect.value;
  if (company && companies[company]) {
    fillSelect(deviceSelect, companies[company], 'نوع الجهاز');
  } else {
    clearOptions(deviceSelect);
    clearOptions(faultSelect);
  }
  clearOptions(faultSelect);
});

deviceSelect.addEventListener('change', () => {
  const device = deviceSelect.value;
  if (device && faults[device]) {
    fillSelect(faultSelect, faults[device], 'نوع العطل');
  } else {
    clearOptions(faultSelect);
  }
});
