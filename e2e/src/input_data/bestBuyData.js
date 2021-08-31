const timeStamp = new Date().toISOString();
module.exports = {
  productEndpoint: 'http://localhost:3030/products/',
  APIStatusCode201: '201',
  APIStatusCode200: '200',
  APIStatusCode404: '404',
  createProductPayload: {
      'name': 'Automated Product',
	    'type': 'Hard Good',
	    'upc': '12345676',
	    'price': 101,
	    'description': `This is an automated request for creating a new product on ${timeStamp}`,
	    'model': 'AT1243'
  },
  updateProductPayload: {
    'name': 'Automated Product',
    'type': 'Hard Good',
    'upc': '12345676',
    'price': 101,
    'description': `This is an updated request for existing product on ${timeStamp}`,
    'model': 'AT1243'
}
};
