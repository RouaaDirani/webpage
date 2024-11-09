$(document).ready(function () {
    // التحقق من اكتمال حقول النموذج
    $("form").on("submit", function (event) {
        const name = $('input[type="text"]').val();
        const email = $('input[type="email"]').val();
        const message = $('textarea').val();

        if (!name  !email  !message) {
            event.preventDefault();
            alert("من فضلك أكمل جميع الحقول!");
        }
    });

    // تأثير التمرير الناعم (Smooth Scroll) عند النقر على روابط التنقل
    $('a[href^="#"]').on("click", function (event) {
        event.preventDefault();
        const target = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(target).offset().top,
            },
            500 // مدة التمرير بالميلي ثانية
        );
    });
});

// تأثير عند التمرير فوق الصور في المعرض (Portfolio)
document.querySelectorAll('.img-fluid').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = "scale(1.05)";
        this.style.transition = "transform 0.3s ease";
    });
    img.addEventListener('mouseout', function() {
        this.style.transform = "scale(1)";
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});