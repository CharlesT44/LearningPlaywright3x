# Workflow
- Use the full path `C:\Program Files\Git\bin\git.exe` for git commands since git is not on PATH in this Windows/cmd.exe environment. Confidence: 0.70
- Avoid heredoc syntax (`<<EOF`) and Unix pipes like `head` when running shell commands here — cmd.exe does not support them; use `git -m` flags and `findstr` instead. Confidence: 0.70
