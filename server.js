const http = require("node:http");
const hostName = "127.0.0.2";
const port = "3450";

const items = [
  {
    id: 1,
    itemName: "TV",
    price: 10.99,
    category: "Electronics",
    quantity: 5,
    description:
      "A high-definition television for an immersive viewing experience.",
    image:
      "https://www.sony.com.ph/image/ccbe548efa94995a9c034d96a4a6acbb?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320",
    quantitySales: 0,
    cartQuantity: 0,
  },
  {
    id: 2,
    itemName: "Refrigerator",
    price: 5.99,
    category: "Home & Kitchen",
    quantity: 3,
    description:
      "A spacious refrigerator to keep your food fresh and organized.",
    image:
      "https://mobileimages.lowes.com/productimages/2092c082-a8ed-45f3-89b1-ee516277c87b/60593575.jpg?size=mpdhi",
    quantitySales: 0,
    cartQuantity: 0,
  },
  {
    id: 3,
    itemName: "iPhone",
    price: 7.49,
    category: "Electronics",
    quantity: 8,
    description:
      "The latest smartphone with cutting-edge features and a sleek design.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7dBUHg0-TxoRHsNeDFwc9WR2F2pDuQg6e_eDJKsV0WX2sfuAnb_6oHwfazYRTXvQD9s&usqp=CAU",
    quantitySales: 0,
    cartQuantity: 0,
  },
  {
    id: 4,
    itemName: "Shoes",
    price: 12.99,
    category: "Kicks",
    quantity: 2,
    description: "Stylish and comfortable shoes that make a fashion statement.",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/95c80cf2-ff69-48bd-91a8-aba951b2c153/custom-nike-air-max-97-by-you.png",
    quantitySales: 0,
    cartQuantity: 0,
  },
];

const server = http.createServer((req, res) => {
  //set headers

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTION, GET");
  res.setHeader("Access-Control-Max-Age", 2592000);
  switch (req.url) {
    case "/items":
      res.writeHead(200);
      res.end(JSON.stringify(items));
      break;
    default:
      res.end(JSON.stringify({ error: " Invalid API" }));
  }
});

server.listen(port, hostName, () => {
  console.log(`Server is running on http://${hostName}:${port}`);
});
