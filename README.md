# Requirements

- Ganache
- NodeJS
- Truffle
  - `npm install -g truffle`
  - `Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned` (powershell)
  - `truffle version`

# Usage

- `truffle migrate --reset --network 'development'`
- `truffle console --network 'development'`

```truffle
HelloWorld.deployed().then(function(instance) {return instance})
HelloWorld.deployed().then(function(instance) {return instance.getHelloMessage()})
```
