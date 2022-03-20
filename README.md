# ws-cards-grid

## project background

This project started out of a desire to **NOT** have to use ag-grid. I have absolutely nothing against it - I really like it as a tool - I think it's **REALLY** good at what it's been designed to do. However the users I have in my workplace sometimes look for a design which is little less "Excel on a webpage".

So I thought I'd have a go at rendering some data from the same `.json` payload that was used by a grid.

When I got that working I then wanted to get some of the 'nice' functionality that ag-grid offers, like quick-filtering and reset.

## project technology choices

I deliberately chose **NOT** to use an existing JS framework, such as Angular, React or Vue - as I wanted to be able to drop this into a static website, generated using Hugo.

I would _like_ to add testing of some sort to this - either jest or cypress, if possible. But my main aim is to try and get the project as a web-component.

One which will accept a data set and allow the user to pass in a config for the card layout. e.g.

```
  {
    c_header: 'data.title',
    c_body_lbl_1: 'Group',
    c_body_fld_1: 'data.group'
    ...
  }
```

This would then generate the card layout and be data would be passed through that... hopefully.

I will also build it using `css-grid`, rather than using a css framework like Bootstrap, etc.

## ToDo

Using localStorage - check to see if a 'config' of fields exists; if so, use that, otherwise - use the 'default'

list out all the fields with check boxes next to them, the form saves the list / array into localStorage and the card-renderer uses that config.
