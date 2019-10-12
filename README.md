# GraphQL-Intro

Graphql is a query language, REST Api is an architectural concept.
Each query you send to your API gets you exactly what you want. What I mean is that you’ll receive nothing more and nothing less on the other end than exactly what you need. The data required is determined client side instead of letting servers control it, helping to build apps that are way faster and more stable.

Query: A query is what a client sends to a server in order to specify the necessary data. 

Schema: The blueprint for communication between client and server. It specifies what queries clients can make, the types of data retrievable, and relationships between types.

Resolvers: A function applied to every field. It specifies how that field is connected to the backend and fetches data for that field from a database.

In this example the application will read data from code itself. we will create two endpoints. getpizzas will take Id and returns its name and ingredients. The second endpoint will take a name and returns its id and ingredients.

q1:
query getpizzas($pid:Int! ){
  pizza(id:$pid){
   	name
    ingredients
  }
  
}
----------------------------------------
  Query Variable
  {
  "pid": 1
}




Q:2
query gettwopizzas($pid1:Int!,$pid2:Int! ){
  pizza1: pizza(id:$pid1){
   	...restoffields
  },
  pizza2: pizza(id:$pid2){
   	...restoffields
  }
}
  
  fragment restoffields on Pizza{
    name
    ingredients
  }
  ----------------------------------------
  Query Variable
  {
  "pid1": 1,
  "pid2": 2
}
