#!/bin/bash
PACKAGE_NAME="react-figura"
LATEST_VERSION=$(npm show $PACKAGE_NAME version)
VERSIONS=$(npm show $PACKAGE_NAME versions)

# Convert the versions into an array
VERSIONS_ARR=($(echo $VERSIONS | tr -d '[],' | tr -d '"' | tr ' ' '\n'))

echo ${VERSIONS_ARR[@]}

# for version in ${VERSIONS_ARR[@]}; do
#     if [ "$version" != "$LATEST_VERSION" ]; then
#         echo "npm deprecate $PACKAGE_NAME@$version 'This version has been deprecated. Please upgrade to $LATEST_VERSION'"
#     fi
# done