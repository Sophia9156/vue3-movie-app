exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Sophia',
      age: 85,
      email: 'suhyun9156@gmail.com'
    })
  }
}