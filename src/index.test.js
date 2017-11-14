
import { version } from ".";

import { typeSensor } from '.';

import  { data }  from '../resources/sensors_data';

import { Sensor, DOOR, Temperature} from'.';

import { Data, TimeSeries, Datum} from'.';

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

describe('Sensor construction tests', () => {
  let s = new Sensor({'id':10,'name':'test'});

  test('List sensor type', () => {
    expect(typeSensor.Temperature).toBe('Temperature');
  });
  test('construction "name"', () => {
      expect(s.name ).toBe('test');
    });
  test('construction "id"', () => {
      expect(s.id ).toBe(10);
    });

});

  describe('Temperature typeSensor construction  tests', () => {
    let s = new Temperature({'id':12, 'name':'test', 'SensorData':{"values": [23,23,22,21,23,23,23,25,25], "labels": ["2016-10-19T08:00:00.000Z", "2016-10-19T09:00:00.000Z"]}});

    test('Temperature sensor construction "name"', () => {
      expect(s.name ).toBe('test');
    });
    test('Temperature sensor construction "id"', () => {
      expect(s.id ).toBe(12);
    });
    test('Temperature sensor construction "type', () => {
      expect(s.type ).toBe('Temperature');
    });
    test('Temperature sensor construction "data"', () => {
      expect(s.dataSensor.data ).toEqual({"values": [23,23,22,21,23,23,23,25,25], "labels": ["2016-10-19T08:00:00.000Z", "2016-10-19T09:00:00.000Z"]});
    });
    test('Temperature sensor construction "data.values"', () => {
      expect(s.dataSensor.values ).toEqual([23,23,22,21,23,23,23,25,25]);
    });
    test('Temperature sensor construction "data.labels"', () => {
      expect(s.dataSensor.labels ).toEqual(["2016-10-19T08:00:00.000Z", "2016-10-19T09:00:00.000Z"]);
    });
    test('Temperature sensor construction toString', () => {
      expect(s.toString() ).toEqual('id: 12 type: Temperature name: test');
    });
   
  });


});