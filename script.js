const apiKey = 'cSNjug5rA7By4okQr7JNJrdYIsB57U86xj8hf6Aj'; // Use NASA demo key, limited requests
const titleEl = document.getElementById('title');
const imgEl = document.getElementById('apod-img');
const explanationEl = document.getElementById('explanation');
const randomBtn = document.getElementById('random-btn');

// Fetch today’s APOD
async function fetchApod(date) {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  if (date) url += `&date=${date}`;
  const res = await fetch(url);
  const data = await res.json();

  titleEl.textContent = data.title;
  imgEl.src = data.url;
  imgEl.alt = data.title;
  explanationEl.textContent = data.explanation;
}

// Generate random date within last year
function randomDate() {
  const start = new Date();
  start.setFullYear(start.getFullYear() - 1);
  const end = new Date();
  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  const randomDate = new Date(randomTime);
  return randomDate.toISOString().split('T')[0];
}

randomBtn.addEventListener('click', () => {
  fetchApod(randomDate());
});

// Load today's APOD on page load
fetchApod();