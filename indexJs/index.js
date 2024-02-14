// console.log(pokemons);

const list = document.querySelector(".list");


for (let item of pokemons) {
  let card = document.createElement("li");
  let img = document.createElement("img");
  let name = document.createElement("h3");
  let types = document.createElement("p");
  let wrapper = document.createElement("div");
  let weight = document.createElement("span");
  let height = document.createElement("span");
  let heart = document.createElement("img");


  heart.addEventListener('click', () => {
    // const local = heart.classList.add("bg-red-500")
    // localStorage.setItem("class", JSON.stringify(local))
    heart.classList.toggle("bg-red-500");
  })
  
  img.src = item.img;
  heart.src = "images/heart1.svg";
  name.textContent = item.name;
  types.textContent = item.type;
  weight.textContent = item.weight;
  height.textContent = item.height;
  
  list.appendChild(card);
  card.append(img, name, types, wrapper, heart);
  wrapper.append(weight, height);
  
  card.setAttribute(
    "class",
    "w-full max-w-[307px] py-9 flex flex-col items-center bg-white rounded-3xl border-2 border-black relative"
    );
    img.setAttribute("class", "max-w-[157px] w-full")
    name.setAttribute(
      "class",
      "border-t-2 border-black w-full mt-16 px-8 pt-5 font-bold text-2xl"
      );
      types.setAttribute("class", "px-8 w-full mt-1.5 font-medium text-xl");
      wrapper.setAttribute("class", "flex gap-5 w-full px-8 mt-8 text-xl font-bold");
      heart.setAttribute("class", "absolute bottom-[30%] right-7")

}
