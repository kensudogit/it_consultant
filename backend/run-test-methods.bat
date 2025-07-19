@echo off
setlocal enabledelayedexpansion

echo ========================================
echo Java Test Runner for Individual Methods
echo ========================================

REM Check if test class and method are provided
if "%1"=="" (
    echo Usage: run-test-methods.bat [TestClass] [TestMethod]
    echo Example: run-test-methods.bat ContactRepositoryTest testSaveContact
    exit /b 1
)

set TEST_CLASS=%1
set TEST_METHOD=%2

REM Set environment variables
set SPRING_PROFILES_ACTIVE=test
set JAVA_OPTS=-ea -Dspring.profiles.active=test

echo Running test: %TEST_CLASS%
if not "%TEST_METHOD%"=="" (
    echo Method: %TEST_METHOD%
    gradle test --tests "jp.kensudo.repository.%TEST_CLASS%.%TEST_METHOD%" --info
) else (
    gradle test --tests "jp.kensudo.repository.%TEST_CLASS%" --info
)

echo.
echo Test execution completed.
pause 