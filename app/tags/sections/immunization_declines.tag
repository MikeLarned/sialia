<immunization-declines>
  <script>
  console.log("Declined Immunizations: ");
  console.log(opts.data);
  </script>
  <panel section={ opts.section } data={ opts.data }>
    <empty if={ !opts.data.entries.length } />
  </panel>
</immunization-declines>
