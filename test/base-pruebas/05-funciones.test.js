import { getUser, getUsuarioActivo } from "../../src/base-pruebas/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

  test('getUser debe retornar un objeto', () => {

    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    expect( testUser ).toStrictEqual( user );

  });

  test('getUsuarioActivo debe devolver un objeto', () => {
    const name = 'El_Papi1502';

    const testUser = {
      uid: 'ABC567',
      username: name,
    };

    const user = getUsuarioActivo(name);

    expect( testUser ).toEqual(user);

  });

});