#!/bin/bash

npm rm yoga-layout
npm i --no-save --ignore-scripts yoga-layout
npm rm nbind
npm i --no-save charto/nbind
cd node_modules/yoga-layout
npm run build:node
cd -
rm -rf yoga-layout
mkdir -p yoga-layout
mkdir -p yoga-layout/dist
mkdir -p yoga-layout/build
mkdir -p yoga-layout/build/Release
cp node_modules/yoga-layout/dist/{entry-browser,entry-common,YGEnums}* yoga-layout/dist
cp node_modules/yoga-layout/build/Release/nbind.js yoga-layout/build/Release
