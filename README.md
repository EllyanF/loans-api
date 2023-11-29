# loans-api

API to check which types of loans a person has access to based on their information.

## Rules

<ul>
  <li>Grant the personal loan if the client's salary is equal to or less than R$3000.</li>
  <li>Grant the personal loan if the client's salary is between R$3000 and R$5000, if the client is under 30 years old and lives in São Paulo (SP).</li>
  <li>Grant the consignment loan if the client' salary is equal to or higher than R$5000</li>
  <li>Grant the loan with guarantee if the client's salary is equal to or less than R$3000.</li>
  <li>Grant the loan with guarantee if the client's salary is between R$3000 and R$5000, if the client is under 30 years old and resides in São Paulo (SP).</li>
</ul>

### Request Example

```json
{
  "age": 26,
  "cpf": "275.484.389-23",
  "name": "Vuxaywua Zukiagou",
  "income": 7000.00,
  "location": "SP"
}
```

### Example response

<pre>HTTP/1.1 200 Ok</pre>

```json
{
  "customer": "Vuxaywua Zukiagou",
  "loans": [
    {
      "type": "PERSONAL",
      "interest_rate": 4
    },
    {
      "type": "GUARANTEED",
      "interest_rate": 3
    },
    {
      "type": "CONSIGNMENT",
      "interest_rate": 2
    }
  ]
}
```

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
