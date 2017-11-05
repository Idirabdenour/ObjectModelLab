
import { version } from ".";
import  { data }  from '../resources/sensors_data';

describe('Sensor model tests', () => {
  describe('Dummy tests', () => {
    test('data is loaded with 3 elements',() => {
      expect(data.length).toBe(3);
    });
    test('version number from the model',() => {
      expect(version()).toBe('1.0.0');
    });
  });
  /* TODO: Écrire ici la suite de tests pour le modèle objet.*/
  //
});
