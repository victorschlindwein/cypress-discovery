import signup from '../pages/SignupPage'

describe('Signup', () => {
  beforeEach(function () {
    cy.fixture('deliver').then(d => {
      this.deliver = d
    })
  })

  it('Should be able to register new deliver', function () {
    signup.go()
    signup.fillForm(this.deliver.signup)
    signup.submit()

    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expectedMessage)
  })

  it('Should not be able to use a invalid CPF', function () {
    signup.go()
    signup.fillForm(this.deliver.cpf_inv)
    signup.submit()

    const expectedMessage = 'Oops! CPF inválido'
    signup.alertMessaShouldBe(expectedMessage)
  })

  it('Should not be able to use a invalid email format', function () {
    signup.go()
    signup.fillForm(this.deliver.email_inv)
    signup.submit()

    const expectedMessage = 'Oops! Email com formato inválido.'
    signup.alertMessaShouldBe(expectedMessage)
  })
})
