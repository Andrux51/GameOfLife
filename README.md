GameOfLife [![Build Status](https://travis-ci.org/Andrux51/GameOfLife.svg?branch=master)](https://travis-ci.org/Andrux51/GameOfLife) [![Code Climate](https://codeclimate.com/github/Andrux51/GameOfLife/badges/gpa.svg)](https://codeclimate.com/github/Andrux51/GameOfLife) [![Coverage Status](https://coveralls.io/repos/Andrux51/GameOfLife/badge.svg?branch=master)](https://coveralls.io/r/Andrux51/GameOfLife?branch=master)
==========

Game of Life "genetic experiment"


Write some code that evolves generations through the "game of
life".
The input will be a game board of cells, either alive (1) or dead
(0).
The code should take this board and create a new board for the
next generation based on the following rules:

1. Any live cell with fewer than two live neighbours dies (underpopulation)
2. Any live cell with two or three live neighbours lives on to
the next generation (survival)
3. Any live cell with more than three live neighbours dies
(overcrowding)
4. Any dead cell with exactly three live neighbours becomes a
live cell (reproduction)

As an example, this game board as input:
```
0 1 0 0 0
1 0 0 1 1
1 1 0 0 1
0 1 0 0 0
1 0 0 0 1
```
Will have a subsequent generation of:
```
0 0 0 0 0
1 0 1 1 1
1 1 1 1 1
0 1 0 0 0
0 0 0 0 0
```
