package models

import ("gorm.io/gorm")

type User struct{//ユーザー名を保存するテーブル
	gorm.Model

	Name string
}