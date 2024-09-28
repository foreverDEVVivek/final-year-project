const { name } = require("ejs");

const data=[
    {
        name: "Rolex Submariner",
        brand: "Rolex",
        description: "The Rolex Submariner is an iconic dive watch known for its durability and timeless design. Water-resistant up to 300 meters.",
        price: 12500
    },
    {
        name: "Omega Speedmaster",
        brand: "Omega",
        description: "The Omega Speedmaster, famously known as the 'Moonwatch,' is a chronograph watch that was worn on the moon. Features a tachymeter scale.",
        price: 5200
    },
    {
        name: "Seiko 5 Sports",
        brand: "Seiko",
        description: "The Seiko 5 Sports is a versatile and affordable automatic watch, featuring a day-date display and robust construction.",
        price: 250
    },
    {
        name:"TAG Heuer Carrera",
        brand: "TAG Heuer",
        description: "The TAG Heuer Carrera is a racing-inspired chronograph watch with a sleek design and precise timekeeping.",
        price: 3400
    },
    {
        name: "Casio G-Shock",
        brand: "Casio",
        description: "The Casio G-Shock is known for its extreme durability and shock resistance, making it a perfect choice for outdoor activities.",
        price: 150
    }
    ,{
        name: "Tissot Le Locle",
        brand: "Tissot",
        description: "The Tissot Le Locle is a classic dress watch with an elegant design, featuring Roman numerals and a textured dial.",
        price: 650
    }
    ,
]

module.exports={data:data};