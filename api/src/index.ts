import { faker } from '@faker-js/faker';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


const baseProducts = [
  {
      id: 1, name: 'T-shirt With Tape Details', description: faker.lorem.paragraph(), image_url:['https://live.staticflickr.com/65535/53649401563_0ba621dd68_m.jpg'], marca: "Zara", style: "formal", color:["blue","red","black"], size: ["small", "medium", "large", "x-large"], clothing:"T-shirt", quality: 4.5, price: 12000
  },
  {
      id: 2, name: 'Skinny Fit Jeans', description: faker.lorem.paragraph(), image_url:['https://live.staticflickr.com/65535/53649644690_366f8cab2d_m.jpg'], marca: "Zara", style: "casual", color:["blue","red","black"], size: ["small", "medium", "large", "x-large"], clothing:"jeans", quality: 3.5, price: 24000
  },
  {
      id: 3, name: 'Checkered Shirt', description: faker.lorem.paragraph(), image_url:['https://live.staticflickr.com/65535/53649529084_741e996ef4_m.jpg'], marca: "Zara", style: "casual", color:["blue","red","black"], size: ["small", "medium", "large", "x-large"], clothing:"shirt", quality: 4.5, price: 18000
  },
  {
      id: 4, name: 'Sleeve Striped T-shirt', description: faker.lorem.paragraph(), image_url:['https://live.staticflickr.com/65535/53649401663_f739ccaf76_m.jpg'], marca: "Zara", style: "casual", color:["blue","red","black"], size: ["small", "medium", "large", "x-large"], clothing:"T-shirt", quality: 4.5, price: 13000
  },
  {
      id: 5, name: 'Vertical Striped Shirt', description: faker.lorem.paragraph(), image_url:['https://live.staticflickr.com/65535/53649529079_e5f0a81207_m.jpg'], marca: "Zara", style: "casual", color:["blue","red","black"], size: ["small", "medium", "large", "x-large"], clothing:"shirt", quality: 5.0, price: 21200
  },
  {
      id: 6, name: 'Courage Graphic T-shirt', description: faker.lorem.paragraph(), image_url:['https://live.staticflickr.com/65535/53649644700_162d702cd2_m.jpg'], marca: "Zara", style: "casual", color:["blue","red","black"], size: ["small", "medium", "large", "x-large"], clothing:"T-shirt", quality: 4.0, price: 14500
  },
  {
      id: 7,name: 'Loose Fit Bermuda Shorts', description: faker.lorem.paragraph(), image_url:['https://live.staticflickr.com/65535/53649647615_677753d70b_m.jpg'], marca: "Zara", style: "casual", color:["blue","red","black"], size: ["small", "medium", "large", "x-large"], clothing:"shorts", quality: 3.0, price: 8000
  },
  {
      id: 8, name: 'Faded Skinny Jeans', description: faker.lorem.paragraph(), image_url:['https://live.staticflickr.com/65535/53649183521_a0bfd9b2bb_m.jpg'], marca: "Zara", style: "casual", color:["blue","red","black"], size: ["small", "medium", "large", "x-large"], clothing:"jeans", quality: 4.5, price: 21000
  },
  {
      id: 9, name: 'Polo with Contrast Trims', description: faker.lorem.paragraph(), image_url:['https://live.staticflickr.com/65535/53649644655_61d4cde20d_m.jpg'], marca: "Zara", style: "casual", color:["blue","red","black"], size: ["small", "medium", "large", "x-large"], clothing:"shirt", quality: 4.0, price: 21200
  },
  {
      id: 10, name: 'Gradient Graphic T-shirt', description: faker.lorem.paragraph(), image_url:['https://live.staticflickr.com/65535/53649193646_840be78a15_m.jpg'], marca: "Zara", style: "casual", color:["blue","red","black"], size: ["small", "medium", "large", "x-large"], clothing:"T-shirt", quality: 3.5, price: 14500
  },
  {
      id: 11, name: 'Polo with Tipping Details', description: faker.lorem.paragraph(), image_url:['https://live.staticflickr.com/65535/53649529149_e3b5258cd1_m.jpg'], marca: "Zara", style: "casual", color:["blue","red","black"], size: ["small", "medium", "large", "x-large"], clothing:"shirt", quality: 4.5, price: 18000
  },
  {
      id: 12, name: 'Black Striped T-shirt', description: faker.lorem.paragraph(), image_url:['https://live.staticflickr.com/65535/53648308672_c183ed85b3_m.jpg'], marca: "Zara", style: "casual", color:["blue","red","black"], size: ["small", "medium", "large", "x-large"], clothing:"T-shirt", quality: 5.0, price: 12000
  },
  {
      id: 13, name: 'One Life Graphic T-shirt', description: faker.lorem.paragraph(), image_url:['https://live.staticflickr.com/65535/53649406963_9956181b00_m.jpg', 'https://live.staticflickr.com/65535/53649655190_de3bd14b73_m.jpg', 'https://live.staticflickr.com/65535/53649529129_340ab9979d_m.jpg'], marca: "Zara", style: "casual", color:["blue","red","black"], size: ["small", "medium", "large", "x-large"], clothing:"T-shirt", quality: 4.5, price: 26000
  },
]


const typeDefs = `#graphql

  type Product {
    id: ID!
    name: String!
    description: String!
    image_url: [String]!
    marca: String!
    style: String!
    color: [String]!
    size: [String]!
    clothing: String!
    quality: Float!
    price: Int!
  }

  type Query {
    products: [Product]
    lastFourProducts: [Product]
    productsDescendingID: [Product]
    productsStyle(style: String!): [Product]
  }
`;


const resolvers = {
    Query: {
      products: () => baseProducts,
      productsStyle: (parent, { style }) => baseProducts.filter(product => product.style === style),
      lastFourProducts: () => baseProducts.slice(-4),
      productsDescendingID: () => baseProducts.slice().reverse(),
    },
};


const server = new ApolloServer({
    typeDefs,
    resolvers,
});
  
  
const { url } = await startStandaloneServer(server, {
listen: { port: 4000 },
});
  
console.log(`🚀  Server ready at: ${url}`);