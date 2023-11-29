# loans-api

API to determine which loan types a person has access to.

# Endpoints

<h3>Customer Loans</h3>
<ul>
  <li>POST <code>{host}/customer-loans</code></li>
  <li>Request body parameters: 
    <code>age: number</code>,
    <code>cpf: string</code>,
    <code>name: string</code>,
    <code>income: number</code>,
    <code>location: string</code>.
  </li>
  <li>Responses</li>
  <ul>
    <li>200 OK: Returns json with the available loans for that person, example:</li>
    <pre>
{
    "customer": "Ellyan Fernandes",
    "loans": [{
            "type": "PERSONAL",
            "interest_rate": 4
        },
        {
            "type": "GUARANTEED",
            "interest_rate": 3
        }
    ]
}</pre>	  
    <li>400 Bad Request if body parameters fails validation</li>
  </ul>
</ul>

## How to Run
<ol>
  <li>Install dependencies using: <pre>npm install</pre></li>
  <li>Use the following command to build the <code>dist</code> folder: <pre>npm run build</pre></li>
  <li>Start the server using the following command: <pre>npm run start:dev</pre></li>
</ol>
The application will be available by default at <code>http://localhost:3000/customer-loans</code>
