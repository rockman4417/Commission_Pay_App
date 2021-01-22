import React, { useState, useEffect } from 'react'
import './App.css';

import NavBar from './Components/NavBar/NavBar'
import Main from './Components/Main/Main.js'
import InvoiceCard from './Components/Invoice/InvoiceCard'

const data = require('./dummy-data-invoices.json');
console.log(data)


function App() {

const [invoiceArray, setInvoiceArray] = useState([])

useEffect(() => {
  setInvoiceArray(data.invoices)
  }, [])


  return (
    <div className="App">
      {console.log("state", invoiceArray)}
      <header>
        <NavBar/>
      </header>

      
      <main>
        
      {invoiceArray.map((invoice, index) => {
          return(
              
              <InvoiceCard 
                           key={index} 
                           client_name={invoice.client_name} 
                           date_created={invoice.date_created}
                           total_amount={invoice.total_amount}
                           type={invoice.product_or_job}
                />
                
          )
        })}
        <Main>
        

        </Main>
      </main>
    </div>
  );
}

export default App;
