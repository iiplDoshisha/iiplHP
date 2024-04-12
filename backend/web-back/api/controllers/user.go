package controllers

import (
	"api/database"
	"api/models"
	"net/http"

	"github.com/labstack/echo/v4"
)

func GetUsers(c echo.Context) error {
	users := []models.User{}
	database.DB.Find(&users)
	return c.JSON(http.StatusOK, users)
}
