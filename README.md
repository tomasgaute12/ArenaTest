
# ARENA TEST



## Installation

Install with npm

```bash
  npm install 
```


## Run Locally


Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Enpoints

#### Get all transactions

```http
  POST /api/wallets/getAllTransactionsAddress
```

#### Get last transaction

```http
  POST /api/wallets/getLastTransactionAddress
```

#### Compare wallet transactions

```http
  POST /api/wallets/compareTransactionsAddress
```

#### Example body for getLastTransactionAddress /  getAllTransactionsAddress:

  "contractAddress": "0xdAC17F958D2ee523a2206206994597C13D831ec7", 

  "address": "0x465545452fD5D5599F0A3901e8dF518c432125Ca"


#### Example body compareTransactionsAddress:
 
  "contractAddress": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  
  "address": [ "0x465545452fD5D5599F0A3901e8dF518c432125Ca",
      "0x2759bc7b8f9f2b47eeeffb2f5751e0cff3ff1ad8",
      "0xc4829E5f4a125719dDE4A4CcAEe363c5c38A65dc"]
