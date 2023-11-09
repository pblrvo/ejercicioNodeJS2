const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  palabras = req.url;
  palabras = palabras.slice(-1);
  palabras = parseInt(palabras);
  const contraseña = generatePassword(palabras);

  res.end(contraseña);
});
// Iniciar el servidor
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

const dict = [
  "apple",
  "banana",
  "cat",
  "dog",
  "elephant",
  "fox",
  "grape",
  "hippo",
  "iguana",
  "jaguar",
  "kangaroo",
  "lemon",
  "monkey",
  "newt",
  "octopus",
  "panda",
  "quokka",
  "raccoon",
  "snake",
  "tiger",
  "umbrella",
  "vulture",
  "walrus",
  "xylophone",
  "yak",
  "zebra",
  "avocado",
  "beetle",
  "crocodile",
  "dolphin",
  "eagle",
  "flamingo",
  "gorilla",
  "hedgehog",
  "impala",
  "jellyfish",
  "koala",
  "llama",
  "mongoose",
  "narwhal",
  "ostrich",
  "parrot",
  "quokka",
  "rhinoceros",
  "scorpion",
  "toucan",
  "unicorn",
  "vampire",
  "wombat",
  "fish",
  "yeti",
  "zeppelin",
  "alpaca",
  "bison",
  "cheetah",
  "dalmatian",
  "elephant",
  "flamingo",
  "giraffe",
  "honeybee",
  "iguana",
  "jackal",
  "kangaroo",
  "lemur",
  "meerkat",
  "narwhal",
  "octopus",
  "penguin",
  "quokka",
  "rattlesnake",
  "scorpion",
  "toucan",
  "urchin",
  "vulture",
  "wolverine",
  "x-ray",
  "yak",
  "zebra",
  "anemone",
  "butterfly",
  "caterpillar",
  "daisy",
  "eucalyptus",
  "ferret",
  "gazelle",
  "hyena",
  "ibis",
  "jackfruit",
  "kiwi",
  "lemongrass",
  "mongoose",
  "narwhal",
  "opossum",
  "peacock",
  "quokka",
  "raccoon",
  "snail",
  "tiger",
  "uakari",
  "viper",
  "weasel",
  "xerus",
  "yak",
  "zebu",
];

function generatePassword(palabras) {
  let password = "<p>Contrase&ntildea: ";
  if (palabras < 1 || palabras >= 10) {
    alert("Por favor ingrese un número entre 1 y 10");
    return;
  }

  let palabrasUsadas = [];

  for (let i = 0; i < palabras; i++) {
    let random = Math.floor(Math.random() * dict.length);
    if (palabrasUsadas.includes(dict[random])) {
      i--;
      continue;
    }
    password += dict[random];
  }
  password += '</p>'
  return password;
}
