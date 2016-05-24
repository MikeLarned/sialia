import _ from 'lodash';

export function getElementIndex(node: HTMLElement): number {
  let children = _.filter([].slice.call(node.parentNode.childNodes), { nodeType: 1 });
  return Array.prototype.indexOf.call(children, node);
}
