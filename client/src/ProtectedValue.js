class ProtectedValue {
    constructor() {
      this.protected = true;
    }

    ChangeValue(value){
        this.protected=value;
    }
}
  
export default new ProtectedValue();
  