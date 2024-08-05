const handleSubmit = (e) => {
    // alert("Hello")
    e.preventDefault();

    let subject = $("#subject").val();
    // console.log(subject);
    let name = $("#fname").val() + " " + $("#lname").val();
    let message = $("#message").val();
    let body = `Name: ${name}\nMessage: ${message}`;

    window.open(`mailto:tanayjaiman@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    alert("Email is being prepared to be sent!");
}

$(document).ready(function() {
    $('#contactForm').on('submit', handleSubmit);
});