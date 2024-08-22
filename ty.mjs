export function setupInquiryForm() {
    const form = document.getElementById('inquiry-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
       
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`);

        alert('Thank you for your inquiry!');
    });
}