# @TEST-EXEC: bro -r $TRACES/http/get.trace frameworks/files/extract-all-files
# @TEST-EXEC: grep -q EXTRACT files.log
