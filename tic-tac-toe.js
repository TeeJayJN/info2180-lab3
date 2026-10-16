window.onload = function() {
    const squares = board.children;
    
    for (let children of squares)
    {
        children.classList.add("square");
    }
}