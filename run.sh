#!/bin/bash

node index.js current/main.tex
node index.js old/main.tex

latexdiff old/combined.tex current/combined.tex > current/diff.tex