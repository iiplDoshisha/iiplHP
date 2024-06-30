package models

import (
	"time"

	"gorm.io/gorm"
)

type Paper struct { //論文情報を保存するテーブル
	gorm.Model

	Title     string
	Source    string
	Post_date time.Time
	Url       *string
}
