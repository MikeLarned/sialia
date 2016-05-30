<generic>
  <panel section={ opts.section } data={ opts.data } entries={ opts.data.entries }>
    <raw content="{ opts.data.text }" if={ opts.data.text }/>
    <empty if={ !opts.data.text } />
  </panel>
</generic>
