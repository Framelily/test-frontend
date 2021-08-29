import React from 'react';
import jsonData from './data.json';

function PageFunction() {

  const orders = jsonData
    .filter(({shop})=> shop === 1)
    .map(({data})=>
      data.map(({id,name,price,order})=>({
        id,
        name,
        price,
        amount : order.amount
      }))
    )

  const data = []
  for (const order of orders) {
    for (const food of order) {
      let find = data.find(({ id }) => food.id === id)
      if (find) {
        find.amount += food.amount
      } else {
        data.push(food)
      }
    }
  }
  
  return (
    <div>
      <div className="shopOne">
        <div><pre>{JSON.stringify(data, null, 2) }</pre></div>
      </div>
    </div>
  );
}

export default PageFunction;