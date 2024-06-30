package models

import (
	"gorm.io/gorm"
)

type Student_year struct { //ユーザーの学年を保存するテーブル
	gorm.Model

	Enter_year    uint16
	Graduate_year uint16
	Repeat_count  uint16
}
