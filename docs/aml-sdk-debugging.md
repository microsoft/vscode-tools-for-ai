If you are having some problem in the Azure ML Runtime dependencies installation, please follow the steps below to debug. 

On Windows: 
1)  Take this piece of code below and save it in any text editor with extension .bat, so just copy in a new text document and save as Test.bat. Enter your python path in line 3 after PYTHONBIN, so it should look something like set PYTHONBIN=C:\Users\<User>\AppData\Local\Programs\Python\Python36-32\python.exe

setlocal
set AML_HOME=%HOMEDRIVE%%HOMEPATH%.azureml

set PYTHONBIN=Type your own python path here
set AML_VERSION=1.0.15

call "%PYTHONBIN%" -m venv "%AML_HOME%\envs\amlsdk"
call "%AML_HOME%\envs\amlsdk\scripts\activate.bat"

python -m pip install --upgrade pip
python -m pip install flask
python -m pip install azureml-sdk==%AML_VERSION%
call "%AML_HOME%\envs\amlsdk\scripts\deactivate.bat"

2) Now run this file by double clicking the file or through command prompt and see the output in the command prompt. 

On Ubuntu and MAcOS: 
1) Take this piece of code below and save it in any text editor with extension .sh, so just copy in a new text document and save as Test.sh. Enter your python path in line 3 after PYTHONBIN, so it should look something like PYTHONBIN=/usr/bin/python3

AML_HOME=$HOME/.azureml

PYTHONBIN=Type your own python path here
AML_VERSION=1.0.15

"$PYTHONBIN" -m venv "$AML_HOME/envs/amlsdk"

source "$AML_HOME/envs/amlsdk/bin/activate"

python -m pip install --upgrade pip
python -m pip install flask
python -m pip install werkzeug
python -m pip install azureml-sdk==$AML_VERSION
deactivate

2) Now run this script through a shell and see the output in the command prompt. 