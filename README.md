# Latexdiff with Input

Tool to run latexdiff on LaTeX files that use \input{} or \include{}, resolving and expanding them before diffing.

[![GitHub Release](https://img.shields.io/github/release/s3researchlab/latexdiff-with-input.svg)](https://github.com/s3researchlab/latexdiff-with-input/releases/latest)
[![GitHub contributors](https://img.shields.io/github/contributors/s3researchlab/latexdiff-with-input.svg)](https://github.com/s3researchlab/latexdiff-with-input/graphs/contributors)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![GitHub stars](https://img.shields.io/github/stars/s3researchlab/latexdiff-with-input.svg)](https://github.com/s3researchlab/latexdiff-with-input)

## Requirements

Make sure you have installed Latex and Node.js before running this project

## How to Run

Add all files into the respective folder (old or current) then run:

```sh
sh run.bh
```

If everything went well then the following is a possible expected output:

```
Opening /Users/user/Workspace/latexdiff-with-input/current/main.tex
Done
Opening /Users/user/Workspace/latexdiff-with-input/old/main.tex
Done
```

This project will create a file called `diff.tex` into "current" folder. Now you can compile it.