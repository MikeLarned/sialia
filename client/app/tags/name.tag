<name>
  <span>{ given } { family }{ possesive }</span>

  <script>
    this.given = opts.name.given[0];
    this.family = opts.name.family;

    if (opts.possesive) {
      this.possesive = this.family.slice(-1) === 's' ? '\'' : '\'s';
    }
  </script>

</name>
