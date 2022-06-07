const bill = (products, tax) =>
{
    let total = 0;
    for(let i = 0; i < products.length; i++)   
        {
            total += products[i] + products[i] * tax;
        }
        
        return total;
};

console.log(bill([2, 4, 6, 8, 10], 0.2));