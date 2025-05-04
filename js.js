document.querySelector(".btn.btn-primary.w-100.mb-3").addEventListener("click", function () {
    const emailInput = document.querySelector(".form-control.mb-2").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput === "" || !emailPattern.test(emailInput)) {
        alert("請輸入正確的電子郵件");
    } else {
        alert("登入中");
    }
});
