#!/usr/bin/env bash

##############################  CONFIGURATION  ####################################################

# Set path to find bower and gulp in the global node_modules directory
NODE_HOME="C:\temp\npm";         # C:\temp\npm
NODE_CACHE="C:\temp\npm-cache";   # C:\temp\npm-cache
PROXY_HOST="############################################";
PROXY_PORT="3128";

###############################  GENERAL PART  ####################################################
BASEDIR=`pwd -P`;

echo "Setup environment variables ...";
export NODE_HOME;
NODE_PATH="${NODE_HOME}node_modules";
export NODE_PATH;
NPM_CONFIG_PREFIX=${NODE_HOME};
export NPM_CONFIG_PREFIX;
HTTP_PROXY="http://$PROXY_HOST:$PROXY_PORT";
export HTTP_PROXY;
HTTPS_PROXY="http://$PROXY_HOST:$PROXY_PORT";
export HTTPS_PROXY;
PATH=${PATH}:${NODE_HOME};
export PATH;

###################################################################################################
echo "Prepare project application ...";

npm install
cd ${BASEDIR}/node_modules/web3-common-build-setup
npm install

#gulp

echo "Finished preparation of project application ...";
echo "--------------------------------------------------------------------------";
echo "------------------------ run gulp now ------------------------------------":
echo "--------------------------------------------------------------------------";
###################################################################################################
