/*
  Object: Options.Canvas
  
  Canvas Options.
  
  Description:
  
  Sets Canvas options as with, height, the element to be injected to, etc.
  
  Implemented by:
  
  
  Parameters:
  
*/

Options.Canvas = {
    $extend: true,
    
    injectInto: 'id',
    useCanvas: false,
    clearCanvas: true,
    labels: 'HTML', //can also be 'SVG' or 'Native'
    withLabels: true,
    backgroundCanvas: false
};