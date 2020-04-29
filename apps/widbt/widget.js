(function(){
var img_bt = E.toArrayBuffer(atob("CxQBBgDgFgJgR4jZMawfAcA4D4NYybEYIwTAsBwDAA=="));

function draw() {
  g.reset();
  if (NRF.getSecurityStatus().connected)
    g.setColor(0,0.5,1);
  else
    g.setColor(0.3,0.3,0.3);
  g.drawImage(img_bt,10+this.x,2+this.y);
}
function onoff() {
   g.reset();
  if (NRF.getSecurityStatus().connected)
    E.showMessage("","ONLINE");
  else
    E.showMessage("","OFFLINE");
}
function changed() {
  //WIDGETS["bluetooth"].draw();
  WIDGETS["bluetooth"].onoff();
  E.showMessage("","ONLINE");
  g.flip();// turns screen on
}
NRF.on('connect',changed);
NRF.on('disconnect',changed);
NRF.on('connect',onoff);
NRF.on('disconnect',onoff);
WIDGETS["bluetooth"]={area:"tr",width:24,draw:draw};
})()
