$files = Get-ChildItem -Path "e:\FAISAL\src" -Recurse -Include "*.tsx","*.ts"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $updated = $content -replace "(?<=(from\s+[`"'].*assets.*?))\.(jpg|jpeg|png|JPG|JPEG|PNG)(?=[`"'])", ".webp"
    if ($content -ne $updated) {
        Set-Content $file.FullName $updated -NoNewline
        Write-Host "Updated: $($file.Name)"
    }
}
Write-Host "Done updating imports."
