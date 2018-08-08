@echo off

inliner --nocompress --skip-absolute-urls --preserve-comments index.html > index.inline.html

pause

echo on