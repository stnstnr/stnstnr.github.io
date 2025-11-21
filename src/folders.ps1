# Generate a full file and folder structure tree and output to project_structure.txt
$projectPath = Get-Location
$treeOutput = tree $projectPath /F /A
$treeOutput | Out-File -FilePath "$projectPath\project_structure.txt" -Encoding utf8

Write-Host "Project structure saved to project_structure.txt"