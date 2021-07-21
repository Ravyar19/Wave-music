import { v4 as uuidv4 } from "uuid"

function chillHop() {
  return [
    {
      name: "Melodiya",
      artist: "Psalm Trees, FloFilz",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-300x300.jpg",
      id: uuidv4(),
      active: true,
      color: ["#349c82", "#ac7164"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16190",
    },
    {
      name: "Be Here Now",
      artist: "Chillhop Music, chief.",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#024245", "#e7efc7"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21782",
    },
    {
      name: "Higher",
      artist: "Misha, Jussi Halme",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#e97074", "#292f47"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15088",
    },
    {
      name: "Got It",
      artist: "Misha, Jussi Halme",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#e97074", "#292f47"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15041",
    },
    {
      name: "Lonely Waves",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/80be32197ca7971424bef5e4d0c6810e1d4334c6-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#d36be7", "#090e2b"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14981",
    },
    {
      name: "Paraglider",
      artist: "Kendall Miles, H E R B",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/4fac6bb3a32f9e76b465990ba8d97d7db8a372f5-300x300.jpg",
      id: uuidv4(),
      active: false,
      color: ["#b26968", "#faaa52"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9318",
    },
  ]
}

export default chillHop
