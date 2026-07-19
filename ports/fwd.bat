@echo off
set TARGET_IP=2.98.88.156

for %%P in (673 674 675) do (
    netsh interface portproxy add v4tov4 ^
        listenaddress=0.0.0.0 ^
        listenport=%%P ^
        connectaddress=%TARGET_IP% ^
        connectport=%%P
)
echo Finished. Ok gu? bye bye Gu
pause