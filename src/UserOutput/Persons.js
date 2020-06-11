import React from 'react';
import UserOutput from './UserOutput';

const persons = (props) => props.customers.map((customer, customerKey) => 
    {return <UserOutput key={customer.id} 
                  change={(event) => props.change(event, customer.id)} 
                  click={() => props.delete(customerKey)} 
                  cname={customer.name} 
                  cwallet={customer.wallet}/>
    
     } );

 export default persons;