# GraphQL-Intro

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
