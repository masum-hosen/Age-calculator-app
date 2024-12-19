document.getElementById("age-form").addEventListener("submit", e => {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const currentDate = new Date();
  const birthDate = new Date(year, month - 1, day);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    alert("Please fill all fields !");
    return;
  }

  if (day < 1 || day > 31 || month < 1 || month > 12) {
    alert("Invalid day or month!");
    return;
  }

  if (birthDate > currentDate) {
    alert("Date cannot be in the future!");
    return;
  }

  if (birthDate.getDate() !== day) {
    alert("Invalid date!");
    return;
  }

  const diff = currentDate - birthDate;

  const ageDate = new Date(diff);

  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
});
