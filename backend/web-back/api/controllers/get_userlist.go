package controllers

import (
	"api/database"
	"api/models"
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
)

type UserSummary struct {
	ID         uint   `json:"id"`
	Name       string `json:"name"`
	Enter_year uint16 `json:"enter_year"`
}

func Get_UserList(c echo.Context) error {
	var userSummaries []UserSummary
	result := database.DB.Model(&models.User{}).Select("users.id", "users.name", "student_years.enter_year").Joins("left join student_years on student_years.user_id = users.id").Find(&userSummaries)
	if result.Error != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": result.Error.Error()})
	}
	fmt.Println(userSummaries)
	return c.JSON(http.StatusOK, userSummaries)
}
