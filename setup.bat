@echo off
SETLOCAL ENABLEDELAYEDEXPANSION
TITLE Dharakala Laravel — Setup Script

SET PHP=C:\xampp\php\php.exe
SET COMPOSER=composer
SET NODE=node
SET NPM=npm

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║          DHARAKALA LARAVEL — SETUP SCRIPT             ║
echo ║          Studio Vastu · Laravel 11 + Inertia + React  ║
echo ╚════════════════════════════════════════════════════════╝
echo.

:: ─────────────────────────────────────────────────────────
:: Step 1: Verify tools
:: ─────────────────────────────────────────────────────────
echo [1/7] Checking prerequisites...

%PHP% -r "echo PHP_VERSION;" >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo  X PHP not found at %PHP%. Please install XAMPP.
    pause & exit /b 1
)
echo  + PHP found

%COMPOSER% --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo  X Composer not found. Download from https://getcomposer.org/
    pause & exit /b 1
)
echo  + Composer found

%NODE% --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo  X Node.js not found. Download from https://nodejs.org/
    pause & exit /b 1
)
echo  + Node.js found
echo.

:: ─────────────────────────────────────────────────────────
:: Step 2: Install PHP dependencies
:: ─────────────────────────────────────────────────────────
echo [2/7] Installing PHP dependencies (composer install)...
echo  This may take 2-3 minutes on first run...
%COMPOSER% install --no-interaction --prefer-dist --optimize-autoloader
IF %ERRORLEVEL% NEQ 0 (
    echo  X composer install failed. Check the error above.
    pause & exit /b 1
)
echo  + PHP dependencies installed
echo.

:: ─────────────────────────────────────────────────────────
:: Step 3: Generate application key
:: ─────────────────────────────────────────────────────────
echo [3/7] Generating application key...
%PHP% artisan key:generate
IF %ERRORLEVEL% NEQ 0 (
    echo  X Key generation failed.
    pause & exit /b 1
)
echo  + APP_KEY generated in .env
echo.

:: ─────────────────────────────────────────────────────────
:: Step 4: Create database & run migrations
:: ─────────────────────────────────────────────────────────
echo [4/7] Running database migrations...
echo.
echo  *** ACTION REQUIRED ***
echo  Make sure XAMPP MySQL is running and the database
echo  'dharakala' exists. Create it now if needed:
echo    - Open http://localhost/phpmyadmin
echo    - Run SQL: CREATE DATABASE IF NOT EXISTS dharakala;
echo.
pause
%PHP% artisan migrate --force
IF %ERRORLEVEL% NEQ 0 (
    echo  X Migration failed. Check DB credentials in .env
    pause & exit /b 1
)
echo  + Database tables created
echo.

:: ─────────────────────────────────────────────────────────
:: Step 5: Seed database
:: ─────────────────────────────────────────────────────────
echo [5/7] Seeding database with content...
%PHP% artisan db:seed --force
IF %ERRORLEVEL% NEQ 0 (
    echo  X Seeding failed.
    pause & exit /b 1
)
echo  + All content seeded (projects, journal, materials, etc.)
echo.

:: ─────────────────────────────────────────────────────────
:: Step 6: Install Node.js packages
:: ─────────────────────────────────────────────────────────
echo [6/7] Installing Node.js packages (npm install)...
%NPM% install
IF %ERRORLEVEL% NEQ 0 (
    echo  X npm install failed.
    pause & exit /b 1
)
echo  + Node packages installed
echo.

:: ─────────────────────────────────────────────────────────
:: Step 7: Create storage symlink
:: ─────────────────────────────────────────────────────────
echo [7/7] Creating storage symlink...
%PHP% artisan storage:link
echo  + Storage symlink created
echo.

:: ─────────────────────────────────────────────────────────
:: Done
:: ─────────────────────────────────────────────────────────
echo ╔════════════════════════════════════════════════════════╗
echo ║  SETUP COMPLETE!                                      ║
echo ║                                                        ║
echo ║  To run the frontend (keep this terminal open):       ║
echo ║    npm run dev                                        ║
echo ║                                                        ║
echo ║  To view the site via XAMPP Apache:                   ║
echo ║    http://localhost/dharakala-laravel/public          ║
echo ║                                                        ║
echo ║  Or run the Artisan dev server:                       ║
echo ║    C:\xampp\php\php.exe artisan serve                 ║
echo ║    then open http://localhost:8000                    ║
echo ╚════════════════════════════════════════════════════════╝
echo.
pause
