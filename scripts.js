document.addEventListener("DOMContentLoaded", () => {
  console.log("For Watch Website Loaded 🚀");

  // تأكيد إذا كان المستخدم مسجل الدخول
  if (!localStorage.getItem("loggedIn")) {
    window.location.href = "/login.html";
  }

  // استكمال المشاهدة
  let resumeData = JSON.parse(localStorage.getItem("resumeData")) || {};
  updateResumeSection(resumeData);

  // التحديث التلقائي للمحتوى كل 30 دقيقة
  setInterval(() => {
    fetchNewContent();
  }, 30 * 60 * 1000);

  // مثال على التبديل بين ملفات التعريف
  document.querySelectorAll(".profile-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      let profileId = e.target.dataset.profile;
      switchProfile(profileId);
    });
  });
});

function updateResumeSection(data) {
  let container = document.querySelector("#resume-section");
  container.innerHTML = "";
  for (let key in data) {
    let item = document.createElement("div");
    item.textContent = `استكمل: ${data[key].title}`;
    item.classList.add("resume-item");
    container.appendChild(item);
  }
}

function fetchNewContent() {
  console.log("جاري التحقق من المحتوى الجديد...");
  // هنا يتم طلب المحتوى الجديد (مثال)
  // fetch("https://web29.faselhd1watch.one/movies")
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log("تم تحديث المحتوى");
  //   });
}

function switchProfile(profileId) {
  localStorage.setItem("activeProfile", profileId);
  window.location.reload();
}
