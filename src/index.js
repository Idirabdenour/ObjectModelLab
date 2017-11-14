
export const version = () => "1.0.0";

/*Sensor*/ 

export const typeSensor = { 'Temperature':'Temperature',
                            'Door':'Door'
                            };
 export class Sensor {

  constructor(object) {
    this._id = object.id;
    this._name = object.name;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }  
 }

export class Temperature extends Sensor{
  constructor(object){
    super(object);
    this._type ='Temperature';
    this._SensorData = new TimeSeries(object.SensorData);
  }
  get type(){
    return this._type;
  }
  get dataSensor(){
    return this._SensorData;
  }
  DTemperature(){
    return this._SensorData.MesureDate();
  }
  temperature(){
    return 'La derniere mesure ' + this._SensorData.MesureDate() + '°C at ' + this._SensorData.MesureDate();
  }
  toString() {
    return ( 'id: ' + this._id + ' type: ' + this._type + ' name: ' + this._name);
  }
}

 
export class DOOR extends Sensor{
    constructor(object){
        super(object);
      this._type='Door';
      this._dataSensor= new Datum(object.dataSensor);
    }
    get type(){
        return this._type;
    }
    get dataSensor(){
        return this._dataSensor;
    }
    doorDtate(){
      return this.dataSensor.value;
    }
}



export class Data{
    constructor(data){
        this._data=data;
    }
    get data(){
        return this._data;
    }
}

export class TimeSeries extends Data {
	constructor(data){
		super(data);
    this._values= data.values;
    this._labels= data.labels;

	}

	get values(){
		return this._values;
	}
	
  get labels(){
		return this._labels;
	}
  
  numberOfValues(){
    return this.values.length;
  }
  MesureDate(){
    return this._labels[this.labels.length-1];
  }
  lastMesure(){
    return this._values[this._values.length-1];
  }

		
}
export class Datum extends Data {
	constructor(data){
		super(data);
    this._value= data.value;
    }
	get value(){
		return this._value;
	}
	
}
