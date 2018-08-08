@echo off

inliner --skip-absolute-urls --noimages src/index.html > dist/index.inline.min.html

pause

echo on