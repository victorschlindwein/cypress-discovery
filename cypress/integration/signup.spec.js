import signupFactory from '../factories/SignupFactory'
import signup from '../pages/SignupPage'

describe('Signup', () => {
  it('Should be able to register new deliver', function () {
    var deliver = signupFactory.deliver()

    signup.go()
    signup.fillForm(deliver)
    signup.submit()

    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expectedMessage)
  })

  it('Should not be able to use a invalid CPF', function () {
    var deliver = signupFactory.deliver()

    deliver.cpf = '000000141AB'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()

    const expectedMessage = 'Oops! CPF inválido'
    signup.alertMessageShouldBe(expectedMessage)
  })

  it('Should not be able to use a invalid email format', function () {
    var deliver = signupFactory.deliver()

    deliver.email = 'carlos.com.br'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()

    const expectedMessage = 'Oops! Email com formato inválido.'
    signup.alertMessageShouldBe(expectedMessage)
  })

  context('Required fields', function () {
    const messages = [
      { field: 'name', output: 'É necessário informar o nome' },
      { field: 'cpf', output: 'É necessário informar o CPF' },
      { field: 'email', output: 'É necessário informar o email' },
      { field: 'cep', output: 'É necessário informar o CEP' },
      { field: 'number', output: 'É necessário informar o número do endereço' },
      { field: 'delivery_method', output: 'Selecione o método de entrega' },
      { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
    ]

    before(function () {
      signup.go()
      signup.submit()
    })

    messages.forEach(function (msg) {
      it(`${msg.field} is required`, function () {
        signup.alertMessageShouldBe(msg.output)
      })
    })
  })
})
