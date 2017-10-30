<immunization-declines>
  console.log("Declined Immunizations: ", opts.data);
  <panel section={ opts.section } data={ opts.data }>
    <empty if={ !opts.data.entries.length } />
  </panel>
</immunization-declines>
