
interface RiotTag {
  opts: any;
  parent: RiotTag;
  root: RiotTag;
  tags: RiotTag[];
}

interface RiotRouteStatic extends RioteRoute {
  create(): RioteRoute;
  start(): void;
  start(autoExec: boolean): void;
  exec(): void;
  query(): any;
  base(base: string): void;
  parser(parser: (path: string) => any[], secondParser: (path: string, filter: string) => any[]): void;
}

interface RioteRoute {
  (callback: (collection: string, id: string, action: string) => void): void;
  (filter: string, callback: (collection: string, id: string, action: string) => void): void;
  (to: string, title?: string, shouldReplace?: boolean): void;
  stop(): void;
}

interface Riot {
  mount(customTagSelector: string, opts?: any): RiotTag[];
  mount(selector: string, tagName: string, opts?: any): RiotTag[];
  mount(domNode: HTMLElement, tagName: string, opts?: any): RiotTag[];

  render(tagName: string): void;

  mixin(mixinName: string, mixinObject: any): void;
  mixin(mixinObject: any): void;

  tag(tagName: string, html: string, css: string, attrs: string, constructor: (opts: any) => void): void;

  compile(callback: () => void): void;
  compile(url: string, callback: () => void): void;
  compile(tag: string): string;
  compile(tag: string, execute: boolean): string;

  observable(el: HTMLElement): any;

  route: RiotRouteStatic;
}

declare module "riot" {
    export = riot;
}

declare var riot: Riot;
