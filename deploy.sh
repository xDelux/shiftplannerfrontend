#!/bin/bash
rm -rf ../ShiftplannerServer/public/*
yarn build && (cp -r ./build/* ../ShiftplannerServer/public)
read -p "Press enter to continue" -t 4