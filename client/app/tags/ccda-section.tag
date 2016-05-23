import * as _ from 'lodash';

<ccda-section>
  riot.mount(this.root, opts.current.tagName, {
    section: _.pick(opts.current, ['key', 'display', 'tagName', 'icon']),
    data: opts.sectiondata
  });
</ccda-section>
