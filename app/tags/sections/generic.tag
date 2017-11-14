<generic>
  <panel section={ opts.section } data={ opts.data }>
    <script>
      console.log(opts.data.text);
    </script>
    <raw content="{ opts.data.text }" if={ opts.data.text }/>
    <empty if={ !opts.data.text } />
  </panel>
</generic>
