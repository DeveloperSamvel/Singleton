class SingetonService {
  constructor() {
    if (SingetonService.instance) {
      return SingetonService.instance;
    }
    SingetonService.instance = this;
  }

  async #fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getData(url, key) {
    const data = await this.#fetchData(url)
    return data.groupBy(key);
  }
}

function groupBy (key) {
  return this.reduce((result, obj) => {
    console.log(result)
  }, {});
};

Array.prototype.groupBy = groupBy;

const serviceData = new SingetonService();
serviceData.getData('https://jsonplaceholder.typicode.com/posts', 'userId')
  .then(data => console.log(data));