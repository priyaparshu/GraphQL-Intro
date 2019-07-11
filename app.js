var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
// GraphQL schema
const port = process.env.PORT || 4000;

var schema = buildSchema(`
    type Query{
        pizza(id:Int!): Pizza
        pizzas(name:String): [Pizza]
        
        
        
},
type Pizza {
    id:Int,
    name:String,
    ingredients:[String]
}`)

var pizzaData = [
    {
        "id": 1,
        "name": "Capricciosa",
        "ingredients": [
            "tomato sauce",
            "mozzarella",
            "mushrooms",
            "ham",
            "olives"
        ]
    },
    {
        "id": 2,
        "name": "Quattro Formaggi",
        "ingredients": [
            "tomato sauce",
            "mozzarella",
            "parmesan cheese",
            "blue cheese",
            "goat cheese"
        ]
    },
    {
        "id": 3,
        "name": "Napoletana",
        "ingredients": [
            "tomato sauce",
            "anchovies",
            "olives",
            "capers"
        ]
    },
    {
        "id": 4,
        "name": "Margherita",
        "ingredients": [
            "tomato sauce",
            "mozzarella"
        ]
    }
]

var getPizza = function (args) {
    var id = args.id;
    return pizzaData.filter(piz => {
        return piz.id == id;
    })[0];
}

var getPizzas = function (args) {
    if (args.name) {
        var name = args.name;
        return pizzaData.filter(piz => piz.name === name);
    } else {
        return pizzaData;
    }
}

var getIngredients = function (args) {
    if (args.name) {
        var name = args.name;
        return pizzaData.map(piz => piz.ingredients);
    } else {
        return pizzaData.ingredients
    }
}

var resolver = {
    pizza: getPizza,
    pizzas: getPizzas,



}

var app = express();
app.use('/pizza', express_graphql({
    schema: schema,
    rootValue: resolver,
    graphiql: true,

}));
app.listen(4000, () => console.log(`Express GraphQL Server Now Running On localhost:${port}/pizza`));
