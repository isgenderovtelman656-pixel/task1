  let imgs = document.querySelectorAll("img");

  imgs[0].onclick = () => {
    imgs.forEach(i => i.classList.remove("active"));
    imgs[0].classList.add("active");
  };

  imgs[1].onclick = () => {
    imgs.forEach(i => i.classList.remove("active"));
    imgs[1].classList.add("active");
  };

  imgs[2].onclick = () => {
    imgs.forEach(i => i.classList.remove("active"));
    imgs[2].classList.add("active");
  };

  imgs[3].onclick = () => {
    imgs.forEach(i => i.classList.remove("active"));
    imgs[3].classList.add("active");
  };