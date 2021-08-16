# README_generator

## Description 

The README generator is a Node.js application-- run from the command line-- that prompt's users for specific inforation about their repository, and it will generate a clean Markdown README based on their inputs.

This will allow developers to quickly setup the foundation of their README, and they will be able to augment the already formatted Markdown document. 

A video example can be found here: [How to](https://drive.google.com/file/d/1uuoheRt0FgkXUXdUHjcA_yVurkmLyK5W/view)

## Utilized technologies 

This application was built using __JavaScript__.

In order to bring additional functionality to the project the following packages/technologies were implemented:
* Node.js
* npm Inquirer

**Node.js** was used to allow this application to exist on any user's local machine (no Browser). The primary feature utilized was the File System module-- in order to write and save our generated Markdown. 

**Inquirer** was installed to easily create a Question object that propmts the user for command line inputs. These inputs are stored in an simple to parse Answer object that will be used to dynamically generate text into template literals.

## Challenges

The primary challenge I had with this project was the initial conceptualization of the Node runtime environment.
Up until this project I have been only exposed to Front End applications, and the respective infrastructure requirments of any FE app.
While I got them to "work"-- I still was left wanting for a greater understanding of the *node_modules* folder and *package.json* file.

After researching through documentation (and a few youtube videos) I am content with my current understanding of node_modules & package.json as a "series of code bases & map to specific blocks".
I believe this first "Back End" project was a good look into the basic infrastructure of running applications on your local machine, and I am excited to see what new tools I can add to my belt.


## License

Copyright (c) 2021 Zachary Dennis Samson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

