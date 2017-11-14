
export const version = () => "1.0.0";

/* TODO : Créer le modèle objet ici */ 
 export class Sensor {

  constructor(id, name, type, data) {
    this._id = id;
    this._name = name;
    this._type = type;
    this._data = data;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get data() {
    return this._data;
  }
  get type() {
    return this._type;
  }
 }
 
 
export class DOOR extends Sensor{
    constructor(id,nom,type,data){
        super(id,nom,type,data);
     
}
}



export class Data{
    constructor(values,labels){
        this._values=values;
        this._labels=labels;
    }
    get values(){
        return this._values;
    }
   
    get labels(){
        return this._labels;
    }
    nbrValues(){
        return this._values.length;
    }

}

class TimeSeries extends Data {
	constructor(id,name,values,labels){
		super(id, name);
    	this._values = values || [];
    	this._labels = labels || [];
	}
	get values(){
		return this._values || [];
	}
	get labels(){
		return this._labels || [];
	}
		
}
class Datum extends Data {
	constructor(id,name,value){
		super(id, name);
    	this._value = value;
    }
	get value(){
		return this._value || 0;
	}
	
}
