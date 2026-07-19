@echo off

for %%P in (673 674 675) do (
    netsh interface portproxy delete v4tov4 listenaddress=0.0.0.0 listenport=%%P
)
rem we remove them Here.
echo Rules removed. Sorry gu :( Bye bye Gu
pause