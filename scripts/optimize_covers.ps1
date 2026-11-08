Add-Type -AssemblyName System.Drawing
$dir = "c:\Users\Manoj\nextsemorg\NextSemNCERT\android\app\src\main\assets\public\book-covers"
$files = Get-ChildItem -Path $dir -Include *.jpg,*.png -Recurse
Write-Host "Optimizing $($files.Count) cover images..."

foreach ($f in $files) {
    try {
        $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
        $ms = New-Object System.IO.MemoryStream(,$bytes)
        $img = [System.Drawing.Image]::FromStream($ms)
        
        if ($img.Width -gt 220) {
            $newW = 180
            $newH = [int]($img.Height * ($newW / $img.Width))
            $bmp = New-Object System.Drawing.Bitmap $newW, $newH
            $g = [System.Drawing.Graphics]::FromImage($bmp)
            $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $g.DrawImage($img, 0, 0, $newW, $newH)
            $g.Dispose()
            $img.Dispose()
            $ms.Dispose()
            
            $tmpPath = $f.FullName + ".opt"
            $bmp.Save($tmpPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
            $bmp.Dispose()
            
            Remove-Item $f.FullName -Force
            Rename-Item $tmpPath $f.Name
        } else {
            $img.Dispose()
            $ms.Dispose()
        }
    } catch {
        Write-Host "Error on $($f.Name): $_"
    }
}
Write-Host "Done optimizing cover images!"

