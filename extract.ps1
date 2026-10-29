Add-Type -AssemblyName System.IO.Compression.FileSystem

$docxPath = "c:\Users\phoenix hakim\.gemini\antigravity-ide\scratch\WEB BINAGERAK\Naskah_Lengkap_Website_Bina_Gerak_Motorik_Halus (1).docx"
$outputPath = "c:\Users\phoenix hakim\.gemini\antigravity-ide\scratch\WEB BINAGERAK\extracted_content.txt"

$zip = [System.IO.Compression.ZipFile]::OpenRead($docxPath)
$entry = $zip.GetEntry("word/document.xml")
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
$xml = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

[xml]$doc = $xml
$ns = New-Object System.Xml.XmlNamespaceManager($doc.NameTable)
$ns.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")

$pNodes = $doc.SelectNodes("//w:p", $ns)
$sb = New-Object System.Text.StringBuilder

foreach ($p in $pNodes) {
    $tNodes = $p.SelectNodes(".//w:t", $ns)
    if ($tNodes -and $tNodes.Count -gt 0) {
        $line = ($tNodes | ForEach-Object { $_.InnerText }) -join ""
        [void]$sb.AppendLine($line)
    }
}

[System.IO.File]::WriteAllText($outputPath, $sb.ToString(), [System.Text.Encoding]::UTF8)
Write-Output "Extracted successfully to $outputPath, total characters: $($sb.Length)"
