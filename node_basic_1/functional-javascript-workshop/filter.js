// en el messages hay un key que tiene el nombre de message.

module.exports = function getShortMessages(messages) {
  return messages.filter(function(item) {
    return item.message.length < 50
  }).map(function(item) {
    console.log(item);
    return item.message
  })
}
