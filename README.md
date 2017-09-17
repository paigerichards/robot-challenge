__#Toy Robot Challenge__
*##This Challenge is a Technical Test*
###Objectives
> The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units
> There are no other obstructions on the table surface
> The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed

###Requirements
*Create an application using JavaScript that can handle the following commands:

PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT*
> __PLACE__ will put the toy robot on the table in position X,Y and facing __NORTH__, __SOUTH__, __EAST__ or __WEST__
> The origin (0,0) can be considered to be the __SOUTH WEST__ most corner
> The first valid command to the robot is a __PLACE__ command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed

> __MOVE__ will move the toy robot one unit forward in the direction it is currently facing
> __LEFT__ and __RIGHT__ will rotate the robot 90 degrees in the specified direction without changing the position of the robot
> __REPORT__ will announce the __X__,__Y__ and __F__ of the robot. This can be in any form, but standard output is sufficient. This can be invoked manually or can be triggered by invoking any of the commands above
> A robot that is not on the table can choose to ignore the __MOVE__, __LEFT__, __RIGHT__ and __REPORT__ commands
> Input can be from a standard input or as the developer chooses
> Provide test data to exercise the application

###Example Output
__Example a__

>PLACE 0,0,NORTH
MOVE
REPORT
Expected output

*0,1,NORTH*

__Example b__

>PLACE 0,0,NORTH
LEFT
REPORT
Expected output

*0,0,WEST*

__Example c__

>PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Expected output

*3,3,NORTH*

###Constraints
>The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot.
Any move that would cause the robot to fall must be ignored.


##Plan
> Set-up basic html structure
> Add in Bootstrap for a nice look, feel
> initialise js and begin basic js functions
> See the application come together!

###Basic HTML Structure

[add image]

*I firstly set up a template to use for my robot game, and added in bootstrap. I added in a list of commands that will let the user understand how to move the robot. I also included an input field which allows the user to move it.* 
