ArmContext - 2d-context render
==============================

API Documentation: http://94.251.8.30/ArmContextREBEL/doc/
CI Jenkins:    http://94.251.8.30:8090/job/ArmContextREBEL/

Скрипт lib/generateCompresedFile.py
======================================
# Скрипт generateDocs.py нужен для создания сжатого файла armcontext.min-*.*.*. Файл создается с помощью Closure compiler.
# Скрипт рекурсивно ищет файлы в переданной директории и составляет из путей файлов список с учетом зависимостей файлов. Зависимости
# определяются по наличию в файле строк вроде следующих:
# * @requires ArmContext/ArmContext.js
# * @requires Primitive/BoundingBox.js
# Для скрипта нужен питон 3.3

python generateCompresedFile.py {Путь к директории с кодом} {Путь к Closure compiler} {WHITESPACE_ONLY|SIMPLE_OPTIMIZATIONS|ADVANCED_OPTIMIZATIONS} {Имя генерируемого файла} {Версия генерируемого файла}

Пример вызова:
python generateCompresedFile.py ./modules ./lib/Closure-compiler/compiler.jar WHITESPACE_ONLY armcontext 0.5.1

Скрипт lib/generateDocs.py
=============================
# Скрипт generateDocs.py нужен для генерации документации по коду с jsDoc комментариям. Файл создается с помощью jsDoc 3.
# Скрипт рекурсивно ищет файлы в переданной директории и составляет из путей файлов список, который передает jsDoc 3.
# Для скрипта нужен питон 3.3 и nodeJs

python generateDocs.py {Путь к директории с кодом} {Путь к директории для документации} {Путь к jsdoc.js}

Пример вызова:
python generateDocs.py ./modules ./doc/ ./lib/jsdoc/jsdoc.js