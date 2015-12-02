const _list = [
  {name: 'kb', pass: '12345'},
  {name: 'md', pass: '12345'},
]

module.exports = {
  contains: user => _list.some((u) => u.name === user.name && u.pass === user.pass)
}
