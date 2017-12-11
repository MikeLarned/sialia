<generic>
  <panel section={ opts.section } data={ opts.data }>
    <raw content="{ opts.data.text }" if={ opts.data.text }/>
    <empty if={ !opts.data.text } />
  </panel>
</generic>
