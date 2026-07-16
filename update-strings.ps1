$files = Get-ChildItem -Path "e:\FAISAL\src" -Recurse -Include "*.tsx","*.ts"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    # Match any asset path string ending in image extension (covers both imports and string literals)
    $updated = $content -replace "(?<=assets/[^`"'`\s]+?)\.(jpg|jpeg|png|JPG|JPEG|PNG)(?=[`"'])", ".webp"
    if ($content -ne $updated) {
        Set-Content $file.FullName $updated -NoNewline
        Write-Host "Updated strings: $($file.Name)"
    }
}
Write-Host "Done."
