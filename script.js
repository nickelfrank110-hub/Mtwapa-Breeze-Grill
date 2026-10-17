const WHATSAPP = '254712345678'; // change the number here only
document.getElementById('whatsapp-link').href = 'https://wa.me/' + WHATSAPP;
const btn = document.getElementById('copy-btn');
const status = document.getElementById('copy-status');
const defaultHTML = btn.innerHTML;

btn.addEventListener('click', async () => {
    let message;
    try {
        await navigator.clipboard.writeText(btn.dataset.till);
        message = 'Till number copied!';
        btn.textContent = '✅ ' + message;
    } catch {
        message = 'Till: ' + btn.dataset.till + ' (copy manually)';
        btn.textContent = message;
    }
    status.textContent = message;
    setTimeout(() => { btn.innerHTML = defaultHTML; }, 2500);
});

const form = document.getElementById('reserve-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const text = `Hi! I'd like to reserve a table.\nName: ${d.get('name')}\nDate: ${d.get('date')}\nTime: ${d.get('time')}\nGuests: ${d.get('guests')}`;
    window.location.href = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text);
});

document.getElementById('date').min = new Date().toLocaleDateString('en-CA');
