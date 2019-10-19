# GraphQL-Intro

Difference between Graphql and REST API:
Graphql is a query language, REST Api is an architectural concept.
In Graphql, each query we send to your API gets back exactly what we want. What I mean is that you’ll receive nothing more and nothing less. The data required is determined by the client side instead of letting servers control it. This helps us to build apps that are way faster and more stable.

Key Concepts:
Query: A query is what a client sends to a server in order to specify the necessary data. 

Schema: The blueprint for communication between client and server. It specifies what queries clients can make, the types of data retrievable, and relationships between types.

Resolvers: A function applied to every field. It specifies how that field is connected to the backend and fetches data for that field from a database.

In this Project, the application will read data from code itself. I created two endpoints. 
getpizzas: will take Id and returns its name and ingredients. 
take a name and returns its id and ingredients.

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
