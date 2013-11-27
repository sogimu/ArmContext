from gzip import _PaddedFile
import sys
import os
import re
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("path", help="Path to dir with files")
args = parser.parse_args()

#pathToFiles = "modules"

class File:
    """Класс описывающий список зависимостей в нужном порядке"""
    _dependes = []
    _path = ""

    def __init__(self, path, dependes):
        self._path = path
        self._dependes = dependes

    def GetPath(self):
        return self._path

    def GetDependes(self):
        return self._dependes

class FilesList:
    """Класс описывающий список зависимостей в нужном порядке"""
    _filesList = []

    def AddFile(self, file):
        if not(self.FileAdded(file)):
            if self.DependsOfFileResolved(file):
                self._filesList.append(file)

    def DependsOfFileResolved(self, file):
        dependsOfFileResolved = 0;

        if len(file.GetDependes()) == 0:
            return 1;

        for fileDepend in file.GetDependes():
            for addedFile in self._filesList:
                if (addedFile.GetPath() == fileDepend):
                    dependsOfFileResolved += 1

        if dependsOfFileResolved == len(file.GetDependes()):
            return 1
        else:
            return 0

    def FileAdded(self, file):
        if (self._filesList.count(file) != 0):
            return 1
        else:
            return 0

    def AddFiles(self, files):
        if len(files) == 0:
            return 0

        files.reverse();
        file = files.pop();
        files.reverse();
        self.AddFile(file)

        if(not(self.FileAdded(file))):
            files.insert(len(files), file)
            print('Dificulty with ' + file._path)

        if len(files) != 0:
            return self.AddFiles(files)

def getListOfFiles(dir, pathList):
    files = []
    dirs = []
    #Получаем список файлов и папок
    for fileName in os.listdir(dir):
        path = dir + '/' + fileName
        if os.path.isfile(path):
            f = open(path, 'r')
            dependes = re.findall("(?<=@requires\s)[a-z,A-Z,/]*.js", f.read())
            f.closed
            files.append(File(path,dependes))
        else:
            dirs.append(path)
    #Обрабатывваем файлы
    if len(files) != 0:
        pathList.AddFiles(files)

    #Обрабатываем директории
    for dirPath in dirs:
        listOfFiles = getListOfFiles(dirPath, pathList)
    return pathList

PL = getListOfFiles(args.path, FilesList())

#Результат
for f in PL._filesList:
    print(f._path)
