export interface ICategory {
  id: number;
  name: string;
  name_esp: string;
  image?: string;
}

export interface IDish {
  id: number;
  name: string;
  name_esp: string;
  description: string;
  description_esp: string;
  price: number;
  image: string;
  category: string;
  amount: number;
}

export interface IRestaurant {
  id: number;
  name: string;
  image: string | undefined;
  logo: string | undefined;
  desctiptionshort: string;
  description: string;
  address: string;
  stars: number;
  reviews: string;
  category: string;
  opening1: string;
  opening2?: string;
  phone?: string;
  offertoday: boolean;
  pdf_url: string;
  dishes: IDish[];
}

const imageUrl = "../../assets/images/restaurant/diria/";

export const MockCategories: ICategory[] = [
  {
    id: 1,
    name: "APPETIZERS",
    name_esp: "ENTRADAS",
  },
  {
    id: 2,
    name: "MAIN DISHES",
    name_esp: "PLATOS FUERTES",
  },
  {
    id: 3,
    name: "SPECIALS",
    name_esp: "ESPECIALES",
  },
  {
    id: 4,
    name: "VEGETARIANAS",
    name_esp: "ALTERNATIVAS",
  },
  {
    id: 4,
    name: "WINE & Drinks",
    name_esp: "VINOS & BEBIDOS",
  },
];

