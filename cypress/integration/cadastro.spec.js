import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {
  it('Deve permitir tornar-se entregador', () => {
    var deliver = {
      name: 'vitor luiz rovaris',
      cpf: '00000014141',
      email: 'vitorluizfutebol@hotmail.com',
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

    var signup = new SignupPage()

    signup.go()
    signup.fillForm(deliver)
    signup.submit()

    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expectedMessage)
  })

  it('CPF incorreto', () => {
    var deliver = {
      name: 'vitor luiz rovaris',
      cpf: '000000141AB',
      email: 'vitorluizfutebol@hotmail.com',
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

    var signup = new SignupPage()

    signup.go()
    signup.fillForm(deliver)
    signup.submit()

    const expectedMessage = 'Oops! CPF inválido'
    signup.alertMessaShouldBe(expectedMessage)
  })
})
