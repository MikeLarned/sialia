import _ from 'lodash';
import $ from 'jquery';

export function getElementIndex(node: HTMLElement): number {
  let children = _.filter([].slice.call(node.parentNode.childNodes), { nodeType: 1 });
  return Array.prototype.indexOf.call(children, node);
}

export function bootstrapize(html: string): any {
  var $html = $('<div />');

  $html.html(html);

  var $all = $html.find('*').removeAttr('width border xmlns');

  $all.filter('table')
    .addClass('table table-bordered table-striped');

  return $html.html();
}
