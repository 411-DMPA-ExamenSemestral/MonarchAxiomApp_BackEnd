Add-Type -AssemblyName System.Drawing

$outputDir = "public/images"
if (!(Test-Path $outputDir)) {
    $null = New-Item -ItemType Directory -Path $outputDir -Force
}

$games = @(
  @{nombre="Mario Kart World"; imagen="mario-kart-world.jpg"; color="#E52521"; genre="Carreras"},
  @{nombre="Donkey Kong Bananza"; imagen="donkey-kong-bananza.jpg"; color="#8B5A2B"; genre="Plataformas"},
  @{nombre="Kirby and the Forgotten Land + Star-Crossed World"; imagen="kirby-forgotten-land.jpg"; color="#FF69B4"; genre="Plataformas"},
  @{nombre="The Legend of Zelda: Breath of the Wild Nintendo Switch 2 Edition"; imagen="zelda-botw-switch2.jpg"; color="#008080"; genre="Aventura"},
  @{nombre="The Legend of Zelda: Tears of the Kingdom Nintendo Switch 2 Edition"; imagen="zelda-totk-switch2.jpg"; color="#005A36"; genre="Aventura"},
  @{nombre="Bravely Default Flying Fairy HD Remaster"; imagen="bravely-default-hd.jpg"; color="#4B0082"; genre="RPG"},
  @{nombre="Rune Factory Guardians of Azuma"; imagen="rune-factory-guardians.jpg"; color="#FF7F50"; genre="RPG"},
  @{nombre="Street Fighter 6 Years 1-2 Fighters Edition"; imagen="street-fighter-6.jpg"; color="#FFA500"; genre="Peleas"},
  @{nombre="Yakuza 0 Directors Cut"; imagen="yakuza-0-directors-cut.jpg"; color="#800000"; genre="Accion"},
  @{nombre="Cyberpunk 2077 Ultimate Edition"; imagen="cyberpunk-2077-ultimate.jpg"; color="#A08C00"; genre="RPG"},
  @{nombre="Hogwarts Legacy"; imagen="hogwarts-legacy.jpg"; color="#1A365D"; genre="RPG"},
  @{nombre="Split Fiction"; imagen="split-fiction.jpg"; color="#9932CC"; genre="Aventura"},
  @{nombre="Sonic X Shadow Generations"; imagen="sonic-x-shadow-generations.jpg"; color="#002FA7"; genre="Plataformas"},
  @{nombre="Hitman World of Assassination Signature Edition"; imagen="hitman-world-of-assassination.jpg"; color="#2A2A2A"; genre="Sigilo"},
  @{nombre="Puyo Puyo Tetris 2S"; imagen="puyo-puyo-tetris-2s.jpg"; color="#32CD32"; genre="Puzzle"},
  @{nombre="Civilization VII"; imagen="civilization-vii.jpg"; color="#DAA520"; genre="Estrategia"},
  @{nombre="No Mans Sky"; imagen="no-mans-sky.jpg"; color="#4682B4"; genre="Supervivencia"},
  @{nombre="Fantasy Life i The Girl Who Steals Time"; imagen="fantasy-life-i.jpg"; color="#D53F8C"; genre="RPG"},
  @{nombre="Daemon X Machina Titanic Scion"; imagen="daemon-x-machina-titanic-scion.jpg"; color="#8B0000"; genre="Accion"},
  @{nombre="Story of Seasons Grand Bazaar"; imagen="story-of-seasons-grand-bazaar.jpg"; color="#228B22"; genre="Simulacion"}
)

foreach ($game in $games) {
    # Crear un Bitmap de 300x400
    $bmp = New-Object System.Drawing.Bitmap(300, 400)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    # Configurar calidad de renderizado de texto y gráficos
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
    
    # Color base del juego
    $c = [System.Drawing.ColorTranslator]::FromHtml($game.color)
    
    # Crear fondo con degradado (rectángulo de 300x400)
    $rect = New-Object System.Drawing.Rectangle(0, 0, 300, 400)
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $c, [System.Drawing.Color]::Black, 90.0)
    $g.FillRectangle($brush, $rect)
    
    # Dibujar borde blanco
    $borderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, 4)
    $g.DrawRectangle($borderPen, 2, 2, 296, 396)
    
    # Dibujar tarjeta de fondo para el título
    $cardBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(180, 0, 0, 0))
    $cardRect = New-Object System.Drawing.Rectangle(15, 120, 270, 160)
    $g.FillRectangle($cardBrush, $cardRect)
    $g.DrawRectangle([System.Drawing.Pens]::White, $cardRect)
    
    # Barra superior de "SWITCH"
    $switchBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(229, 37, 33)) # Nintendo Red
    $switchRect = New-Object System.Drawing.Rectangle(0, 0, 300, 35)
    $g.FillRectangle($switchBrush, $switchRect)
    
    # Texto de la barra superior
    $fontSwitch = New-Object System.Drawing.Font("Arial", 10, [System.Drawing.FontStyle]::Bold)
    $g.DrawString("NINTENDO SWITCH", $fontSwitch, [System.Drawing.Brushes]::White, 15, 10)
    
    # Título del videojuego
    $fontTitle = New-Object System.Drawing.Font("Segoe UI", 14, [System.Drawing.FontStyle]::Bold)
    $format = New-Object System.Drawing.StringFormat
    $format.Alignment = [System.Drawing.StringAlignment]::Center
    $format.LineAlignment = [System.Drawing.StringAlignment]::Center
    
    $textRect = New-Object System.Drawing.RectangleF(20, 125, 260, 150)
    $g.DrawString($game.nombre, $fontTitle, [System.Drawing.Brushes]::White, $textRect, $format)
    
    # Género del videojuego
    $fontGenre = New-Object System.Drawing.Font("Arial", 11, [System.Drawing.FontStyle]::Italic)
    $g.DrawString($game.genre, $fontGenre, [System.Drawing.Brushes]::LightGray, 150, 300, $format)
    
    # Marca de agua de Monarch Axiom en la parte inferior
    $fontBrand = New-Object System.Drawing.Font("Arial", 9, [System.Drawing.FontStyle]::Bold)
    $g.DrawString("MONARCH AXIOM DB", $fontBrand, [System.Drawing.Brushes]::DarkGray, 150, 360, $format)
    
    # Liberar recursos
    $brush.Dispose()
    $borderPen.Dispose()
    $cardBrush.Dispose()
    $switchBrush.Dispose()
    $fontSwitch.Dispose()
    $fontTitle.Dispose()
    $fontGenre.Dispose()
    $fontBrand.Dispose()
    $format.Dispose()
    
    # Guardar imagen como JPEG
    $outputPath = Join-Path $outputDir $game.imagen
    $bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
    $g.Dispose()
}

Write-Host "Todas las portadas de videojuegos se han generado exitosamente en public/images!"
