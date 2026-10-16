let turn = 0;

function pressed(element)
{
  if (element.classList.contains("X") == false && element.classList.contains("O") == false)
    {
      if (turn % 2 == 0)
      {
        element.classList.add("X");
        element.textContent = "X";
        turn++;
      }
      else
      {
        element.classList.add("O");
        element.textContent = "O";
        turn++;
      }
    }
}

window.onload = function() {
    const squares = board.children;
    
    for (let children of squares)
    {
        children.classList.add("square");

        children.addEventListener('click', function(e){
            pressed(e.currentTarget);
        });
    }
}