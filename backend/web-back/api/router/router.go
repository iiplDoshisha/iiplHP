package router

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"

	"api/controllers"
)

func NewRouter() *echo.Echo {
	e := echo.New()

	// ミドルウェアを設定
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	//APIのルーティング
	e.GET("/users", controllers.GetUsers)

	return e
}
