// [60,10,45,60,1500] -> [60,40,45,60,1000]

// [60,10,45,60,1500],20,50	->[50,20,45,50,50]

class Filter {
  constructor(lowerLimit, upperLimit, frequencies = []){
    this.lowerLimit = lowerLimit
    this.upperLimit = upperLimit
    this.frequencies = frequencies
  }

 

  Update = () => {
    if (this.frequencies.length === 0){
      return []

    }else{
      const newFrequencies = []
      this.frequencies.forEach(element => {
        //if the element is within the bounds
        if (element >= this.getLowerLimit() && element <= this.getUpperLimit()){
          newFrequencies.push(element)
        }
        else{

        }
        console.log("new freq:", newFrequencies)
      });
      return newFrequencies;
    }
    

  }

  getLowerLimit = () => {
    return this.lowerLimit
  }

  getUpperLimit = () => {
    return this.upperLimit
  }

  getFrequencies = () => {
    return this.frequencies;
  }


}

module.exports = Filter;