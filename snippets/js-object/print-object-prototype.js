printPrototypeChain = object => {
  var proto = object.constructor.prototype;
  var result = '';

  while (proto) {
    result += ' -> ' + proto.constructor.name;
    proto = Object.getPrototypeOf(proto);
  }

  return result;
};
