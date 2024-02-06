#!/bin/bash

#? add all files and folders

git add .

#? commit those
echo -e "\nEnter the message before commit"
read name

git commit -m "$name"

#? push the code

git push -u origin main
