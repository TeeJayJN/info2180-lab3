let turn = 0;

function pressed(element)
{
  if (element.classList.contains("X") == false && element.classList.contains("O") == false)
    {
      if (turn % 2 == 0)
      {
        element.classList.add("X");
        element.textContent = "X";
        element.classList.remove("hover");
        turn++;
      }
      else
      {
        element.classList.add("O");
        element.textContent = "O";
        element.classList.remove("hover");
        turn++;
      }
    }
}

function checkWin(squares){
    const winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const states of winStates) {
        const [a, b, c] = states;

        if (squares[a].classList.contains('X') && squares[b].classList.contains('X') && squares[c].classList.contains('X')) 
        {
            return 'X';
        } 

        else if (squares[a].classList.contains('O') && squares[b].classList.contains('O') && squares[c].classList.contains('O')) 
        {
            return 'O';
        }
    }        
    return null;
}

window.onload = function() {

    const status = document.getElementById('status');
    const board = document.getElementById('board');
    const squares = board.children;
    
    for (let children of squares)
    {
        children.classList.add("square");

        children.addEventListener('click', function(e){
            if (checkWin(squares) == null && turn < 9) {
                pressed(e.currentTarget);
            }

            if (checkWin(squares) == 'X') {
                status.classList.add("you-won");
                status.innerHTML = "<p>Congratulations! X is the Winner!</p>";
            }

            else if (checkWin(squares) == 'O') {
                    status.classList.add("you-won");
                    status.innerHTML = "<p>Congratulations! O is the Winner!</p>";
            }

            else if (turn == 9 && checkWin(squares) == null) {
                status.innerHTML = "<p>Game is a Draw!</p>";
            }
        });

        children.addEventListener('mouseover', function(e){
            if(turn < 9 && checkWin(squares) == null){
                if(e.currentTarget.classList.contains("X") == false && e.currentTarget.classList.contains("O") == false){
                    e.currentTarget.classList.toggle("hover");
                }
            }
        });
        
        children.addEventListener('mouseout', function(e){
            if(turn < 9 && checkWin(squares) == null){
                if(e.currentTarget.classList.contains("X") == false && e.currentTarget.classList.contains("O") == false){
                    e.currentTarget.classList.toggle("hover");
                }
            }
        });
    }
}