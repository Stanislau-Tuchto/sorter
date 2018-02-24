class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction = (left, right) => left - right;
  }

  add(element) {
    this.arr.push(element);
    // console.log(this.arr+"===");
  }

  at(index) {
      return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    let arrBuf = [];
      // console.log("       indices         :"+indices+ "");
    indices.sort((left, right) => left - right);
    for(let i=0; i< indices.length; i++){
      arrBuf.push(this.arr[indices[i]]);
    }
    console.log("       arr             :"+this.arr+ "");
    console.log("  ==== arrBuf          :"+arrBuf+ "");
    arrBuf.sort(this.compareFunction);
    console.log("       arrBuf-S        :"+arrBuf+ "");
    console.log("       indices         :"+indices+ "");

    for(let i=0; i< indices.length; i++){
        this.arr[indices[i]] = arrBuf[i];
    }
    console.log("  ____ arr             :"+this.arr+ "");
    console.log(" ");
    indices = [];
  }

  setComparator(compareFunction) {
      this.compareFunction=compareFunction;
  }
}

module.exports = Sorter;