export const MockRestaurants: IRestaurant[] = [
  {
    id: 1,
    name: "BrisaMar",
    image: `${imageUrl}burger.png`,
    logo: `${imageUrl}brisa-mar-01_standard.webp`,
    desctiptionshort:
      "The best spot to enjoy the warm breeze of the ocean and the spectacular view of Tamarindo Beach with international cuisine. ",
    description:
      "From breakfast to snacks or sunset cocktails to delight your days in paradise, this showpiece restaurant is located right on the Tamarindo beach. Here you can enjoy lobster, steaks, seafood and a variety of international cuisine under the shade of a huge and imposing Matapalo tree. Watch the breaking waves or listen to the gentle breeze while partaking in lunch or dinner. Delicious cocktails or fresh juices are perfect to enjoy and chill around the amazing terrace. ",
    address: "Tamarindo Diria Beach Resort",
    stars: 4,
    reviews: "4.4k",
    category: "International",
    opening1: "Mon-Sun: 7 am to 10 am (Breakfast area)",
    opening2: "Mon-Sun: 12 am to 10 pm (Lunch/Dinner)",
    phone: "40320032 ext. 2031",
    offertoday: false,
    pdf_url: "-T5GPe5Boot",
    dishes: [
      {
        id: 1,
        name: "Tuna Tartar",
        name_esp: "Tartar de Atun",
        description:
          "Fresh Pacific tuna finely cut, red onion, cilantro, mango and avocado, garnished with mango, ginger and chipotle.",
        description_esp:
          "Fresco atun del pacifico cortado fina mente, cebolla morada, culantro, mango y aguacate, aderezadas con mango, jengibre y chipotle.",
        price: 11,
        image: "/dish1.png",
        amount: 1,
        category: "APPETIZERS",
      },
      {
        id: 2,
        name: "Crunchy from the Sea",
        name_esp: "Crujientes del Mar",
        description:
          "Crispy wonton pastry slices, assembled with a mixture of shrimp, squid, lobster, thin pieces of avocado and a passion fruit and Damiana sauce.",
        description_esp:
          "Crujientes del Mar - Crunchy from the Sea Lamitas de pasta wonton crujientes, montadas con una mezcla de camarones, calamares, langosta, piezas finas de aguacate y una salsa de maracuya y Damiana.",
        price: 12,
        image: "/dish2.png",
        amount: 1,
        category: "APPETIZERS",
      },
      {
        id: 3,
        name: "Grilled Octopus Salad",
        name_esp: "Ensalada pulpo Grillado",
        description:
          "Grilled octopus, with quinoa, avocado, tomato, cucumber and arugula leaves, marinated with olive oil, lemon, garlic and fresh oregano.",
        description_esp:
          "Pulpos grillados, con quinoa, aguacate, tomate, pepinos hojas de rugala, marinados con aceite de oliva,limon, ajos y orégano fresco.",
        price: 14,
        image: "/dish3.png",
        amount: 1,
        category: "APPETIZERS",
      },
      {
        id: 4,
        name: "Filet El Pelicano",
        name_esp: "Filet El Pelicano",
        description:
          "Steamed sea bass fillet served with a soy and oyster sauce flavored with coriander, chives, lemon grass and ginger and fish sauce, served with jasmine rice.",
        description_esp:
          "Filet de corvina cocido al vapor servida con una salsa soya y ostién aromatizada con culantro, cebollino, zacate de limon y jengibre y salsa de pescado, servido con un arroz jazmin.",
        price: 20,
        image: "/dish3.png",
        amount: 1,
        category: "MAIN DISHES",
      },
      {
        id: 5,
        name: "Salmon fusion Mediterranea",
        name_esp: "Mediterranean Fusion Salmon",
        description:
          "Salmon filet with a white wine sauce, roasted garlic butter and fresh basil, served with jasmine and wild rice, cherry tomatoes and mushrooms.",
        description_esp:
          "Filet de salmon con una salsa de vino blanco, mantequilla ajos rostizados y albahaca fresca, servido con arroz jazmin y salvaje, tomate cherrys y hongos",
        price: 20,
        image: "/dish3.png",
        amount: 1,
        category: "MAIN DISHES",
      },
      {
        id: 6,
        name: "Tropical Snapper Filet",
        name_esp: "Filet de Pargo Tropical",
        description:
          "Grilled snapper filet with skin, mango and curry sauce, coriander and coconut milk, served with Ratatouille and orzo pasta.",
        description_esp:
          "Filet de pargo con su piel a la plancha, con salsa mango y curry, culantro y leche de coco, servidos con Ratatouille y pasta orzo.",
        price: 17,
        image: "/dish3.png",
        amount: 1,
        category: "MAIN DISHES",
      },
      {
        id: 7,
        name: "Crusted Tuna",
        name_esp: "Atun en Costra",
        description:
          "Sesame seed and Cajun crusted tuna filet, with a semi spicy tamarind sauce, fine green beans, mushrooms and onions sautéed with sesame oil.",
        description_esp:
          "Filet de atun en costra de semillas de ajonjoli y cajun, con una salsa de tamarindo semi picante, vainicas finas, hongos y cebollas salteados con aceite de ajonjoli.",
        price: 17,
        image: "/dish3.png",
        amount: 1,
        category: "MAIN DISHES",
      },
      {
        id: 8,
        name: "Shrimp and Lobster Risotto",
        name_esp: "Risotto de Camaréon y Langosta",
        description:
          "Traditional recipe of arborio rice sautéed with jumbo lobster tail shrimp, white wine and sweet cream.",
        description_esp:
          "Tradicional receta de arroz arborio salteados con camarones jumbo cola de langosta, vino blanco y crema dulce.",
        price: 28,
        image: "/dish3.png",
        amount: 1,
        category: "MAIN DISHES",
      },
      {
        id: 9,
        name: "Jumbo Shrimp with rum-coconut sauce",
        name_esp: "Camarén Jumbo con salsa de ron-coco",
        description:
          "Grilled jumbo shrimp with a rum - coconut sauce, chili pasilla, served with mashed potatoes vegetables.",
        description_esp:
          "Camarones jumbos a la parrilla bafados con una salsa de ron y coco, chile pasilla, servido con pure de papas y vegetales.",
        price: 33,
        image: "/dish3.png",
        amount: 1,
        category: "MAIN DISHES",
      },
      {
        id: 10,
        name: "Seafood Tagliatelle",
        name_esp: "Tagliatelle de Mariscos",
        description:
          "Pasta tagliatelle con mariscos frescos salteados con aceite de oliva, vino blanco y crema, saborizada cona albahaca, cebollinos y vodka.",
        description_esp:
          "Tagliatelle pasta with fresh seafood sautéed with olive oil, white wine and cream, flavored with basil, green onions and vodka.",
        price: 19,
        image: "/dish3.png",
        amount: 1,
        category: "MAIN DISHES",
      },
      {
        id: 12,
        name: "DIRIA whole fish",
        name_esp: "Pescado entero del DIRIA",
        description:
          "Whole snapper can be fried or grilled, served with vegetables and fries.",
        description_esp:
          "Pargo entero puede ser frito o a la parrilla , servido con vegetales y papas fritas",
        price: 23,
        image: "/dish3.png",
        amount: 1,
        category: "MAIN DISHES",
      },
      {
        id: 13,
        name: "Vongole Spaghetti",
        name_esp: "Espagueti al Vongole",
        description:
          "Spaghetti with clams sautéed with garlic, butter, fresh tomato, white wine, onions and jalapeno peppers. (can be ordered without spicy sauce)",
        description_esp:
          "Spaghetti con almejas salteadas con ajo, mantequillas, tomate fresco, vino blanco, cebollas y chile jalapenos. (se puede pedir sin picante)",
        price: 16,
        image: "/dish3.png",
        amount: 1,
        category: "MAIN DISHES",
      },

      // {
      //   id: 1,
      //   name: "Tico fish ceviche ",
      //   description:
      //     "Fine pieces of sea bass marinated in lemon juice and fresh spices, served with tropical chips. ",
      //   price: 11,
      //   amount: 1,
      // },
      // {
      //   id: 2,
      //   name: "Tropical shrimp ceviche ",
      //   description:
      //     "Fresh shrimp marinated in lime juice and natural passion fruit, avocado, served with tropical chips. ",
      //   price: 13,
      //   amount: 1,
      // },
      // {
      //   id: 3,
      //   name: "Avocado and shrimp salad ",
      //   description:
      //     "Mixed lettuce, tomato, cucumber, avocado, shrimp stuffing, natural palm heart and rum cocktail sauce. ",
      //   price: 12,
      //   amount: 1,
      // },
      // {
      //   id: 4,
      //   name: "Caesar fusion salad ",
      //   description:
      //     "Romaine lettuce, homemade caesar dressing, parmesan cheese, small pieces of spicy chicken and cas (tropical costa rican fruit) dressing. ",
      //   price: 10,
      //   amount: 1,
      // },
      // {
      //   id: 5,
      //   name: "Heart of palm salad ",
      //   description:
      //     "Mixed lettuce, tomato, cucumber, pickled pejibaye, red onion and passion fruit yogurt dressing. ",
      //   price: 9,
      //   amount: 1,
      // },
      // {
      //   id: 6,
      //   name: "Rice with shrimp ",
      //   description:
      //     "Rice mix with shrimp, prepared with the best ingredients. ",
      //   price: 11,
      //   amount: 1,
      // },
      // {
      //   id: 7,
      //   name: "Seafood rice ",
      //   description:
      //     "Rice mix with fresh seafood from our coasts and fresh spices. ",
      //   price: 16,
      //   amount: 1,
      // },
      // {
      //   id: 8,
      //   name: "Rice with chicken and hearts of palm ",
      //   description:
      //     "Rice mix with chicken and fresh hearts of palm, prepared with the best ingredients. ",
      //   price: 10,
      //   amount: 1,
      // },
      // {
      //   id: 9,
      //   name: "Fetuccini frutti di mare ",
      //   description:
      //     "Delicious variety of fresh seafood with tomato sauce perfumed with brandy. ",
      //   price: 18,
      //   amount: 1,
      // },
      // {
      //   id: 10,
      //   name: "Fusilli with sundried tomatoes ",
      //   description:
      //     "Pasta sautéed with onion, fresh basil, garlic, cream, white wine, sun-dried tomatoes and chicken. ",
      //   price: 13,
      //   amount: 1,
      // },
      // {
      //   id: 11,
      //   name: "Grilled chicken ",
      //   description:
      //     "Grilled chicken breast fillet, served with salad and french fries. ",
      //   price: 14,
      //   amount: 1,
      // },
      // {
      //   id: 12,
      //   name: "Sea bass with passion fruit & mango ",
      //   description:
      //     "Delicious sea bass fillet from our coasts, covered with a green mango and guava sauce marinated with spices and lime, served with rice and vegetables. ",
      //   price: 21,
      //   amount: 1,
      // },
      // {
      //   id: 13,
      //   name: "Whole snapper ",
      //   description:
      //     "Whole fried snapper 550g, served with salad and french fries. ",
      //   price: 21,
      //   amount: 1,
      // },
      // {
      //   id: 14,
      //   name: "Tomato gazpacho ",
      //   description: "Brisa Mar style cold tomato soup. ",
      //   price: 8,
      //   amount: 1,
      // },
      // {
      //   id: 15,
      //   name: "Cucumber cream ",
      //   description: "Cucumber and avocado with fresh spices. ",
      //   price: 9,
      //   amount: 1,
      // },
      // {
      //   id: 16,
      //   name: "Ham and mushrooms pizza ",
      //   description: "Ham, mozzarella cheese and napolitana sauce. ",
      //   price: 13,
      //   amount: 1,
      // },
      // {
      //   id: 17,
      //   name: "Margarita pizza ",
      //   description:
      //     "Neapolitan sauce, mozzarella cheese, fresh tomatoes and basil. ",
      //   price: 12,
      //   amount: 1,
      // },
      // {
      //   id: 18,
      //   name: "Beef tacos ",
      //   description:
      //     "3 soft flour tortilla tacos with beef fajitas sauteed with sweet peppers and onions, served with ground beans, pico de gallo, Costa Rican cheese, served with french fries. ",
      //   price: 13,
      //   amount: 1,
      // },
      // {
      //   id: 19,
      //   name: "Shrimp tacos ",
      //   description:
      //     "3 soft flour tortilla tacos with shrimp sauteed with garlic and sweet peppers, served with a cabbage salad topped with guacamole, pico de gallo and jalapeño peppers. ",
      //   price: 13,
      //   amount: 1,
      // },
      // {
      //   id: 20,
      //   name: "Fish tacos ",
      //   description:
      //     "3 soft flour tortilla tacos with fish sauteed with garlic, sweet peppers and onions served with a cabbage salad topped with house cilantro mayonnaise, ground beans, guacamole, pico de gallo and jalapeño peppers. ",
      //   price: 11,
      //   amount: 1,
      // },
      // {
      //   id: 21,
      //   name: "Veggie Risotto ",
      //   description:
      //     "Arborio rice with sautéed vegetables, olive oil, fresh spices and basil. ",
      //   price: 13,
      //   amount: 1,
      // },
      // {
      //   id: 22,
      //   name: "Veggie Pad Thai ",
      //   description:
      //     "Pad Thai sauteed with olive oil, garlic, fresh vegetables and tomatoes. ",
      //   price: 13,
      //   amount: 1,
      // },
      // {
      //   id: 23,
      //   name: "Red lentil hummus ",
      //   description:
      //     "Special house recipe with red lentils, tahini, olive oil, garlic, fresh spices, served with vegetable sticks and tropical chips. ",
      //   price: 9,
      //   amount: 1,
      // },
      // {
      //   id: 24,
      //   name: "Portobello mushroom burger ",
      //   description:
      //     "Grilled mushrooms with a chickpea cake, tofu cheese, lettuce and tomato, served with a salad. ",
      //   price: 12,
      //   amount: 1,
      // },
      // {
      //   id: 25,
      //   name: "Pumpkin cream and curry ",
      //   description: "Pumpkin cream, spices, coconut milk, curry and spinach. ",
      //   price: 8,
      //   amount: 1,
      // },
      // {
      //   id: 26,
      //   name: "Mushroom tacos ",
      //   description:
      //     "2 soft flour tortilla tacos with mushrooms sautéed with garlic, sweet chile, onion, served with cabbage slaw topped with house cilantro mayonnaise, ground beans, guacamole, pico de gallo, jalapeño chile and chips. ",
      //   price: 9,
      //   amount: 1,
      // },
      // {
      //   id: 27,
      //   name: "Breaded chicken breasts ",
      //   description: "Crispy chicken pieces, served with french fries. ",
      //   price: 10,
      //   amount: 1,
      // },
      // {
      //   id: 28,
      //   name: "Buffalo wings ",
      //   description:
      //     "Delicious baked chicken wings with our special buffalo sauce recipe. ",
      //   price: 13,
      //   amount: 1,
      // },
      // {
      //   id: 29,
      //   name: "El Gran DIRIA Sandwich ",
      //   description:
      //     "Ciabatta bread with chicken, bacon, cheddar cheese, ham, guacamole, lettuce, tomato, honey mustard dressing and onion, served with french fries. ",
      //   price: 14,
      //   amount: 1,
      // },
      // {
      //   id: 30,
      //   name: "El Picoso Sandwich ",
      //   description:
      //     "Ciabatta bread with larded beef, with extra mayonnaise, chipotle chile mayonnaise and fresh cilantro, lettuce, tomato, Costa Rican cheese, served with french fries. ",
      //   price: 14,
      //   amount: 1,
      // },
      // {
      //   id: 31,
      //   name: "Burger DIRIA ",
      //   description:
      //     "8oz of beef, cheddar cheese, mushrooms, caramelized onions, lettuce, tomato, served with fried sweet potatoes. ",
      //   price: 14,
      //   amount: 1,
      // },
      // {
      //   id: 32,
      //   name: "Tamarindo Nachos ",
      //   description:
      //     "Crispy corn chips with guacamole, pico de gallo, spiced chicken, cheddar cheese, jalapenos, lettuce and sour cream. ",
      //   price: 10,
      //   amount: 1,
      // },
      // {
      //   id: 33,
      //   name: "Chicken Quesadilla ",
      //   description:
      //     "Flour tortilla stuffed with spiced chicken accompanied by pico de gallo, guacamole and beans with chips. ",
      //   price: 12,
      //   amount: 1,
      // },
      // {
      //   id: 34,
      //   name: "Country french fries ",
      //   description: "Potato wedges, fried and seasoned with cajun. ",
      //   price: 8,
      //   amount: 1,
      // },
    ],
  },
];

//export const restaurants = [featured, ...];
