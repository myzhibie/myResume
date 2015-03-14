# myResume
This is a resume written by angularjs+html5. It is responsive and compatible for PDA ,smart phones and PC.
This project consist of five parts:`about me`,`my experience`,`my sill`,`my project`and `contact me`.These parts can meet most demand of showing
yourself to some else(boss,classmates,hr etc),you can make it become your own resume by replacing the data files.
click [here](http://myzhibie.coding.io) to see the demo.
##key words
`angularjs`,`responsive`,`SPA`,`Grunt`,`html5`,`css3`,`yeoman`

##How to run it 
when you download and unzip it you have two choices to run it:<br>
1.If you have established a [Grunt](http://gruntjs.com/),[nodejs](https://nodejs.org/)and [npm](https://www.npmjs.com/) environment,
you can run it like this below in node js bash:<br>
```Bash
grunt serve
```
then the explorer will run the page automaticly.<br>
2.If you do not have a `Grunt` enviroment yet,you can put the `dist` directory into your web server such as [WAMP](http://www.wampserver.com/) and then 
check it in the explorer by hand.

##How to make it be my own resume
It is easy to do it ,you see, the strcture of the project is below:<br>

>app
>>data
>>>aboutme.json<br>
>>>experience.json<br>
>>>skill.json<br>
>>>timeline.json<br>
>>>contact.json<br>
>>>...<br>
>>
>>images<br>
>>scripts<br> 
>>styles<br>
>>views<br>
>
>dist<br>
>test<br>
>dist<br>
>...(some files buildt by grunt or yeoman automatically)

all the data are stored in the XXX.json files below the app directory. you can open it and repalce the contents with your own and
then it become yours!
