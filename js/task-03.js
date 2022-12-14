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
galleryEL.style.display = "flex";
galleryEL.style.gap = "20px";

const photoEl = ({ url, alt }) => {
  return `<li><img src="${url}" alt = "${alt}" width = 320px /> </li>`;
};
const makeImage = images.map(photoEl).join("");
galleryEL.insertAdjacentHTML("afterbegin", makeImage);
