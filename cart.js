let index = 1;

window.onload = function() {
    const table = document.querySelector('#tableData')
    const btn1 = document.querySelector('#add1');
    const btn2 = document.querySelector('#add2');
    const btn3 = document.querySelector('#add3');
    const coffe = document.querySelector('#coffe1');
    const coffe2 = document.querySelector('#coffe2');
    const coffe3 = document.querySelector('#coffe3');
    const inputPrice = document.querySelector('#price1');
    const inputPrice2 = document.querySelector('#price2');
    const inputPrice3 = document.querySelector('#price3'); 

       function addcoffee() {
          const row = document.createElement('tr');
          const col1 = document.createElement('td');
          const col2 = document.createElement('td');
          const col3 = document.createElement('td');
          const col4 = document.createElement('td');
          const col5 = document.createElement('td');
          const deleteRow = document.createElement('button');
         deleteRow.innerHTML = 'Delete'
         deleteRow.addEventListener('click', function() {
             row.remove()
         })
         col1.innerHTML = index++;
         col2.innerHTML = coffe.innerText;  
         col3.innerHTML = inputPrice.innerText;
         const number = ((Math.random() * 10) + 1);
         col4.innerHTML = number.toFixed();
         col5.appendChild(deleteRow)
          row.appendChild(col1);
          row.appendChild(col2);
          row.appendChild(col3);
          row.appendChild(col4);
          row.appendChild(col5);
          table.appendChild(row);  
       }
       btn1.addEventListener('click', function() {
           addcoffee();
       })
    
       function addcoffee1() {
        const row = document.createElement('tr');
        const col1 = document.createElement('td');
        const col2 = document.createElement('td');
        const col3 = document.createElement('td');
        const col4 = document.createElement('td');
        const col5 = document.createElement('td');
        const deleteRow = document.createElement('button');
       deleteRow.innerHTML = 'Delete'
       deleteRow.addEventListener('click', function() {
           row.remove()
       })
       col1.innerHTML = index++;
       col2.innerHTML = coffe2.innerText;  
       col3.innerHTML = inputPrice2.innerText;
       const number = ((Math.random() * 10) + 1);
       col4.innerHTML = number.toFixed();
       col5.appendChild(deleteRow)
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        table.appendChild(row);  
     }
     btn2.addEventListener('click', function() {
         addcoffee1();
     })

     function addcoffee3() {
        const row = document.createElement('tr');
        const col1 = document.createElement('td');
        const col2 = document.createElement('td');
        const col3 = document.createElement('td');
        const col4 = document.createElement('td');
        const col5 = document.createElement('td');
        const deleteRow = document.createElement('button');
       deleteRow.innerHTML = 'Delete'
       deleteRow.addEventListener('click', function() {
           row.remove()
       })
       col1.innerHTML = index++;
       col2.innerHTML = coffe3.innerText;  
       col3.innerHTML = inputPrice3.innerText;
       const number = ((Math.random() * 10) + 1);
       col4.innerHTML = number.toFixed();
       col5.appendChild(deleteRow)
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        row.appendChild(col5);
        table.appendChild(row);  
     }
     btn3.addEventListener('click', function() {
         addcoffee3();
     })
  
       
    }
  