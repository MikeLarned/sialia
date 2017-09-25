<name>
  <span>{ opts.name.first } { opts.name.last }{ possesive }</span>

  <script>
    if (opts.possesive) {
      this.possesive = opts.name.Last.slice(-1) === 's' ? '\'' : '\'s';
    }
  </script>
</name>
