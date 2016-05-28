<name>
  <span>{ opts.name.given[0] } { opts.name.family }{ possesive }</span>

  <script>
    if (opts.possesive) {
      this.possesive = opts.name.family.slice(-1) === 's' ? '\'' : '\'s';
    }
  </script>
</name>
