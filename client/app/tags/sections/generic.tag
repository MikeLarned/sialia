<generic>
  <panel section={ opts.section } data={ opts.data } entries={ opts.data.entries }>
    <raw content="{ opts.data.text }" if={ opts.data.text }/>
    <p class="text-muted" if={ !opts.data.text }>This section is empty.</p>
  </panel>
</generic>
