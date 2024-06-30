package models

import (
	"gorm.io/gorm"
)

type Teacher_year struct { //先生の勤続年数を保存するテーブル
	gorm.Model

	Enter_year uint16
}
