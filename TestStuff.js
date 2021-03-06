describe('Test Suite', function() 
{
 
it('My Test case',function() {
 
//Check boxes
cy.visit("url")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window:alert
cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
 
cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
 
cy.get('#opentab').invoke('removeAttr','target').click()
 
cy.url().should('include','url')
 
cy.go('back')
 
 
 