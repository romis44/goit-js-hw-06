const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEL = document.querySelector(".gallery");
galleryEL.style.listStyle = "none";
const photoImg = (images) => {
  return images.map((image) => {
    const photoEl = document.createElement("li");
    photoEl.insertAdjacentHTML("beforeend", "<img>");
    photoEl.firstChild.src = image.url;
    photoEl.firstChild.alt = image.alt;
    photoEl.firstChild.style.width = "340px";
    return photoEl;
  });
};
const img = photoImg(images);
galleryEL.append(...img);
