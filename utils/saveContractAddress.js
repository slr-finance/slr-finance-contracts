const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../contractsAddresses.json')

exports.saveContractAddress = function saveContractAddress(name, address) {
  const addresses = JSON.parse(fs.readFileSync(filePath).toString())

  addresses[name] = address

  fs.writeFileSync(filePath, JSON.stringify(addresses, null, 2))
}

exports.getContractAddress = function saveContractAddress(name) {
  const addresses = JSON.parse(fs.readFileSync(filePath).toString())

  return addresses[name]
}