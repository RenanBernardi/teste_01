const test = require('tape')
const  func = require('./teste')

/*test('Aplicar desconto padrão', (t) => {
    t.assert(func. aplicardesconto(10,5) === 5, "Desconto  true 01")
    t.end()
})

test('Aplicar desconto padrão', (t) => {
    t.assert(func. aplicardesconto(11,5) === 6, "Desconto true 02")
    t.end()
})

test('Aplicar desconto padrão', (t) => {
    t.assert(func. aplicardesconto(20,5) === 15, "Desconto true 03")
    t.end()
})

test('Aplicar desconto padrão', (t) => {
    t.assert(func. aplicardesconto(100,50) === 50, "Desconto true 04")
    t.end()
})

test('Aplicar desconto padrão', (t) => {
    t.assert(func. aplicardesconto(1000,500) === 500, "Desconto true 05")
    t.end()
})*/

test('Aplicar desconto padrão', (t) => {
    t.assert(func. validanumero(1000) === true, "validação 01")
    t.end()
})
test('Aplicar desconto padrão', (t) => {
    t.assert(func. validanumero(300) === true, "validação 02")
    t.end()
})