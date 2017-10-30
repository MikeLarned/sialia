<generic>
  <script>
    console.log("Generic: ");
    console.log(opts);
  </script>
  <panel section={ opts.section } data={ opts.data } data={ opts.data }>
    <raw content="{ opts.data.text }" if={ opts.data.text }/>
    <empty if={ !opts.data.text } />
  </panel>
</generic>
