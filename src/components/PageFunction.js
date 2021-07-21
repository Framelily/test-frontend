import React from 'react';
import Data from './data.json';

function PageFunction() {
  const shopData = []
  for (let i = 0; i < Data.length; i++) {
    if (Data[i].shop == 1) {
      for (let x = 0; x < Data[i].data.length; x++) {
        let product = {}
        product.id = Data[i].data[x].id
        product.name = Data[i].data[x].name
        product.price = Data[i].data[x].price
        product.amount = Data[i].data[x].order.amount
        shopData.push(product)
      }
    }
  }

  let shopOneData = []
  shopData.forEach((element,key) => {
    shopOneData[element.id] = {
      id:element.id,
      name:element.name,
      price:element.price,
      amount:element.amount,
    }
    if (key > 0) {
      if (shopOneData[element.id].id == element.id) {
        shopOneData[element.id].amount += element.amount
      }
    }
  });
  shopOneData = shopOneData.slice(1);
  
  return (
    <div>
      <div className="shopOne">
        <div><pre>{JSON.stringify(shopOneData, null, 2) }</pre></div>
      </div>
    </div>
  );
}

export default PageFunction;