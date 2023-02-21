// [60,10,45,60,1500] -> [60,40,45,60,1000]

// [60,10,45,60,1500],20,50	->[50,20,45,50,50]
const Filter = require('./filter')

describe(Filter, () => {
  it("returns an empty array given no paramaters", () => {
    const filter = new Filter();
    expect(filter.Update()).toEqual([])
  })
  it("It has an upper and lower limit", () => {
    const filter = new Filter(40, 1000)
    expect(filter.getLowerLimit()).toBe(40)
    expect(filter.getUpperLimit()).toBe(1000)
  })
  it("It has an array of frequencies", () => {
    const frequencies = [60,10,45,60,1500];
    const filter = new Filter(40, 1000, frequencies)
    expect(filter.getFrequencies()).toEqual(frequencies)
  })
  it("returns an altered array when the frequencies are not within the lower and upper limit", () => {
    const frequencies = [60,40,45,60,1000];
    const filter = new Filter(40, 1000, frequencies)
    expect(filter.Update()).toEqual([60,40,45,60,1000])
  })
})