window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
    OneSignal.init({
        appId: "0368c908-2cbf-435b-aa13-0a8740120353", // Zamień na swój App ID
    });
});

// Obsługa formularza
const emailForm = document.getElementById("emailForm");
emailForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Zablokuj domyślne zachowanie formularza
    const email = document.getElementById("email").value;

    // Wysyłanie emaila do OneSignal
    OneSignal.push(function() {
        OneSignal.setEmail(email)
            .then(function() {
                alert("Dziękujemy za zapisanie się na newsletter!");
            })
            .catch(function(error) {
                console.error("Błąd podczas subskrypcji email:", error);
                alert("Wystąpił błąd. Spróbuj ponownie.");
            });
    });
});