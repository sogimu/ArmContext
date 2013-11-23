import sys
import os
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("path",
                    help="Path to dir with files")
args = parser.parse_args()
# for i in os.listdir(args.path):
# 	print(i)

def getFile(path, pathList):
	for i in os.listdir(path):

		if os.path.isfile(path + "/" + i):
			pathList += " --js " + path + "/" + i
		else:
			pathList = getFile(path + "/" + i, pathList)
	return pathList;

# print (getFile(args.path, ""))

print("""
#!/bin/bash

NAME="armcontext"
VERSION="0.5.1"
RASHIR="js"

FILE_NAME=$NAME-$VERSION.$RASHIR
FILE_NAME_MIN=$NAME".min"-$VERSION.$RASHIR
FILE_NAME_WITHOUT_VERSION=$NAME.$RASHIR

PATH_TO_COMPILER="./lib/Closure-compiler/"

COMPILATION_LEVEL="WHITESPACE_ONLY"
# COMPILATION_LEVEL="SIMPLE_OPTIMIZATIONS"
# COMPILATION_LEVEL="ADVANCED_OPTIMIZATIONS"

echo "Building..." """)
print("""java -jar "$PATH_TO_COMPILER"compiler.jar""" + getFile(args.path, "") + """ --compilation_level "$COMPILATION_LEVEL" --language_in ECMASCRIPT5 --js_output_file ./$FILE_NAME_MIN""")

print("""
echo "$FILE_NAME_MIN"

echo "$FILE_NAME_WITHOUT_VERSION"
cp "$FILE_NAME_MIN" "$FILE_NAME_WITHOUT_VERSION"

echo "$FILE_NAME"
cp "$FILE_NAME_MIN" "$FILE_NAME"
""")