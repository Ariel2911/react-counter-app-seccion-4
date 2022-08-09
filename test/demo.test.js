describe('Primer prueba', () => {

  test('Esta es una prueba demo', () => {
    //1-Inicializaciòn
    const message1 = 'Hola Mundo   ';
  
    //2-Estimulo
    const message2 = message1.trim();
  
    //3-Obserbar el comportamiento...
    expect( message1 ).toBe( message2 );
  })
  
})
