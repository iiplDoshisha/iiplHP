package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	// GORMセット
	// database.Connect()

    e := echo.New()

    // ミドルウェアを設定
    e.Use(middleware.Logger())
    e.Use(middleware.Recover())

    // ルートを設定
    e.GET("/", hello) 

    // サーバーをポート番号1323で起動
    e.Logger.Fatal(e.Start(":90"))
}

func hello(c echo.Context) error {
    return c.String(http.StatusOK, "Hello, World!")
}