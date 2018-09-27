/// printPrototypeChain(window)
/// "Window -> WindowProperties -> EventTarget -> Object"
printPrototypeChain = object => {
  var proto = object.__proto__ || object.constructor.prototype;
  var result = '';

  while (proto) {
    result += ' -> ' + proto.constructor.name;
    proto = Object.getPrototypeOf(proto);
  }

  return result.slice(4);
};

/// findOnChain($0,'nodeName')
/// " -> HTMLAnchorElement -> HTMLElement -> Element -> Node(nodeName) -> EventTarget -> Object"
findOnPrototypeChain = (object, property) => {
  var proto = object.__proto__ || object.constructor.prototype;
  var result = object.hasOwnProperty(property) ? `(${property})` : '';

  while (proto) {
    result += ' -> ' + proto.constructor.name;
    result += proto.hasOwnProperty(property) ? `(${property})` : '';
    proto = Object.getPrototypeOf(proto);
  }

  return result;
};
