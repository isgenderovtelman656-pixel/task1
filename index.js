  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;

      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });



const rates = { "USD": 1.70, "EUR": 1.84, "AZN": 1.00 };

function convert() {
    const amount = document.getElementById("in").value;
    const from = document.getElementById("curFrom").value;
    const to = document.getElementById("curTo").value;

    const result = (amount * rates[from]) / rates[to];
    document.getElementById("out").value = result.toFixed(2);
}

document.addEventListener("input", convert);
window.onload = convert;
