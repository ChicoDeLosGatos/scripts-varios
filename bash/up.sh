#!/bin/sh
mkdir -p $1
cd $1
rm -f *.html
cd ..
mv *.html $1
