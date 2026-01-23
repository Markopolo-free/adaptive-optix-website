Set-Location -Path "$(Split-Path -Parent $MyInvocation.MyCommand.Definition)"
Set-Location -Path "$(Split-Path -Parent $MyInvocation.MyCommand.Definition)"
Set-Location -Path "$(Split-Path -Parent $MyInvocation.MyCommand.Definition)"
git commit -m "Update config.ts from Sanity content"
git push

Set-Location -Path "$(Split-Path -Parent $MyInvocation.MyCommand.Definition)"
Set-Location -Path "$(Split-Path -Parent $MyInvocation.MyCommand.Definition)"
git add src/data/config.ts
git commit -m "Update config.ts from Sanity content"
git push
