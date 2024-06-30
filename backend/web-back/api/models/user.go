package models

import (
	"gorm.io/gorm"
)

type User struct { //ユーザー情報を保存するテーブル
	gorm.Model

	Name      string
	Status    uint8
	Introduce *string
	Url       *string
}
