var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
  deliver: function () {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var data = {
      name: `${firstName + lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '47999999999',
      address: {
        postalcode: '88351250',
        street: 'Rua Alois Moritz',
        number: '8493',
        details: 'apto 225',
        district: 'São Luiz',
        city_state: 'Brusque/SC'
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }

    return data
  }
}
