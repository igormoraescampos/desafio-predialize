const data = require("../clients.mock");

module.exports.load = (app) => {

  // get all clients
  app.get('/', (req, res) => {
    res.send(data);
  });

  // get client by id
  app.get('/:id', (req, res) => {
    const id = +req.params.id;
    const clientData = data.filter((item) => {
      return item._id == id
    });
    res.send(clientData);
  });

  // get all clients with total
  app.get('/clients/data', (req, res) => {
    const dataClient = [];
    for (let i = 0; i < data.length; i++) {
      dataClient.push(
        {
          _id: data[i]._id,
          image_src: data[i].image_src,
          name: data[i].name,
          enterprises: data[i].enterprises.length,
          realties: data[i].enterprises.reduce((a, b) => a + Number(b.realties), 0)
        }
      )
    }
    res.send(dataClient);
  });

  // get all clients with total
  app.get('/enterprises/data', (req, res) => {
    const dataEnterprise = [];
    for (let i = 0; i < data.length; i++) {
      for (let z = 0; z < data[i].enterprises.length; z++) {
        dataEnterprise.push(
          {
            _id: data[i].enterprises[z]._id ? data[i].enterprises[z]._id : 0,
            name: data[i].enterprises[z].name ? data[i].enterprises[z].name : '',
            image_src: data[i].enterprises[z].image_src ? data[i].enterprises[z].image_src : '',
            realties: data[i].enterprises[z].realties ? data[i].enterprises[z].realties : 0,
            client: data[i].name ? data[i].name : '',
          }
        )
      }
    }
    res.send(dataEnterprise);
  });
};
