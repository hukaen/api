const foodContainer = document.getElementById("menu");
const result = document.getElementById("result");

const seeAllFoodList = async () => {
  const response = await fetch(
    "https://menu-api.parent-content-parent-content-service.workers.dev/foods",
  );

  const foods = await response.json();

  if (foods.length === 0) {
    result.textContent = `Хайлтын үр дүн олдсонгүй`;
  } else {
    result.textContent = `Хайлтын үр дүн ${foods.length}`;
    foods.forEach((food) => {
      const foodCard = document.createElement("div");
      const foodInfo = document.createElement("div");
      const foodImg = document.createElement("img");
      const foodName = document.createElement("h1");
      const foodPrice = document.createElement("p");

      foodCard.className = "p-[12px] rounded-[12px] w-fit bg-white";
      foodImg.src = food.image;
      foodImg.className = "w-full h-[90px] rounded-[8px] ";
      foodInfo.className = "flex flex-col gap=[4px]";
      foodName.textContent = food.title;
      foodName.className = " text-[16px] ";
      foodPrice.textContent = food.price;
      foodPrice.className = "text-[14px] ";
      foodCard.className =
        "w-full p-[8px] bg-white rounded-[16px] felx flex-col gap-[12px] border-[#0]";
      foodInfo.appendChild(foodName);
      foodInfo.appendChild(foodPrice);
      foodCard.appendChild(foodImg);
      foodCard.appendChild(foodInfo);
      foodContainer.appendChild(foodCard);
    });
  }
};

seeAllFoodList();
const searchByType = async (type) => {
  document.getElementById("menu").innerHTML = "";
  const response = await fetch(
    "https://menu-api.parent-content-parent-content-service.workers.dev/" +
      type,
  );

  const foods = await response.json();

  console.log(foods);

  if (foods.length === 0) {
    result.textContent = `Хайлтын үр дүн олдсонгүй`;
  } else {
    result.textContent = `Хайлтын үр дүн ${foods.length}`;
    foods.forEach((food) => {
      const foodCard = document.createElement("div");
      const foodInfo = document.createElement("div");
      const foodImg = document.createElement("img");
      const foodName = document.createElement("h1");
      const foodPrice = document.createElement("p");

      foodCard.className = "p=[12px] rounded-[12px] wid-fit bg-white";
      foodImg.src = food.image;
      foodImg.className = "w-full h-[90px] rounded-[8px] ";
      foodInfo.className = "flex flex-col gap=[4px]";
      foodName.textContent = food.title;
      foodName.className = " text-[16px] ";
      foodPrice.textContent = food.price;
      foodPrice.className = "text-[14px] ";
      foodCard.className =
        "w-full p-[8px] bg-white rounded-[16px] felx flex-col gap-[12px] border-[#0]";
      foodInfo.appendChild(foodName);
      foodInfo.appendChild(foodPrice);
      foodCard.appendChild(foodImg);
      foodCard.appendChild(foodInfo);
      foodContainer.appendChild(foodCard);
    });
  }
};

const searchByName = async () => {
  document.getElementById("menu").innerHTML = "";
  const searchInput = document.getElementById("searchInput");

  console.log(searchInput.value);
  const response = await fetch(
    `https://menu-api.parent-content-parent-content-service.workers.dev/foods?title=${searchInput.value}`,
  );

  const foods = await response.json();

  console.log(foods);

  if (foods.length === 0) {
    result.textContent = `Хайлтын үр дүн олдсонгүй`;
  } else {
    result.textContent = `Хайлтын үр дүн ${foods.length}`;
    foods.forEach((food) => {
      const foodCard = document.createElement("div");
      const foodInfo = document.createElement("div");
      const foodImg = document.createElement("img");
      const foodName = document.createElement("h1");
      const foodPrice = document.createElement("p");
      const cardButton = document.createElement("button");

      cardButton.textContent = "🛒 Сагслах";
      cardButton.className = "w-full ";
      foodCard.className = "p=[12px] rounded-[12px] wid-fit bg-white";
      foodImg.src = food.image;
      foodImg.className = "w-full h-[90px] rounded-[8px] ";
      foodInfo.className = "flex flex-col gap=[4px]";
      foodName.textContent = food.title;
      foodName.className = " text-[16px] ";
      foodPrice.textContent = food.price;
      foodPrice.className = "text-[14px] ";
      foodCard.className =
        "w-full p-[8px] bg-white rounded-[16px] felx flex-col gap-[12px] border-[#0]";
      foodInfo.appendChild(foodName);
      foodInfo.appendChild(foodPrice);
      foodCard.appendChild(foodImg);
      foodCard.appendChild(cardButton);
      foodCard.appendChild(foodInfo);
      foodContainer.appendChild(foodCard);
    });
  }
};
