const box = document.querySelector('.box');
const h2 = document.querySelector('h2');
const input = box.querySelectorAll('input[name="biriyani"]');

input.forEach(item=>{
    item.onchange =()=>{
        let selectedItem;
        selectedItem = box.querySelectorAll('input[name="biriyani"]:checked');
        let list = [];
        let total = 0;
        selectedItem.forEach(khabar =>{
            list.push(khabar.value);
            total += Number(khabar.getAttribute('price'));
        
        });
        if(total == 0)
            {   
                h2.innerHTML = `Please select any item to process your order`
            }
            else{
    
                h2.innerHTML = `your order ${list} is Processing. Please pay this ${total} taka in cash and wait some minutes `;
            }
        console.log(list);
    }
});