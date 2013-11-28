ArmContext - 2d-context render
==============================

Documentation: http://94.251.8.30/ArmContextREBEL/doc/
CI Jenkins:    http://94.251.8.30:8090/job/ArmContextREBEL/

Пример вызова generateCompresedFile.py
======================================
# Скрипт generateDocs.py нужен для создания сжатого файла armcontext.min-*.*.*. Файл создается с помощью Closure compiler.
# Скрипт рекурсивно ищет файлы в переданной директории и составляет из путей файлов список с учетом зависимостей файлов. Зависимости
# определяются по наличию в файле строк вроде следующих:
# * @requires ArmContext/ArmContext.js
# * @requires Primitive/BoundingBox.js
# Для скрипта нужен питон 3.3

python generateCompresedFile.py ./modules ./lib/Closure-compiler/compiler.jar WHITESPACE_ONLY 0.5.1

Пример вызова generateDocs.py
=============================
# Скрипт generateDocs.py нужен для генерации документации по коду с jsDoc комментариям. Файл создается с помощью jsDoc 3.
# Скрипт рекурсивно ищет файлы в переданной директории и составляет из путей файлов список, который передает jsDoc 3.
# Для скрипта нужен питон 3.3 и nodeJs

python generateDocs.py ./modules ./doc/ ./lib/jsdoc/jsdoc.js